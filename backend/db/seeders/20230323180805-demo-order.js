'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Orders'
    return queryInterface.bulkInsert(options, [
      {
        userId: 1,
        productId: 24,
        quantity: 2,
        instructions: 'Please leave at door'
      },
      {
        userId: 1,
        productId: 17,
        quantity: 1,
        instructions: null
      },
      {
        userId: 1,
        productId: 32,
        quantity: 1,
        instructions: null
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Orders'
    await queryInterface.bulkDelete(options, null, {});
  }
};
