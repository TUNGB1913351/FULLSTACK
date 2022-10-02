'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class doctor_chuyenkhoa_thongtin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  doctor_chuyenkhoa_thongtin.init({ 
    doctorID: DataTypes.INTEGER,
    thongtin: DataTypes.INTEGER,
    chuyenkhoa: DataTypes.INTEGER
  }, 
  {
    sequelize,
    modelName: 'doctor_chuyenkhoa_thongtin',
  });
  return doctor_chuyenkhoa_thongtin;
};