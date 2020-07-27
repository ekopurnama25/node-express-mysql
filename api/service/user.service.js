const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
    pool.query(
    `insert into tb_user(nama,email,password)
        values(?,?,?)`,
        [
            data.nama,
            data.email,
            data.password
        ],
        (error, results, fields) => {
            if(error){
                return callBack(error);
            }
                return callBack(null, results);
        });
    },
    getUsers: callBack => {
        pool.query(
        `select id_user, nama, email, password from tb_user`,
        [],
        (error, results, fields) => {
            if(error){
                return callBack(error);
            }
                return callBack(null, results);
        });
    },
    getUserById: (id, callBack) => {
    pool.query(
    `select id_user, nama, email, password from tb_user where id_user = ?`,
    [id],
        (error, results, fields) => {
            if(error){
                return callBack(error);
            }
                return callBack(null, results[0]);
        });
    },
    updateUsers: (data, callBack) => {
    pool.query(
    `update tb_user set nama=?, email=?, password=? where id_user = ?`,
        [
            data.nama,
            data.email,
            data.password,
            data.id_user
        ],
        (error, results, fields) => {
            if(error){
                return callBack(error);
            }
                return callBack(null, results);
        });
    },
    deleteUser: (data, callBack) => {
    pool.query(
    `delete from tb_user where id_user = ?`,
    [data.id_user],
        (error, results, fields) => {
            if(error){
                return callBack(error);
            }
                return callBack(null, results[0]);
        });
    }
};