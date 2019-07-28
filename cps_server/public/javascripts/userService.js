"use strict";
const {dbConnection}  = require('./dbConn');
const crypto = require('crypto');

class UserService {
    getUserByUserId(userid) {

    }

    encrypt(data) {
        const cipher = crypto.createCipheriv(process.env.ENCRYPT_ALGO,
            process.env.ENCRYPT_KEY,
            process.env.ENCRYPT_IV);
        return (cipher.update(data, 'utf8', 'hex') + cipher.final());
    }

    addNewUser(user) {
        const query = "INSERT INTO user " +
            "(first_name, last_name, email, password, contact, bank_id, bank_acc_no, ssn)" +
            " VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        return new Promise( (resolve, reject) => {
            dbConnection.query(query,
                [user.first_name, user.last_name, user.email, this.encrypt(user.password),
                user.contact, user.bank_id, user.bank_acc_no, this.encrypt(user.ssn)],
                function(error, result) {
                if (error) {
                    return reject( error );
                }
                resolve(result);
            });
        });
    }

    getUserByUsernameAndPassword(username, password) {
        const query = "SELECT * FROM user WHERE email = ? AND password = ?";
        return new Promise( (resolve, reject) => {
            dbConnection.query(query, [username, this.encrypt(password)], function(error, result) {
                if (error) {
                    reject(error);
                }
                resolve(result[0]);
            });
        });
    }
}

module.exports = UserService;