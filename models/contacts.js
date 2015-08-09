var mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
  gender: String,
  name : {
    first: String,
    last: String,
    title: String
  },
  location: {
    street: String,
    city: String,
    state: String,
    zip: String
  },
  email: String,
  dob: Date,
  phone: String,
  cell: String,
  picture: {
    large: String,
    medium: String,
    thumbnail: String
  }
});

var ContactModel = mongoose.model('Contacts', contactSchema);

function get(callback) {
  ContactModel.find({}, function (err, contacts) {
    callback(err, contacts);
  });
}

function getById(id, callback) {
  ContactModel.findById(id, function (err, contacts) {
    callback(err, contacts);
  });
}

module.exports = function () {
  return {
    getContacts: get,
    getContact: getById
  };
}();