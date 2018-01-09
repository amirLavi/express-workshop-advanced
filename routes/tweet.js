const express = require('express');
const tweet = require('../tweetStorage');
var router = express.Router();

router.get('/', function (req, res, next){
    var returnTweet = tweet.getAllTweets();
    console.log(returnTweet);
    res.send(returnTweet);
});

module.exports = router;
