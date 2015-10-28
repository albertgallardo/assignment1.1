var mongoose = require('mongoose');

var GraphDataSchema = new mongoose.Schema({
  Year: String,
  LoL: String,
  Dota2: String
}, 
{
  collection: 'graph-data-collection'
});

mongoose.model('GraphData', GraphDataSchema);
