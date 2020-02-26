var express = require('express');
var router = express.Router();

// middleware that is specific to this router
// 해석 : 이 라우터와 관련된 미들웨어
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  res.send('Birds home page');
});
// define the about route
router.get('/about', function(req, res) {
  res.send('About birds');
});

module.exports = router;
