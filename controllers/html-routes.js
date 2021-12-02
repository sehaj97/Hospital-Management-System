const { Departments } = require('../models');

const router = require('express').Router();
// const { Patients } = require('../models');

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/Medisearch', (req, res) => {
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

router.get('/Medisearch/Departments', (req, res) => {
  res.render('Departments');
});

router.get('/Medisearch/Departments/add', (req, res) => {
  res.render('DepartmentsForm');
});

router.get('/Medisearch/Departments/View', (req, res) => {
  console.log('==============');
    Departments.findAll({
        attributes: [
            'id',
            'DepartmentName'
        ]
    })
        .then(dbDepartmentData => {
            const departments = dbDepartmentData.map(department => department.get({ plain: true }));

            res.render('DepartmentView', {departments});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/Medisearch/Departments/View/:id', (req, res) => {
  console.log('==============');
    Departments.findOne({
        where: {
          id: req.params.id
        },
        attributes: [
            'id',
            'DepartmentName'
        ]
    })
        .then(dbDepartmentData => {
            if(!dbDepartmentData){
              res.status(400).json({ message: 'No department found with this id' });
              return;
            }
            const department = dbDepartmentData.get({ plain: true });
            res.render('DepartmentViewOne', {
              department
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// router.get('/Medisearch/Patients/add', (req, res) => {
//   Patients.create({
//     PatientName: req.body.PatientName,
//     PatientStatus: req.body.PatientStatus,
//     PatientType: req.body.PatientType,
//     prescription: req.body.prescription,
//     diagnosis: req.body.diagnosis,
//     reports: req.body.reports,
//     isVaccinated: req.body.isVaccinated
// })
// .then(dbPatientData => { 
//     // res.json(dbPatientData);
//     if (!dbPatientData) {
//       res.status(400).json({message: 'No patient found with this id'});
//       return;
//     };
//     const patient = dbPatientData.get({plain: true});
//     res.render('PatientForm',{
//       patient
//     });
// })
// .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// });

// router.get('/Medisearch/PatientJourney', (req, res) => {
//   res.render('Medisearch');
// });

module.exports = router;