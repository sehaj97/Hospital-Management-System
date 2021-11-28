const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Departments extends Model{};
    Departments.init(
        {
            id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true
            },
            DepartmentName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate:{
                    isIn: {
                        args: [['Orthopedic','Psychiatric','Gynecology','Dermatology','Neurology','Cardiology','Ophthalmology','Oncology','Rehabilitation Services -- OT /PT /Kin /SLP',
                        'Administration']],
                        msg: 'Department name must match any of following:  Orthopedic, Psychiatric, Gynecology, Dermatology, Neurology, Cardiology, Ophthalmology, Oncology, Rehabilitation Services -- OT /PT /Kin /SLP, Administration'
                    }
                }
            }
        },
        {
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'departments'
        }
    );

    module.exports = Departments;