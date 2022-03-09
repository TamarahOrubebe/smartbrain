const jwt = require("jsonwebtoken");
const redis = require("redis");
const db = require('../../postgres/postgres.connect');
const bcrypt = require('bcrypt-nodejs');

//Set up redis
const redisClient = redis.createClient(process.env.REDIS_URI);


const handleSignin = (db, bcrypt, req, res) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return Promise.reject("incorrect form submission");
	}

	return db
		.select("email", "hash")
		.from("login")
		.where("email", "=", email)
		.then((data) => {
			const isValid = bcrypt.compareSync(password, data[0].hash);
			if (isValid) {
				return db
					.select("*")
					.from("users")
					.where("email", "=", email)
					.then((user) => user[0])
					.catch((err) => Promise.reject("unable to get user"));
			} else {
				return Promise.reject("wrong credentials");
			}
		})
		.catch((err) => Promise.reject("wrong credentials"));
};

const getTokenId = (req, res) => {
	
  const { authorization } = req.headers;

  return redisClient.get(authorization, (err, reply) => {
    if (err || !reply) {
      res.status(400).json('Unauthorized');
    }
    return res.json({ id: reply });
  })
};


const signToken = (email) => {
  const jwtPayload = { email };

  return jwt.sign(jwtPayload, process.env.JWT_SECRET, {expiresIn: '2 days'});
}

const setToken = (key, value) => {

  return Promise.resolve(redisClient.set(key, value));
}

const createSessions = (user) => {
	// JWT token and return user

  const { id, email } = user;
  const token = signToken(email)

  return setToken(token, id)
    .then(() => {
      return { success: 'true', userId: id, token };
    })
    .catch(err => console.log(err));
};

const signinAuthentication = (db, brypt) => (req, res) => {
	const { authorization } = req.headers;

	return authorization
		? getTokenId(req,res)
		: handleSignin(db, brypt, req, res)
				.then((data) => {
				return data.id && data.email ? createSessions(data) : Promise.reject(data);
        })
      .then(session => res.json(session))
				.catch(err => res.status(400).json(err));
};

module.exports = {
  signinAuthentication: signinAuthentication,
  redisClient: redisClient
};
