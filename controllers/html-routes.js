const router = require('express').Router();
const sequelize = require('../config/connection');
const { Specialists, Departments, Patients } = require('../models');

router.get('/', (req, res) => {
  res.render('Login', {
    loggedIn: req.session.loggedIn
  });
});

router.get('/Medisearch', (req, res) => {
  if (req.session.loggedIn) {
    res.render('Medisearch', {
      loggedIn: req.session.loggedIn
    });
    return;
  }
  res.render('Login');
});

router.get('/Medisearch/Specialists', (req, res) => {
  if (req.session.loggedIn) {
    res.render('Specialists', {
      loggedIn: req.session.loggedIn
    });
    return;
  }
  res.render('Login');
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

//router.delete('/Medisearch/Specialists/View', (req, res) => {
  //Specialists.destroy({
      //where: {
         // id: req.params.id
      //}
  //})
  //.then(dbSpecialistData => {
     // if (dbSpecialistData) {
      //    res.render('SpecialistView');
     // }
     // else{
      //  res.status(500).end();
     // }
  //})
  //.catch(err => {
   //   console.log(err);
   //   res.status(500).json(err);
 //// });
//});

router.get('/Medisearch/PatientJourney', (req, res) => {
  res.render('Medisearch');
});

router.get('/Medisearch/Patients', (req, res) => {
  if (req.session.loggedIn) {
    res.render('Patients', {
      loggedIn: req.session.loggedIn
    });
    return;
  }
  res.render('Login');
});

router.get('/Medisearch/Patients/add', (req, res) => {
  if (req.session.loggedIn) {
    res.render('PatientForm', {
      loggedIn: req.session.loggedIn
    });
    return;
  }
  res.render('Login');
});

router.get('/Medisearch/Patients/View', (req, res) => {
  console.log('==============');
    Patients.findAll({
        attributes: [
            'id',
            'PatientName',
            'PatientStatus',
            'PatientType',
            'prescription',
            'diagnosis',
            'reports',
            'isVaccinated'
        ]
    })
        .then(dbPatientData => {
            const patients = dbPatientData.map(patient => patient.get({ plain: true }));

            res.render('PatientsView', {patients});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});




router.get('/Medisearch/Departments', (req, res) => {
  if (req.session.loggedIn) {
    res.render('Departments', {
      loggedIn: req.session.loggedIn
    });
    return;
  }
  res.render('Login');
});

router.get('/Medisearch/Departments/add', (req, res) => {
  if (req.session.loggedIn) {
    res.render('DepartmentsForm', {
      loggedIn: req.session.loggedIn
    });
    return;
  }
  res.render('Login');
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
            if (req.session.loggedIn) {
              res.render('DepartmentView', {departments, 
                loggedIn: req.session.loggedIn});
              return;
            }
            res.render('Login');
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
            if (req.session.loggedIn) {
              res.render('DepartmentViewOne', {department, 
                loggedIn: req.session.loggedIn});
              return;
            }
            res.render('Login');
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