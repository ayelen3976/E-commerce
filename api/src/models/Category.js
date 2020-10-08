const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

sequelize.define('category',{
    name: {
        type: DataTypes.STRING,
        allownull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allownull: true,
    }
})

};