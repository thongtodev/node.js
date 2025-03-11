const express = require('express');
const req = require('express/lib/request');
const path = require('path');
const app = express()
const port = 2929
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.get('/ray', (req, res) => {
    res.render('sample.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})