'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Project.init({
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
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'Project',
  });
  return Project;
};