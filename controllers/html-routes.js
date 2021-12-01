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

router.get('/Medisearch/Specialists', (req, res) => {
  res.render('Specialists');
});

router.get('/Medisearch/Specialists/add', (req, res) => {
  res.render('SpecialistForm');
});

router.get('/Medisearch/Patients', (req, res) => {
  res.render('Patients');
});

router.get('/Medisearch/Patients/add', (req, res) => {
  res.render('PatientForm');
});

// router.get('/Medisearch/PatientJourney', (req, res) => {
//   res.render('Medisearch');
// });

module.exports = router;