const pool = require("../../config/database");

module.exports = {
    postbarang: (data, callBack) => {
    pool.query(
    `insert into barang(nama_barang,stok_barang,harga_barang)
        values(?,?,?)`,
        [
            data.nama_barang,
            data.stok_barang,
            data.harga_barang
        ],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                    return callBack(null, results);
            }
        );
    },
    getBarang: callBack => {
        pool.query(
        `select * from barang`,
        [],
        (error, results, fields) => {
            if(error){
                return callBack(error);
            }
            return callBack(null, results);
        });
    },
    getBarangId: (data, callBack) => {
        pool.query(
        `select * from barang where id_barang = ?`,
        [data],
        (error, results, fields) => {
            if(error) {
                return callBack(error);
            }
            return callBack(null, results[0]);
        });
    },
    updateBarang: (data, callBack) => {
        pool.query(
        'update barang set nama_barang=?, stok_barang=?, harga_barang=? where id_barang = ?',
        [
            data.nama_barang,
            data.stok_barang,
            data.harga_barang,
            data.id_barang
        ],
        (error, results, fields) => {
            if(error) {
                return callBack(error);
            }
            return callBack(null, results);
        });
    },
    deleteBarang: (data, callBack) => {
        pool.query(
        'delete from barang where id_barang = ?',
        [data.id_barang],
        (error, results, fields) => {
            if(error) {
                return callBack(error);
            }
            return callBack(null, results[0]);
        });
    }
};