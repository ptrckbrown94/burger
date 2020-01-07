const mysql = require("mysql")

const connection = mysql.createConnection({
    host: "l3855uft9zao23e2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "smeiyqosugphq17k",

    // Your password
    password: "ehn9mnrxg9yu8en0",
    database: "edkh7j5t4jevscj8"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

module.exports = connection
