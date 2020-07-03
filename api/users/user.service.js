const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
    pool.query(
        `insert into registration(fistName, lastName, gender, email, password, number)
        values(?,?,?,?,?,?)`,
        [
            data.fist_name,
            data.last_name,
            data.gender,
            data.email,
            data.password,
            data.number
            ],
            (error, result, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, result)
            }

        );
    }
};