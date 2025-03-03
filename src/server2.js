const express = require('express'); //commonjs
const path = require('path'); //commonjs
const app = express() //app express
require('dotenv').config();
const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web')

const port = process.env.PORT || 2909;
const host_name = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//config route
app.use('/geats', webRouter)

app.listen(port, host_name, () => {
    console.log(`Example app listening on port ${port}`)
})