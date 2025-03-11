const connection = require('../config/database')


const getHome = (req, res) => {
    //process data
    return res.render('home.ejs')
    //call model
}

const getRay = (req, res) => {
    res.render('sample.ejs')
}




module.exports = {
    getHome,
    getRay
}