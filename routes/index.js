// Where you will connect your other routers
const express = require('express');
var router = express.Router();
var userRouter = require('./user');

// router.use('/users', userRouter);
// /api/
router.get('/', function (req, res, next) {
    res.send('route /api route');
})

module.exports = router;
