'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Reviews'
    return queryInterface.bulkInsert(options, [
      {
        userId: 1,
        productId: 2,
        rating: 4,
        body: 'The sofa is great, soft and very comfy!'
      },
      {
        userId: 1,
        productId: 3,
        rating: 4,
        body: 'Have had the chair for a little over two weeks and love it.'
      },
      {
        userId: 2,
        productId: 2,
        rating: 5,
        body: 'Expensive but worth every penny.'
      },
      {
        userId: 3,
        productId: 7,
        rating: 4,
        body: 'Beautiful, well-made chairs. And they are nice and light. Would recommend to anyone.'
      },
      {
        userId: 3,
        productId: 15,
        rating: 4,
        body: 'Elevates space and looks elegant but not boring. If you want something stylish without sacrificing comfort then its the chair for you!'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Reviews'
    await queryInterface.bulkDelete(options, null, {});
  }
};
