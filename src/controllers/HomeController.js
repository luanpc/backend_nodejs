import db from '../models/index'
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('HomePage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e);
    }
}

let getAbout = (req, res) => {
    return res.render('About.ejs');
}
// Key: value
module.exports = {
    getHomePage: getHomePage,
    getAbout: getAbout
}