const router = require('express').Router();

const departmentRoutes = require('./departments-routes');

router.use('/departments', departmentRoutes);

module.exports = router;