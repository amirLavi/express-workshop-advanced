const express = require('express');
const userStorage = require('../userStorage');
var router = express.Router();

router.get('/', function(req, res, next){
    var user = userStorage.getAllUsers();
    res.send(user);
});
router.get('/:name', function(req,res,next) {
    var names = userStorage.getUserByName(req.params.name);
    res.send(names);
});

// router.post('/', function(req,res,next){
//
// });


module.exports = router;
