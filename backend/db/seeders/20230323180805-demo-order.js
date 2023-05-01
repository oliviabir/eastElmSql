'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Orders'
    return queryInterface.bulkInsert(options, [
      {
        userId: 1,
        instructions: 'Please leave at door'
      },
      {
        userId: 1,
        instructions: null
      },
      {
        userId: 1,
        instructions: null
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Orders'
    await queryInterface.bulkDelete(options, null, {});
  }
};
