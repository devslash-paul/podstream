var express = require('express');
var router = express.Router();
var Podcast = require('../models/podcast');

router.get('/podcast/:id', function (req, res, next) {
  Podcast.findById(req.params.id, function (err, doc) {
    return resp.send(doc);
  });
});

router.put('/podcast/:id', function (req, res, next) {

});

router.post('/podcast', function (req, res, next) {

});

module.exports = router;
