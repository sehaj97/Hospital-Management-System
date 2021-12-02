const router = require('express').Router();

const departmentRoutes = require('./departments-routes');
const specialistRoutes = require('./specialists-routes');

const patientRoutes = require('./patients-routes');

const userRoutes = require('./user-routes.js');

router.use('/departments', departmentRoutes);
router.use('/specialists', specialistRoutes);

router.use('/patients', patientRoutes);

router.use('/users', userRoutes);

module.exports = router;