const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('project', {
    projectTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    projectImg: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    projectDescription: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    siteUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    frontUrl: {
      type: DataTypes.STRING
    },
    backUrl: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: true,
    paranoid: true
  }
  );
};
