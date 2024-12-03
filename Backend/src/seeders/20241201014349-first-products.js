'use strict';

/** @type {import('sequelize-cli').Migration} */
const { faker } = require('@faker-js/faker');

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    faker.seed(100);

    const allSKU = faker.helpers.uniqueArray(faker.commerce.isbn, 5);
    const allNames = faker.helpers.uniqueArray(faker.commerce.productName, 5);
    // const allPrices = faker.helpers.uniqueArray(faker.commerce.price({min: 20000, max: 5000000, dec: 0}), 20);
    const allBrands = faker.helpers.uniqueArray(faker.company.name, 5);
    const allDescriptions = faker.helpers.uniqueArray(faker.commerce.productDescription, 5);

    const allPrices = []
    for (let index = 0; index < 5; index++) {
      allPrices.push(faker.commerce.price({min: 10000, max: 1000000, dec: 0}))
    }

    const allProducts = [];
    for (let index = 0; index < 5; index++) {
      let actualProduct = {
        SKU: allSKU[index],
        name: allNames[index],
        price: allPrices[index],
        brand: allBrands[index],
        description: allDescriptions[index],
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      
      allProducts.push(actualProduct);      
    }

    return queryInterface.bulkInsert('Products', allProducts);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Products', null, {});
  }
};
