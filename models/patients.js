const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Patients extends Model{};
    Patients.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            PatientName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            PatientStatus: {
                type: DataTypes.ENUM(
                    "Active",
                    "Discharged"
                ),
                allowNull: false,
                validate: {
                    isIn: {
                        args: [['Active', 'Discharged']],
                            msg: "Must be Active or Discharged"
                    }
                }
            },
            isIPD: { 
                type: DataTypes.BOOLEAN, 
                allowNull: false, 
                defaultValue: false
            },
            isOPD: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            }
        },
        {
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'patients'
        }
    );

    module.exports = Patients;