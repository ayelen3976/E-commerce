const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('category', {
        categoryID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allownull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allownull: true,
        },
        img: {
            type: DataTypes.TEXT,
            allowNull: true,
        }
    })

};