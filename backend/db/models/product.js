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
      Product.hasMany(models.Review, { foreignKey: 'productId' })
      Product.belongsToMany(models.Order, {
        foreignKey: 'productId',
        otherKey: 'orderId',
        through: 'OrderProduct'
      })
      Product.hasMany(models.OrderProduct, {
        foreignKey: 'productId',
        onDelete: 'CASCADE',
        hooks: true
      })
    }
  }
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    category: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    imgOne: DataTypes.TEXT,
    imgTwo: DataTypes.TEXT,
    imgThree: DataTypes.TEXT,
    imgFour: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
