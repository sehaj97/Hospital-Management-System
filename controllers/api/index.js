const router = require('express').Router();

const departmentRoutes = require('./departments-routes');
const specialistRoutes = require('./specialists-routes');

router.use('/departments', departmentRoutes);
router.use('/specialists', specialistRoutes);

module.exports = router;