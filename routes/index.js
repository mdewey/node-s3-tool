var express = require('express');
var router = express.Router();


var AWS = require("aws-sdk");
var s3 = new AWS.S3();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get("/json", function (req, res, next) {

  var myBucket = 'atlas-test-2-userId'; // should be userId
  var myKey = 'feedId-goes-here'; // should be feedId
  var params = {
    Bucket: myBucket,
    Key: myKey
  }

  s3.getObject(params, function (err, data) {
    if (err) {
      console.log("crap", err)
    }
    else {
      var fileContents = data.Body.toString();
      var json = JSON.parse(fileContents);
      res.json(json);
    }
  });

});

module.exports = router;
