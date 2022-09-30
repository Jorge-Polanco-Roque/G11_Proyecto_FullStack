const express = require("express");
const router = express.Router();
const controladorPrincipal = require("../controllers/mainController");

router.get("/", controladorPrincipal.index);

module.exports = router;