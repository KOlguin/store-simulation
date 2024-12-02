'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.SalesDetail, {
        foreignKey: 'productID'
      })
      this.hasOne(models.Inventory, {
        foreignKey: 'productID'
      });
    }
  }
  Products.init({
    SKU: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};