var createError = require('http-errors');
const cors = require('cors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let AWS = require('aws-sdk');
const PORT = 3000;
const routes = require('./routes/index.js');
let bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var app = express();

// app.use(bodyParser.json());

// app.use(express.static(path.resolve(__dirname, '../front_work_gallery/build')));

app.use(cors());
// app.use('/', routes);

AWS.config.update({
  Bucket: 'danworkpictures',
  accessKeyId: 'AKIAUCZZW5YJMG64DXND',
  secretAccessKey: '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',
  region: 'us-east-2'
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

let s3 = new AWS.S3();


//arn:aws:iam::280904527378:user/dan_hook


// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', '../../front_work_gallery/build', 'index.html'));
// });



app.get('/allimages', function(req, res, next) {
  // let promise = s3.getSignedUrlPromise('getObject', params);

  // promise.then(function(url) {
  //   res.send(url)
  // }, function (err) {
  //   console.log("errrr", err);
  // })

  let params = {
    Bucket: 'danworkpictures',
    // Key: 'IMG_2921.jpg'
  }

   s3.listObjects(params, function(err, data) {
    if (err) console.log("error:", err.stack);
    
    else {
      res.json({
        images: data
      })
    }
  })
});

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
})

module.exports = app;
