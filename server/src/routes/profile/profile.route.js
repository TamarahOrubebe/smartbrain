const profile = require("./profile.controller");
const auth = require('../auth/authorization');
const express = require("express");
const db = require('../../postgres/postgres.connect');



const profileRouter = express.Router();

profileRouter.get("/profile/:id", auth.requireAuth, (req, res) => {
	profile.handleProfileGet(req, res, db);
});
profileRouter.post("/profile/:id", auth.requireAuth, (req, res) => {
	profile.handleProfileUpdate(req, res, db);
});


module.exports = profileRouter;
