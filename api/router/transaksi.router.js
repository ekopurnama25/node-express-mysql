const { 
    createTransaksi,
    getTransaksi,
    getTransaksiId,
    updateTransaksi,
    deleteTransaksi } = require("../controller/transaksi.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createTransaksi);
router.get("/", checkToken, getTransaksi);
router.get("/:data", checkToken, getTransaksiId);
router.patch("/", checkToken, updateTransaksi);
router.delete("/", checkToken, deleteTransaksi);

module.exports = router;