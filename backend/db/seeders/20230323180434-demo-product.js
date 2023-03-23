'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName= 'Products'
    return queryInterface.bulkInsert(options, [
      {
        name: 'The Blair',
        description: 'Vintage swivel chair',
        category: 'chairs',
        price: 1235,
        imgOne: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyODI5Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        imgTwo: null,
        imgThree: null,
        imgFour: null
      },
      {
        name: 'The Brunetti',
        description: 'Modern tall back sofa',
        category: 'sofas',
        price: 12550,
        imgOne: 'https://images.unsplash.com/photo-1540638349517-3abd5afc5847?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyODM0NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        imgTwo: null,
        imgThree: null,
        imgFour: null
      },
      {
        name: 'The Aleida',
        description: 'Wood framed green upholstered chair',
        category: 'chairs',
        price: 2070,
        imgOne: 'https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNDk5Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        imgTwo: null,
        imgThree: null,
        imgFour: null
      },
      {
        name: 'The Chaudhari',
        description: 'Modern velvet sofa',
        category: 'sofas',
        price: 11999,
        imgOne: 'https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNDkzMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        imgTwo: null,
        imgThree: null,
        imgFour: null
      },
      {
        name: 'The Kasabian',
        description: 'Clean line black sofa',
        category: 'sofas',
        price: 8799,
        imgOne: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNTAzOA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        imgTwo: null,
        imgThree: null,
        imgFour: null
      },
      {
        name: 'The Henson',
        description: 'Vintage wooden stool',
        category: 'chairs',
        price: 3599,
        imgOne: 'https://images.unsplash.com/photo-1552324190-9e86fa095c4a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNTEzNA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        imgTwo: null,
        imgThree: null,
        imgFour: null
      },
      {
        name: 'The Davina',
        description: 'Grey upholstered chair',
        category: 'chairs',
        price: 4926,
        imgOne: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNTE3Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        imgTwo: null,
        imgThree: null,
        imgFour: null
      },
      {
        name: 'The Cecilia',
        description: 'Classic brown leather sofa',
        category: 'sofas',
        price: 1089,
        imgOne: 'https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNTI1Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        imgTwo: null,
        imgThree: null,
        imgFour: null
      },
      {
        name: 'The Cole',
        description: 'Minimalist dining chair',
        category: 'chairs',
        price: 3789,
        imgOne: 'https://images.unsplash.com/photo-1596079890687-58c51d24889a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNTM4MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        imgTwo: null,
        imgThree: null,
        imgFour: null
      },
      {
        name: 'The Waverly',
        description: 'Architectural wooden nightstand',
        category: 'tables',
        price: 6105,
        imgOne: 'https://images.unsplash.com/photo-1611486212557-88be5ff6f941?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNTQzNg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        imgTwo: null,
        imgThree: null,
        imgFour: null
      },
      {
        name: 'The Addison',
        description: 'Wooden nesting tables',
        category: 'tables',
        price: 3190,
        imgOne: 'https://images.unsplash.com/photo-1611486212355-d276af4581c0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNTQ5NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        imgTwo: null,
        imgThree: null,
        imgFour: null
      },
      {
        name: 'The Haimo',
        description: 'Midcentury tan leather sofa',
        category: 'sofas',
        price: 9945,
        imgOne: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNTU0NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=640',
        imgTwo: null,
        imgThree: null,
        imgFour: null
      },
      {
        name: 'The Glen',
        description: 'Cozy white sectional',
        category: 'sofas',
        price: 13599,
        imgOne: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNTgyNw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        imgTwo: null,
        imgThree: null,
        imgFour: null
      },
      {
        name: 'The Clarette',
        description: 'Brown leather stool',
        category: 'chairs',
        price: 1560,
        imgOne: 'https://images.unsplash.com/photo-1597072689227-8882273e8f6a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNjAxNw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        imgTwo: null,
        imgThree: null,
        imgFour: null
      },
      {
        name: 'The Yvonne',
        description: 'Sculptural wooden chair',
        category: 'chairs',
        price: 5500,
        imgOne: 'https://images.unsplash.com/photo-1597072689227-8882273e8f6a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNjAxNw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        imgTwo: null,
        imgThree: null,
        imgFour: null
      },
      {
        name: 'The Hippolyta',
        description: 'Tan leather sofa',
        category: 'sofas',
        price: 10700,
        imgOne: 'https://images.unsplash.com/photo-1597425842320-de0c26b33327?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNjE0Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        imgTwo: null,
        imgThree: null,
        imgFour: null
      },
      {
        name: 'The Valencia',
        description: 'White leather fainting sofa',
        category: 'sofas',
        price: 11900,
        imgOne: 'https://images.unsplash.com/photo-1609103131880-c541ea179cd2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNjIwMw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        imgTwo: null,
        imgThree: null,
        imgFour: null
      },
      {
        name: 'The Demeter',
        description: 'Sheepskin chair',
        category: 'chairs',
        price: 1660,
        imgOne: 'https://images.unsplash.com/photo-1429709535771-15665442d6b1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNjI4OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        imgTwo: null,
        imgThree: null,
        imgFour: null
      },
      {
        name: 'The Renard',
        description: 'White entry console',
        category: 'tables',
        price: 5199,
        imgOne: 'https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNjMzMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        imgTwo: null,
        imgThree: null,
        imgFour: null
      },
      {
        name: 'The Sarto',
        description: 'Black sculptural chairs',
        category: 'chairs',
        price: 2999,
        imgOne: 'https://images.unsplash.com/photo-1591964702073-e654131f18df?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNjM5Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        imgTwo: null,
        imgThree: null,
        imgFour: null
      },
      {
        name: 'The Hudson',
        description: 'Black kitchen chair',
        category: 'chairs',
        price: 2799,
        imgOne: 'https://images.unsplash.com/photo-1596162954151-cdcb4c0f70a8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNjUwNA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        imgTwo: null,
        imgThree: null,
        imgFour: null
      },
      {
        name: 'The Muriel',
        description: 'Paddle leg wood sidetables',
        category: 'tables',
        price: 2700,
        imgOne: 'https://images.unsplash.com/photo-1540809799-5da9372c3f64?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNjc0NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        imgTwo: null,
        imgThree: null,
        imgFour: null
      },
      {
        name: 'The Serra',
        description: 'Handcrafted wooden chair',
        category: 'chairs',
        price: 2099,
        imgOne: 'https://images.unsplash.com/photo-1572297794744-a19043e308f8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=580&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNjkxMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        imgTwo: null,
        imgThree: null,
        imgFour: null
      },
      {
        name: 'The Nika',
        description: '70s metal and leather chair',
        category: 'chairs',
        price: 3599,
        imgOne: 'https://images.unsplash.com/photo-1569597970494-29fe318c2595?&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNjk5MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        imgTwo: null,
        imgThree: null,
        imgFour: null
      },
      {
        name: 'The Aditya',
        description: 'Midcentury plush chair',
        category: 'chairs',
        price: 4599,
        imgOne: 'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNzA3MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        imgTwo: null,
        imgThree: null,
        imgFour: null
      },
      {
        name: 'The Raniya',
        description: 'Classic vanity chair',
        category: 'chairs',
        price: 1200,
        imgOne: 'https://images.unsplash.com/photo-1619596658767-f3bbb82b0dee?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNzEyMw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        imgTwo: null,
        imgThree: null,
        imgFour: null
      },
      {
        name: 'The Mihaela',
        description: 'Handcrafted driftwood nightstand',
        category: 'tables',
        price: 3000,
        imgOne: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNzE2NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        imgTwo: null,
        imgThree: null,
        imgFour: null
      },
      {
        name: 'The Darcy',
        description: '60s kitchen chair',
        category: 'chairs',
        price: 3500,
        imgOne: 'https://images.unsplash.com/photo-1611464908623-07f19927264e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNzQ0Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        imgTwo: null,
        imgThree: null,
        imgFour: null
      },
      {
        name: 'The Mathias',
        description: 'Leather pedestal chair',
        category: 'chairs',
        price: 9500,
        imgOne: 'https://images.unsplash.com/photo-1572297794908-f2ee5a2930d6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=520&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNzY2OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        imgTwo: null,
        imgThree: null,
        imgFour: null
      },
      {
        name: 'The Dolan',
        description: 'Rustic coffee table',
        category: 'tables',
        price: 7599,
        imgOne: 'https://images.unsplash.com/photo-1619911013257-8f1fbc919fc9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNzkyOA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        imgTwo: null,
        imgThree: null,
        imgFour: null
      },
      {
        name: 'The Simas',
        description: 'Metal top side table',
        category: 'tables',
        price: 4800,
        imgOne: 'https://images.unsplash.com/photo-1585167095899-a33318ea90b0?&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyNzk3Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        imgTwo: null,
        imgThree: null,
        imgFour: null
      },
      {
        name: 'The Whelan',
        description: 'Round coffee table',
        category: 'tables',
        price: 4900,
        imgOne: 'https://images.unsplash.com/photo-1620812067822-899be8a6a9a7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzEyODA1Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        imgTwo: null,
        imgThree: null,
        imgFour: null
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Products'
    await queryInterface.bulkDelete(options, null, {});
  }
};
