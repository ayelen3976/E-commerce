const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('order', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        userId:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        direccion: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        telefono: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        estado: {
            type: DataTypes.ENUM({
                values: ['Carrito','Creada','Procesando','Cancelada','Completa']
            }),
            allowNull: false,
        }
    });
};

