const register = require("./register.controller");
const db = require("../../postgres/postgres.connect");
const bcrypt = require('bcrypt-nodejs');

const express = require('express');

const registerRouter = express.Router();

registerRouter.post("/register", (req, res) => {
	register.handleRegister(req, res, db, bcrypt);
});


module.exports = registerRouter