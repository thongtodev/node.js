
const getHome = (req, res) => {
    //process data
    //call model
    res.send('Hello world with nodemon')
}

const getRay = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHome,
    getRay
}