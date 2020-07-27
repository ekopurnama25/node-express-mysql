const { 
    postbarang,
    getBarang,
    getBarangId,
    updateBarang,
    deleteBarang } = require("../service/barang.service");

module.exports = {
    createBarang: (req, res) => {
        const body = req.body;
        postbarang(body, (err, results) => {
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
    getBarang: (req, res) => {
        getBarang((err, results) => {
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
    getBarangId: (req, res) => {
        const data = req.params.data;
        getBarangId(data, (err, results) => {
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
    updateBarang: (req, res) => {
        const body = req.body;
        updateBarang(body, (err, results) => {
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
    deleteBarang: (req, res) => {
        const data = req.body;
        deleteBarang(data, (err, results) => {
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