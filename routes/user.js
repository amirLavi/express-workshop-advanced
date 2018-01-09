const express = require('express');
const userStorage = require('../userStorage');
var router = express.Router();

//getting all users
router.get('/', function(req, res, next){
    var tmpUser = userStorage.getAllUsers();
    // console.log(tmpUser.length);
    // console.log(tmpUser);
    var sendUser = [];
    // console.log(req.query);
    for(var i = 0; i < tmpUser.length; i++){
        if (tmpUser[i].salary >= req.query.minSalary){
            if(tmpUser[i].age <= req.query.maxAge){
                sendUser.push(tmpUser[i]);
            }
        }
    }
    // res.send(sendUser);
    res.send(tmpUser);
});
//getting users by name in the URI
router.get('/:name', function(req,res,next) {
    var names = userStorage.getUserByName(req.params.name);
    res.send(names);
});

//posting to the database
router.post('/', function(req,res,next){
    var name = req.body.name;
    var age = req.body.age;
    var salary = req.body.salary;
    var create = userStorage.createUser(name,age,salary);
    res.status(201).send();
});


module.exports = router;
