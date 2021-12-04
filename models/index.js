const Departments = require('./departments');
const Specialists = require('./specialists');
const Patients = require('./patients');

const User = require('./user');

Specialists.belongsTo(Departments, {
    foreignKey: 'department_id'
  });
  
  Departments.hasMany(Specialists,{
    foreignKey: 'department_id'
  });

module.exports = { Departments, Specialists, Patients, User };
