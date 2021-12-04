const { Model, DataTypes, Sequelize } = require('sequelize');
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

            // PatientMedid: {
            //     type: DataTypes.STRING,
            //     allowNull: false
            // }
        
            PatientStatus: {
                type: Sequelize.ENUM ({ 
                    values: ['Active', 'Discharged'] 
                }),
                allowNull: false,
                validate: {
                    isIn: {
                        args: [['Active', 'Discharged']],
                            msg: "Must be Active or Discharged"
                    }
                }
            },

            PatientType: {
                type: Sequelize.ENUM ({ 
                    values: ['Inpatient', 'Outpatient'] 
                }),
                allowNull: false,
                validate: {
                    isIn: {
                        args: [['Inpatient', 'Outpatient']],
                            msg: "Must be Inpatient or Outpatient"
                    }
                }
            },
    
            prescription: {
                type: DataTypes.STRING,
                allowNull: false
            },

            diagnosis:{
                type: DataTypes.STRING,
                allowNull: false
            },

            reports:{
                type: DataTypes.STRING,
                allowNull: false
            },

            isVaccinated: {
                type: Sequelize.ENUM ({ 
                    values: ['Vaccinated', 'Not Vaccinated', 'Other'] 
                }),
                allowNull: false,
                validate: {
                    isIn: {
                        args: [['Vaccinated', 'Not Vaccinated', 'Other']],
                            msg: "Must be Vaccinated, Not Vaccinated, Other"
                    }
                }
            },
            // isVaccinated: {
            //     type: Sequelize.BOOLEAN, 
            //     allowNull: false, 
            //     defaultValue: true
            // }
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