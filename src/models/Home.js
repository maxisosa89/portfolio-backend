const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('home', {
    homeTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    homeSubTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    homeSummary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  },
    {
      timestamps: true,
      paranoid: true
    });
};
