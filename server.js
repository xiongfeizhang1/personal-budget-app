const express = require('express');
const mysql = require('mysql');

//database on port 3001, react website on port 3000
const port = process.env.port || 3001;
const app = express();


var connection = mysql.createConnection({

        host        : 'sql9.freemysqlhosting.net',
        user        : 'sql9381939',
        password    : 'D5TlnTnX5b',
        database    : 'sql9381939'

    
});



app.get('/', async (req, res) => {
    connection.connect();
    connection.query('SELECT * FROM budget', function (error, results, fields) {
        connection.end();
        if(error) throw error;
        res.json(results);
    });
});


app.listen(port, () => {
    console.log(`Server on port ${port}`);
})