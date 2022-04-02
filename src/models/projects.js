'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Projects extends Model {
    static associate(models) {
      // define association here
    }
  }
  Projects.init({
    title: DataTypes.STRING,
    abbreviation: DataTypes.STRING,
    describe: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Projects',
  });
  return Projects;
};