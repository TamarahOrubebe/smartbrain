const signin = require("./signin.controller");
const db = require("../../postgres/postgres.connect");
const bcrypt = require("bcrypt-nodejs");


const express = require("express");

const signinRouter = express.Router();

signinRouter.post("/signin", signin.signinAuthentication(db, bcrypt));

module.exports = signinRouter;
