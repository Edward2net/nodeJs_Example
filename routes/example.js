var express = require('express');
var router = express.Router();

/* GET main page. */
router.get('/main', function(req, res, next) {
  res.render('main', { 
    title: 'Main Title',
    secoend: 'secoend Title'
  });
});

/* GET example01 page. */
router.get('/example01', function(req, res, next) {
  res.render('./page/example/example01', { 
    title: 'Example',
    secoend: 'Grid Binding'
  });
});

/* GET example02 page. */
router.get('/example02', function(req, res, next) {
  res.render('./page/example/example02', { 
    title: 'Example',
    secoend: 'Text Binding'
  });
});

/* GET example03 page. */
router.get('/example03', function(req, res, next) {
  res.render('./page/example/example03', { 
    title: 'Example',
    secoend: 'Two ComboBox Binding'
  });
});

module.exports = router;