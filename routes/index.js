var express = require('express');
var router = express.Router();


var AWS = require("aws-sdk");
var s3 = new AWS.S3();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get("/json", function (req, res, next) {
  var geojsonFeature = {
    "type": "Feature",
    "properties": {
      "name": "Coors Field",
      "amenity": "Baseball Stadium",
      "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-104.99404, 39.75621]
    }
  };
  res.json(geojsonFeature);

});

module.exports = router;
