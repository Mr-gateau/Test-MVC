// in /controllers/pages-controller.js
const showHomepage = (req, res, next) => {
   res.render('home')
   next();
}

module.exports = { showHomepage };
