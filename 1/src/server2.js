const express = require('express'); //commonjs
const path = require('path'); //commonjs
const app = express() //app express
require('dotenv').config();
const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web')
const mysql = require('mysql2');
const port = process.env.PORT || 2909;
const host_name = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//config route
app.use('/geats', webRouter)

const connection = await mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    database: 'hoidanit',
    password: '123456'
});

try {
    const [results, fields] = await connection.query(
        'select * from Users;'
    );

    console.log("results =", results); // results contains rows returned by server
    console.log("fields=", fields); // fields contains extra meta data about results, if available
} catch (err) {
    console.log(err);
}

app.listen(port, host_name, () => {
    console.log(`Example app listening on port ${port}`)
})