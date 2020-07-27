const pool = require("../../config/database");

module.exports = {
    transaksipost: (data, callBack) => {
    pool.query(
    `insert into transaksi(id_barang,jumlah_pembelian,harga_barang,bayar, kembalian)
        values(?,?,?,?,?)`,
        [
            data.id_barang,
            data.jumlah_pembelian,
            data.harga_barang,
            data.bayar,
            data.kembalian
        ],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                    return callBack(null, results);
            }
        );
    },
    getTransaksi: callBack => {
        pool.query(
        `select * from transaksi`,
        [],
        (error, results, fields) => {
            if(error){
                return callBack(error);
            }
            return callBack(null, results);
        });
    },
    getTransaksiId: (data, callBack) => {
        pool.query(
        `select * from transaksi where id_transaksi = ?`,
        [data],
        (error, results, fields) => {
            if(error) {
                return callBack(error);
            }
            return callBack(null, results[0]);
        });
    },
    updateTransaksi: (data, callBack) => {
        pool.query(
        'update transaksi set id_barang=?, jumlah_pembelian=?, harga_barang=?, bayar=?, kembalian=? where id_transaksi = ?',
        [
            data.id_barang,
            data.jumlah_pembelian,
            data.harga_barang,
            data.bayar,
            data.kembalian,
            data.id_transaksi
        ],
        (error, results, fields) => {
            if(error) {
                return callBack(error);
            }
            return callBack(null, results);
        });
    },
    deleteTransaksi: (data, callBack) => {
        pool.query(
        'delete from transaksi where id_transaksi = ?',
        [data.id_transaksi],
        (error, results, fields) => {
            if(error) {
                return callBack(error);
            }
            return callBack(null, results[0]);
        });
    }
};