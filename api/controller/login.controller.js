const { getUserByUserEmail } = require("../service/login.service");
const { compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
    login: (req, res) => {
        const body = req.body;
        getUserByUserEmail(body.email, (err, results) => {
            if(err) {
                console.log(err);
            }
            if(!results) {
                return res.json({
                    success : 0,
                    data : "invalid email or password"
                });
            }
            const result = compareSync(body.password, results.password);
            if (result){
                results.password = undefined;
                const jsontoken = sign({ result : results }, "qwe1234", {
                    expiresIn: "1h"
                });
                return res.json({
                    success : 1,
                    message : "login succesfully",
                    token : jsontoken
                });
            } else {
                return res.json({
                    success : 0,
                    data : "invalid email or password"

                });
            }
        });
    }
}