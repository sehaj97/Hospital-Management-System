const router = require('express').Router();
const sequelize = require('../config/connection');
const { Specialists, Departments, Patients } = require('../models');

router.get('/', (req, res) => {
  res.render('Login', {
    loggedIn: req.session.loggedIn
  });
});

router.get('/register', (req, res) => {
  res.render('Signup');
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
  if (req.session.loggedIn) {
    res.render('SpecialistForm', {
      loggedIn: req.session.loggedIn
    });
    return;
  }
  res.render('Login');
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
            if (req.session.loggedIn) {
              res.render('SpecialistView', {
                specialists,
                loggedIn: req.session.loggedIn
              });
              return;
            }
            res.render('Login');
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
            if (req.session.loggedIn) {
              res.render('SpecialistViewOne', {
                specialist,
                loggedIn: req.session.loggedIn
              });
              return;
            }
            res.render('Login');
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
    if (req.session.loggedIn) {
      res.render('SpecialistEdit', {
        specialist,
        loggedIn: req.session.loggedIn
      });
      return;
    }
    res.render('Login');
  } else{
    res.status(400).end();
  }
  })
  .catch(err => {
    res.status(500).json(err);
  });
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
            if (req.session.loggedIn) {
              res.render('PatientsView', {
                patients,
                loggedIn: req.session.loggedIn
              });
              return;
            }
            res.render('Login');
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/Medisearch/Patients/View/:id', (req, res) => {
  console.log('==============');
    Patients.findOne({
        where: {
          id: req.params.id
        },
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
            if(!dbPatientData){
              res.status(400).json({ message: 'No Patient found with this id' });
              return;
            }
            const patient = dbPatientData.get({ plain: true });
            if (req.session.loggedIn) {
              res.render('PatientsViewOne', {
                patient,
                loggedIn: req.session.loggedIn
              });
              return;
            }
            res.render('Login');
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/Medisearch/Patients/edit/:id', (req, res) => {
  Patients.findOne({
    where: {
      id: req.params.id
    },
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
    if(dbPatientData){
    const patient = dbPatientData.get({ plain: true });
    if (req.session.loggedIn) {
      res.render('PatientEdit', {
        patient,
        loggedIn: req.session.loggedIn
      });
      return;
    }
    res.render('Login');
  } else{
    res.status(400).end();
  }
  })
  .catch(err => {
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

module.exports = router;