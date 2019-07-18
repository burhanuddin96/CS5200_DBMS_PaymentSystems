"use strict";
const {dbConnection}  = require('./dbConn');

class UserService {
    // constructor() {
    //     dbConnection.getConnection(function(error, tempConnection) {
    //        if(!!error) {
    //            tempConnection.release();
    //            console.log('Error connecting to database ', error);
    //        }
    //        else {
    //            UserService.connection = tempConnection;
    //            console.log('Connected to database');
    //        }
    //     });
    // }

    getUserByUserId(userid) {

    }

    getUserByUsernameAndPassword(username, password) {
        const query = "SELECT * FROM user WHERE email = ? AND password = ?";
        return new Promise( (resolve, reject) => {
            dbConnection.query(query, [username, password], function(error, result) {
                if (error) {
                    console.log('getUser error ', error);
                    return reject( error );
                }
                console.log(result);
                resolve(result);
            });
        });

        //     dbConnection.query(query, [username, password], function(error, result) {
        //     if (error) {
        //         console.log('getUser error ', error);
        //         return null;
        //     }
        //     else {
        //         console.log(result);
        //         return result;
        //     }
        // });
        // console.log('returning ', queryResult);
        // return queryResult;
    }
}

module.exports = UserService;