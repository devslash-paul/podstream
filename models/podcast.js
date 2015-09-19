var mongoose = require('mongoose');

var podSchema = mongoose.Schema({
  podname: String
});

module.exports = mongoose.model('Podcast', podSchema);