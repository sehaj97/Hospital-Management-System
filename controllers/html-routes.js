const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/Medisearch', (req, res) => {
  res.render('Medisearch');
});

router.get('/Medisearch/Departments', (req, res) => {
    res.render('Medisearch');
});

router.get('/Medisearch/Departments', (req, res) => {
  res.render('Medisearch');
});

router.get('/Medisearch/Departments', (req, res) => {
  res.render('Medisearch');
});

module.exports = router;