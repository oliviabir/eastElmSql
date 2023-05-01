'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'OrderProducts'
    return queryInterface.bulkInsert(options, [
      {
        orderId: 1,
        productId: 1,
        quantity: 2
      },
      {
        orderId: 2,
        productId: 2,
        quantity: 1
      },
      {
        orderId: 1,
        productId: 4,
        quantity: 2
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'OrderProducts'
    await queryInterface.bulkDelete(options, null, {})
  }
};
