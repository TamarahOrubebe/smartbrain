const image = require("./image.controller");
const auth = require("../auth/authorization");
const db = require('../../postgres/postgres.connect');

const express = require('express');

const imageRouter = express.Router();

imageRouter.put("/image", auth.requireAuth, (req, res) => {
	image.handleImage(req, res, db);
});

imageRouter.post("/imageurl", auth.requireAuth, (req, res) => {
	image.handleApiCall(req, res);
});


module.exports = imageRouter;