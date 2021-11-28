const router = require('express').Router();

const departmentRoutes = require('./departments-routes');

const patientRoutes = require('./patients-routes');

router.use('/departments', departmentRoutes);

router.use('/patients', patientRoutes);

module.exports = router;