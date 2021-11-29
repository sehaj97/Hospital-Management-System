const router = require('express').Router();

const departmentRoutes = require('./departments-routes');
const specialistRoutes = require('./specialists-routes');

const patientRoutes = require('./patients-routes');

router.use('/departments', departmentRoutes);
router.use('/specialists', specialistRoutes);

router.use('/patients', patientRoutes);

module.exports = router;