const { 
    createBarang,
    getBarang,
    getBarangId,
    updateBarang,
    deleteBarang } = require("../controller/barang.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createBarang);
router.get("/", checkToken, getBarang);
router.get("/:data", checkToken, getBarangId);
router.patch("/", checkToken, updateBarang);
router.delete("/", checkToken, deleteBarang);

module.exports = router;