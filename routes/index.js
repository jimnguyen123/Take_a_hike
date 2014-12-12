var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Index' });
});

/* GET header HOME page. */
router.get('/header2', function(req, res) {
  res.render('header2', { title: 'home header' });
});

/* GET footer HOME page. */
router.get('/footer2', function(req, res) {
  res.render('/footer2', { title: 'home header' });
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




/* GET template page. */
router.get('/hike1', function(req, res) {
  res.render('hike1', { title: 'Blah Page' });
});

/* GET template page. */
router.get('/hike2', function(req, res) {
  res.render('hike2', { title: 'Blah Page' });
});

/* GET template page. */
router.get('/hike3', function(req, res) {
  res.render('hike3', { title: 'Blah Page' });
});
/* GET template page. */
router.get('/hike4', function(req, res) {
  res.render('hike4', { title: 'Blah Page' });
});
/* GET template page. */
router.get('/hike5', function(req, res) {
  res.render('hike5', { title: 'Blah Page' });
});
/* GET template page. */
router.get('/hike6', function(req, res) {
  res.render('hike6', { title: 'Blah Page' });
});

/* GET template page. */
router.get('/hike7', function(req, res) {
  res.render('hike7', { title: 'Blah Page' });
});

/* GET template page. */
router.get('/hike8', function(req, res) {
  res.render('hike8', { title: 'Blah Page' });
});

/* GET template page. */
router.get('/hike9', function(req, res) {
  res.render('hike9', { title: 'Blah Page' });
});

/* GET template page. */
router.get('/hike10', function(req, res) {
  res.render('hike10', { title: 'Blah Page' });
});

/* GET template page. */
router.get('/hike11', function(req, res) {
  res.render('hike11', { title: 'Blah Page' });
});

/* GET template page. */
router.get('/hike12', function(req, res) {
  res.render('hike12', { title: 'Blah Page' });
});
/* GET template page. */
router.get('/hike13', function(req, res) {
  res.render('hike13', { title: 'Blah Page' });
});
/* GET template page. */
router.get('/hike14', function(req, res) {
  res.render('hike14', { title: 'Blah Page' });
});
/* GET template page. */
router.get('/hike15', function(req, res) {
  res.render('hike15', { title: 'Blah Page' });
});

/* GET template page. */
router.get('/hike16', function(req, res) {
  res.render('hike16', { title: 'Blah Page' });
});

/* GET template page. */
router.get('/hike17', function(req, res) {
  res.render('hike17', { title: 'Blah Page' });
});


/* GET template page. */
router.get('/hike18', function(req, res) {
  res.render('hike18', { title: 'Blah Page' });
});


/* GET template page. */
router.get('/hike19', function(req, res) {
  res.render('hike19', { title: 'Blah Page' });
});


/* GET template page. */
router.get('/hike20', function(req, res) {
  res.render('hike20', { title: 'Blah Page' });
});

module.exports = router;
