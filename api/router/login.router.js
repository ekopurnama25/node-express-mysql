const { login } = require("../controller/login.controller");
const router = require("express").Router();

router.post("/", login);

module.exports = router;