'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SalesDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Sales, {
        foreignKey: 'saleID'
      });
      this.belongsTo(models.Products, {
          foreignKey: 'productID'
        }
      );
    }
  }
  SalesDetail.init({
    saleID: DataTypes.INTEGER,
    productID: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SalesDetail',
  });
  return SalesDetail;
};