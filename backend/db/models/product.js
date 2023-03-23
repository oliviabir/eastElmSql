'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Order, { foreignKey: 'productId' })
      Product.hasMany(models.Review, { foreignKey: 'productId' })
    }
  }
  Product.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    category: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    imgOne: DataTypes.STRING,
    imgTwo: DataTypes.STRING,
    imgThree: DataTypes.STRING,
    imgFour: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
