const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Specialists extends Model{};
    Specialists.init(
        {
            id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true
            },
            SpecialistName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [2, 25]
                }
            },
            Speciality:{
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'specialists'
        }
    );

    module.exports = Specialists;