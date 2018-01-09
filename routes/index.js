// Where you will connect your other routers
const express = require('express');
var router = express.Router();
var userRouter = require('./user');

// /api/
router.get('/', function (req, res, next) {
    res.send('route /api route');
})

router.use('/users', userRouter);

module.exports = router;
