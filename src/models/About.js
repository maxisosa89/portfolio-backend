const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('about', {
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    softSkills: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    subSkills: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false
    },
    files: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false
    },
  },
    {
      timestamps: true,
      paranoid: true
    });
};
