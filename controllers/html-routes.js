const router = require('express').Router();
const sequelize = require('../config/connection');
const { Specialists } = require('../models');

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

router.get('/Medisearch/Specialists/View', (req, res) => {
  console.log('==============');
    Specialists.findAll({
        attributes: [
            'id',
            'SpecialistName',
            'Speciality'
        ]
    })
        .then(dbSpecialistData => {
            const specialists = dbSpecialistData.map(specialist => specialist.get({ plain: true }));

            res.render('SpecialistView', {specialists});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/Medisearch/Specialists/View/:id', (req, res) => {
  console.log('==============');
    Specialists.findOne({
        where: {
          id: req.params.id
        },
        attributes: [
            'id',
            'SpecialistName',
            'Speciality'
        ]
    })
        .then(dbSpecialistData => {
            if(!dbSpecialistData){
              res.status(400).json({ message: 'No specialist found with this id' });
              return;
            }
            const specialist = dbSpecialistData.get({ plain: true });
            res.render('SpecialistViewOne', {
              specialist
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/Medisearch/Specialists/edit/:id', (req, res) => {
  Specialists.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'SpecialistName',
      'Speciality'
    ]
  })
  .then(dbSpecialistData => {
    if(dbSpecialistData){
    const specialist = dbSpecialistData.get({ plain: true });
    res.render('SpecialistEdit', {
      specialist
    });
  } else{
    res.status(400).end();
  }
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

router.delete('/Medisearch/Specialists/View', (req, res) => {
  Specialists.destroy({
      where: {
          id: req.params.id
      }
  })
  .then(dbSpecialistData => {
      if (dbSpecialistData) {
          res.render('SpecialistView');
      }
      else{
        res.status(500).end();
      }
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

router.get('/Medisearch/PatientJourney', (req, res) => {
  res.render('Medisearch');
});

module.exports = router;