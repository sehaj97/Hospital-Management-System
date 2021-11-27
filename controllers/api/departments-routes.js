const router = require('express').Router();
const { Departments } = require('../../models');

// get all departments
router.get('/', (req, res) => {
    Departments.findAll()
        .then(dbDeptartmentData => res.json(dbDeptartmentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// post department
router.post('/', (req, res) => {
    Departments.create({
        DepartmentName: req.body.DepartmentName
    })
    .then(dbDeptartmentData => {
        res.json(dbDeptartmentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;
