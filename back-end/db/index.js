const mongoose = require('mongoose');
mongoose.connect('mongodb://zaid:zaid-1994@ds117545.mlab.com:17545/sport');

var db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
});

db.once('open', function () {
  console.log('mongoose connected successfully');
});
//make schema
var itemSchema = mongoose.Schema({
    title: String,
    title_ar: String,
    subtitle: String,
    subtitle_ar: String,
    image_url: String,
    created_at :String,
 
});

var items = mongoose.model('items', itemSchema);

// this function will be calde in the get fungtion to get all the data from the data base 
var selectAll = function (callback) {
  items.find({}, function (err, items) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;
