
const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");

const cors = require("cors");
const db = require("./postgres/postgres.connect");
const morgan = require("morgan");



const imageRouter = require('./routes/image/image.route');
const registerRouter = require('./routes/login/register.route');
const signinRouter = require('./routes/login/signin.route');
const profileRouter = require('./routes/profile/profile.route');

const app = express();



app.use(morgan('combined'))
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));



app.use(registerRouter);
app.use(signinRouter);
app.use(profileRouter);
app.use(imageRouter);
app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

app.listen(3300, () => {
	console.log("app is running on port 3300");
});
