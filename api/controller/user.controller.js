const { 
    create,
    getUsers,
    getUserById,
    updateUsers,
    deleteUser,
    getUserByUserEmail } = require("../service/user.service");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        create(body, (err, results) => {
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
    getUserById: (req, res) => {
        const id = req.params.id;
        getUserById(id, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success : 0,
                    message : "Record not found"
                });
            }
            return res.json({
                success : 1,
                data: results
            });
        });
    },
    getUsers: (req, res) => {
        getUsers((err, results) => {
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
    updateUsers: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        updateUsers(body, (err, results) => {
            if(err){
            console.log(err);
            return;
        }
        if(!results) {
            return res.json({
                success : 0,
                message : "Failed to update users"
            });
        }
        return res.json({
            success: 1,
            message : "update successfully"
        });
      });
    },
    deleteUser: (req, res) => {
        const data = req.body;
        deleteUser(data, (err, results) => {
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
};