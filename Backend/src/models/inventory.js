'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.products);
    }
  }
  Inventory.init({
    availableQuantity: DataTypes.INTEGER,
    maximumStock: DataTypes.INTEGER,
    minimumStock: DataTypes.INTEGER,
    productID: DataTypes.INTEGER,
    updateDate: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Inventory',
  });
  return Inventory;
};