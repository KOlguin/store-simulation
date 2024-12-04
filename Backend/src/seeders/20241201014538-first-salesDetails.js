'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // MES DE NOVIEMBRE
    const allNovember = [
      {
        saleID: 26,
        productID: 1,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 28,
        productID: 4,
        quantity: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 29,
        productID: 5,
        quantity: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 30,
        productID: 2,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    const allOctober = [
      {
        saleID: 21,
        productID: 1,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 21,
        productID: 2,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 21,
        productID: 3,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 21,
        productID: 4,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 21,
        productID: 5,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 22,
        productID: 2,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 23,
        productID: 1,
        quantity: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 23,
        productID: 5,
        quantity: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 24,
        productID: 3,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 25,
        productID: 4,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    const allSeptember = [
      {
        saleID: 16,
        productID: 1,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 16,
        productID: 2,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 16,
        productID: 3,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 18,
        productID: 5,
        quantity: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 19,
        productID: 4,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 20,
        productID: 2,
        quantity: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]

    const allAugust = [
      {
        saleID: 11,
        productID: 1,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 11,
        productID: 2,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 11,
        productID: 3,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 12,
        productID: 4,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 13,
        productID: 5,
        quantity: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 14,
        productID: 4,
        quantity: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 15,
        productID: 4,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]

    const allJuly = [
      {
        saleID: 6,
        productID: 1,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 6,
        productID: 2,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 6,
        productID: 3,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 6,
        productID: 4,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 6,
        productID: 5,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 7,
        productID: 2,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 8,
        productID: 1,
        quantity: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 8,
        productID: 5,
        quantity: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 9,
        productID: 3,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 10,
        productID: 4,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]

    const allJune = [
      {
        saleID: 1,
        productID: 1,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 2,
        productID: 2,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 3,
        productID: 1,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 3,
        productID: 2,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 3,
        productID: 3,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 4,
        productID: 1,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 4,
        productID: 2,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 4,
        productID: 3,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        saleID: 5,
        productID: 4,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]

    const allSalesDetails = allJune.concat(allJuly, allAugust, allSeptember, allOctober, allNovember);

    return queryInterface.bulkInsert('SalesDetails', allSalesDetails);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Sales', null, {});
  }
};
