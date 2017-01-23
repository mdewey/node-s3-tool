var AWS = require('aws-sdk');

var s3 = new AWS.S3();


// Bucket names must be unique across all S3 users

var myBody = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [102.0, 0.5] },
      "properties": { "prop0": "value0" }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [102.0, 0.0], [103.0, 1.0], [104.0, 0.0], [105.0, 1.0]
        ]
      },
      "properties": {
        "prop0": "value0",
        "prop1": 0.0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [[100.0, 0.0], [101.0, 0.0], [101.0, 1.0],
          [100.0, 1.0], [100.0, 0.0]]
        ]
      },
      "properties": {
        "prop0": "value0",
        "prop1": { "this": "that" }
      }
    }
  ]
}



var addOrUpdateFeed = function (userId, feedId, data, callback) {

  s3.createBucket({ Bucket: myBucket }, function (err, data) {

    if (err) {

      console.log(err);

    } else {

      params = { Bucket: myBucket, Key: myKey, Body: JSON.stringify(myBody)};

      s3.putObject(params, function (err, data) {

        if (err) {

          console.log(err)

        } else {

          console.log("Successfully uploaded data to myBucket/myKey");

        }

      });

    }

  });
}

var getFeedAsJson = function (userId, feedId, callback) {
 
}
//addOrUpdateFeed();
getFeedAsJson();