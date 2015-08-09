var express = require('express');
var router = express.Router();
var db = require('../models/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MEAN Corp' });
});

router.get('/about', function(req, res, next){
  res.render('index', { title: 'About' });
});

router.get('/contacts', function(req, res, next){
  db.Contacts.getContacts(function(err, contacts){
    if(!err){
      res.render('contacts', { title: 'Contacts', contacts: contacts});
    }
  });
});

router.get('/add-contact', function(req, res, next){
  res.render('index', { title: 'Add Contact' });
});

router.get('/edit-contact/:id', function(req, res, next){
  var id = req.params.id;
  db.Contacts.getContact(id, function(err, contact) {
    res.render('edit-contact', {title: 'Edit Contact', contact: contact});
  })
});

router.post('/edit-contact/', function(req, res, next){
    console.log("Edit Contact Post");
  res.redirect('/contacts/');

});

module.exports = router;
