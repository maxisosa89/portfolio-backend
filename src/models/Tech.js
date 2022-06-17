const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('tech', {
    techId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    techTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    techImg: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    timestamps: true,
    paranoid: true
  });
};
