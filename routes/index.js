var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Index' });
});

/* GET takeahike page. */
router.get('/findahike', function(req, res) {
  res.render('findahike', { title: 'Take A Hike' });
});

/* GET hike template page. */
router.get('/hike_template', function(req, res) {
  res.render('hike_template', { title: 'Hike Template' });
});

/* GET takeahike page. */
router.get('/social_template', function(req, res) {
  res.render('social_template', { title: 'Social Template!' });
});

/* GET template page. */
router.get('/template', function(req, res) {
  res.render('template', { title: 'Template' });
});

/* GET test page. */
router.get('/quicklinks', function(req, res) {
  res.render('quicklinks', { title: 'Quicklinks' });
});

/* GET cogs template page. */
router.get('/cogs187a', function(req, res) {
  res.render('cogs187a', { title: 'Template' });
});


/* GET blog page. */
router.get('/blog', function(req, res) {
  res.render('blog', { title: 'Blog' });
});

/* GET social page. */
router.get('/social', function(req, res) {
  res.render('social', { title: 'Social' });
});

/* GET tips page. */
router.get('/tips', function(req, res) {
  res.render('tips', { title: 'Tips' });
});

/* GET template page. */
router.get('/blah', function(req, res) {
  res.render('blah', { title: 'Blah Page' });
});
module.exports = router;
