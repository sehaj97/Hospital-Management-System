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

router.get('/:id', (req, res) => {
    Departments.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbDeptartmentData => {
            if(!dbDeptartmentData){
                res.status(404).json({ message: 'No department found with this id'})
                return;
            }
            res.json(dbDeptartmentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
