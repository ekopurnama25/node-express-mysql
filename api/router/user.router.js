const { 
    createUser, 
    getUserById, 
    getUsers, 
    updateUsers,
    deleteUser } = require("../controller/user.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createUser);
router.get("/", checkToken, getUsers);
router.get("/:id", checkToken, getUserById);
router.patch("/", checkToken, updateUsers);
router.delete("/", checkToken, deleteUser);


module.exports = router;