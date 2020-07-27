const { 
    transaksipost,
    getTransaksi,
    getTransaksiId,
    updateTransaksi,
    deleteTransaksi } = require("../service/transaksi.service");

module.exports = {
    createTransaksi: (req, res) => {
        const body = req.body;
        transaksipost(body, (err, results) => {
            if(err){
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: "Database Conection Error"
            });
        }
        return res.status(200).json({
            success: 1,
            data: results
        });
      });
    },
    getTransaksi: (req, res) => {
        getTransaksi((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success : 1,
                data : results
            });
        });
    },
    getTransaksiId: (req, res) => {
        const data = req.params.data;
        getTransaksiId(data, (err, results) => {
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success : 0,
                    message : "Record not Fount"
                });
            }
            return res.json({
                success : 1,
                data : results
            });
        })
    },
    updateTransaksi: (req, res) => {
        const body = req.body;
        updateTransaksi(body, (err, results) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    success : 0,
                    message : "Database not working"
                });
            }
            return res.status(200).json({
                success : 1,
                data : results
            });
        });
    },
    deleteTransaksi: (req, res) => {
        const data = req.body;
        deleteTransaksi(data, (err, results) => {
            if(err){
            console.log(err);
            return;
        }
        if(results) {
            return res.json({
                success : 0,
                message : "Record not found"
            });
        }
        return res.json({
            success: 1,
            message : "user delete successfully"
        });
      });
    }
}