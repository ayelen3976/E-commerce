const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('review', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        stars: {
            type: DataTypes.FLOAT,
            allowNull: true,
            validate: {
                min: 1,
                max: 5
            }
        }
    })

};