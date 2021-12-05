const router = require('express').Router();
const { Specialists, Departments } = require('../../models');

// get all specialists
router.get('/', (req, res) => {
    Specialists.findAll({
        attributes: ['id', 'SpecialistName', 'Speciality'],
        include: [
            {
              model: Departments,
              attributes: ['DepartmentName']
            }
          ]
    })
        .then(dbSpecialistData => res.json(dbSpecialistData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get single specialist
router.get('/:id', (req, res) => {
    Specialists.findOne({
        where: {
            id: req.params.id
        },
    })    
        .then(dbSpecialistData => {
            if(!dbSpecialistData){
                res.status(404).json({ message: 'No specialist found with this id' });
                return;
            }
            res.json(dbSpecialistData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    });

// post a specialist
router.post('/', (req, res) => {
    Specialists.create({
        SpecialistName: req.body.SpecialistName,
        Speciality: req.body.Speciality,
        department_id: req.body.department_id
    })
    .then(dbSpecialistData => {
        res.json(dbSpecialistData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Update a specialist
router.put('/:id', (req, res) => {
    Specialists.update(req.body, {
        where: {
            id: req.params.id
        },        
    })
        .then(dbSpecialistData => {
            if(!dbSpecialistData) {
                res.status(404).json({ message: 'No specialist found with this id' });
                return;
            }
            res.json(dbSpecialistData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Specialists.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbSpecialistData => {
        if (!dbSpecialistData) {
            res.status(404).json({ message: 'No specialist found with this id' });
            return;
        }
        res.json(dbSpecialistData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;