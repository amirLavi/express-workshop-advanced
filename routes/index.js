// Where you will connect your other routers
const express = require('express');
var router = express.Router();
var userRouter = require('./user');
var userTweets = require('./tweet');

// /api/
router.get('/', function (req, res, next) {
    res.send('route /api route');
})

router.use('/users', userRouter);

router.use('/tweets', userTweets);

module.exports = router;
