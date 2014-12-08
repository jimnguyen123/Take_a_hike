var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Index' });
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
module.exports = router;
