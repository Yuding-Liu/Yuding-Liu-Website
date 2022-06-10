var express = require('express');

var router = express.Router();

router.get('/chess', function (req, res, next) {
    if (!req.user) {
        return res.render('home');
    }
    next();
}, function (req, res, next) {
    res.render('chess', {
        user: req.user
    });
});


module.exports = router;