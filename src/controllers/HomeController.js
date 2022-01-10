let getHomePage = (req, res) => {
    return res.render('HomePage.ejs');
}

let getAbout = (req, res) => {
    return res.render('About.ejs');
}
// Key: value
module.exports = {
    getHomePage: getHomePage,
    getAbout: getAbout
}