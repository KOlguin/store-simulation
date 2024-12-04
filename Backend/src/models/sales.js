'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Customer, {
        foreignKey: 'customerID'
      });
      this.hasMany(models.SalesDetail, {
        foreignKey: 'saleID'
      });
    }
  }
  Sales.init({
    salesDate: DataTypes.DATEONLY,
    customerID: DataTypes.INTEGER,
    salesDescription: DataTypes.STRING,
    total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sales',
  });
  return Sales;
};