const express = require('express');
const mysql = require('mysql');
const exJwt = require("express-jwt");

//database on port 3001, react website on port 3000
const port = process.env.port || 3001;
const app = express();


var connection = mysql.createConnection({

        host        : 'sql9.freemysqlhosting.net',
        user        : 'sql9381939',
        password    : 'D5TlnTnX5b',
        database    : 'sql9381939'

    
});





app.listen(port, () => {
    console.log(`Server on port ${port}`);
})