const express = require('express'); //commonjs
const path = require('path'); //commonjs
const app = express() //app express
require('dotenv').config();
const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web')
const connection = require('./config/database')
const port = process.env.PORT || 2909;
const host_name = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//config route
app.use('/', webRouter)


connection.query(
    'select * from Users',
    function (err, results, fields) {
        console.log("results =", results); // results contains rows returned by server
    }
);

app.listen(port, host_name, () => {
    console.log(`Example app listening on port ${port}`)
})