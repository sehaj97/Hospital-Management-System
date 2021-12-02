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

            // isIPD: { 
            //     type: DataTypes.BOOLEAN, 
            //     allowNull: false, 
            //     defaultValue: false
            // },

            // isOPD: {
            //     type: DataTypes.BOOLEAN,
            //     allowNull: false,
            //     defaultValue: false
            // },

            prescription: {
                type: DataTypes.STRING,
                allowNull: false
            },

            diagnosis:{
                type: DataTypes.STRING,
                allowNull: false
            }

            // reports:{
            //     type: DataTypes.STRING,
            //     allowNull: false
            // },

            // isVaccinated: {
            //     type: DataTypes.BOOLEAN, 
            //     allowNull: false, 
            //     defaultValue: false
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