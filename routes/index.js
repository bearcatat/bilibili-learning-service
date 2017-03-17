var express = require('express');
var router = express.Router();
var superagent = require('superagent');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/index/ranking-3day.json',function(req,res,next){
 superagent.get('http://www.bilibili.com/index/ranking-3day.json').end(function(err,sres){
   if(err){
     console.log(err);
   }
   res.send(JSON.parse(sres.text));
 })
})
router.get('/typedynamic/index',function(req,res,next){
  superagent.get('http://api.bilibili.com'+req.url).end(function(err,sres){
    if(err){
      console.log(err);
    }
    res.send(JSON.parse(sres.text));
  })
})
module.exports = router;
