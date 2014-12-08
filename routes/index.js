var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Index' });
});

/* GET giving page. */
router.get('/giving', function(req, res) {
  res.render('giving', { title: 'Giving' });
});

/* GET about page. */
router.get('/resources', function(req, res) {
  res.render('resources', { title: 'Resources' });
});

/* GET contact page. */
router.get('/contact', function(req, res) {
  res.render('contact', { title: 'Contact' });
});

/* GET test page. */
router.get('/quicklinks', function(req, res) {
  res.render('quicklinks', { title: 'Quicklinks' });
});

/* GET cogs template page. */
router.get('/cogs187a', function(req, res) {
  res.render('cogs187a', { title: 'Template' });
});

/* GET cogs home page. */
router.get('/home', function(req, res) {
  res.render('home', { title: 'Home' });
});

/* GET cogs alumni page. */
router.get('/alumni', function(req, res) {
  res.render('alumni', { title: 'Alumni & Supporters' });
});

/* GET cogs study page. */
router.get('/study', function(req, res) {
  res.render('study', { title: 'Study With Us' });
});

module.exports = router;
