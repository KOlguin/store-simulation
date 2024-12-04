'use strict';

/** @type {import('sequelize-cli').Migration} */
const { faker } = require('@faker-js/faker')

module.exports = {
  async up (queryInterface, Sequelize) {
    faker.seed(100);

    // MES DE NOVIEMBRE
    const allDatesNovember = faker.date.betweens({ from: '2024-11-01', to: '2024-11-30', count: 5 })

    const totalNovember = [
      7818030, // 10 X (ID 1)
      4650675, // 5 X (ID 2 y 3)
      10519864, // 8 X (ID 2 y 4)
      10332264, // 12 x ID 5
      1642825 // ID 1 y 5
    ]

    const descriptionNovember = faker.helpers.uniqueArray(faker.lorem.paragraph, 5)
    
    const allNovember = []
    
    for (let index = 0; index < 5; index++) {
      let actualSale = {
        salesDate: allDatesNovember[index],
        customerID: faker.number.int({min: 1, max: 10}),
        salesDescription: descriptionNovember[index],
        total: totalNovember[index],
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      
      allNovember.push(actualSale);      
    }

    // MES DE OCTUBRE
    const allDatesOctober = faker.date.betweens({ from: '2024-10-01', to: '2024-10-31', count: 5 })

    const totalOctober = [
      3273718, // (ID 1,2, 3, 4, 5)
      6574915, // 5 X (ID 2 Y 4)
      11499775, // 7 X (ID 1, 5)
      315910, // ID 3
      7007580 // 10 X (ID 4)
    ]

    const descriptionOctober = faker.helpers.uniqueArray(faker.lorem.paragraph, 5)
    
    const allOctober = []
    
    for (let index = 0; index < 5; index++) {
      let actualSale = {
        salesDate: allDatesOctober[index],
        customerID: faker.number.int({min: 1, max: 10}),
        salesDescription: descriptionOctober[index],
        total: totalOctober[index],
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      
      allOctober.push(actualSale);      
    }

    // MES DE SEPTIEMBRE
    const allDatesSeptember = faker.date.betweens({ from: '2024-09-01', to: '2024-09-30', count: 5 })

    const totalSeptember = [
      17119380, // 10 X (ID 1,2, 3)
      8559690, // 5 X (ID 1, 2 y 3)
      2583066, // 3 X (ID 5)
      7007580, // 10 x ID 4
      4299575 // 7 X (ID 2)
    ]

    const descriptionSeptember = faker.helpers.uniqueArray(faker.lorem.paragraph, 5)
    const allSeptember = []
    
    for (let index = 0; index < 5; index++) {
      let actualSale = {
        salesDate: allDatesSeptember[index],
        customerID: faker.number.int({min: 1, max: 10}),
        salesDescription: descriptionSeptember[index],
        total: totalSeptember[index],
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      
      allSeptember.push(actualSale);      
    }

    // MES DE AGOSTO
    const allDatesAugust = faker.date.betweens({ from: '2024-08-01', to: '2024-08-31', count: 5 })

    const totalAugust = [
      17119380, // 10 X (ID 1,2, 3)
      7007580, // 10 X (ID 4)
      2583066, // 3 X (ID 5)
      5606064, // 8 X (ID 4)
      7007580 // 10 X (ID 4)
    ]

    const descriptionAugust = faker.helpers.uniqueArray(faker.lorem.paragraph, 5)

    const allAugust = []
    
    for (let index = 0; index < 5; index++) {
      let actualSale = {
        salesDate: allDatesAugust[index],
        customerID: faker.number.int({min: 1, max: 10}),
        salesDescription: descriptionAugust[index],
        total: totalAugust[index],
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      
      allAugust.push(actualSale);      
    }

    // MES DE JULIO
    const allDatesJuly = faker.date.betweens({ from: '2024-07-01', to: '2024-07-31', count: 5 })

    const totalJuly = [
      3273718, // (ID 1,2, 3, 4, 5)
      4305110, // 5 X (ID 2)
      11499775, // 7 X (ID 1, 5)
      315910, // ID 3
      7007580 // 10 X (ID 4)
    ]

    const descriptionJuly = faker.helpers.uniqueArray(faker.lorem.paragraph, 5)
    
    const allJuly = []
    
    for (let index = 0; index < 5; index++) {
      let actualSale = {
        salesDate: allDatesJuly[index],
        customerID: faker.number.int({min: 1, max: 10}),
        salesDescription: descriptionJuly[index],
        total: totalJuly[index],
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      
      allJuly.push(actualSale);      
    }

    // MES DE JUNIO
    const allDatesJune = faker.date.betweens({ from: '2024-06-01', to: '2024-06-30', count: 5 })

    const totalJune = [
      781803, // 10 X (ID 1)
      3071125, // 5 X (ID 2)
      17119380, // 10 X (ID 1,2, 3)
      17119380, // 10 X (ID 1,2, 3)
      7007580 // 10 X (ID 4)
    ]

    const descriptionJune = faker.helpers.uniqueArray(faker.lorem.paragraph, 5)
    
    const allJune = []
    
    for (let index = 0; index < 5; index++) {
      let actualSale = {
        salesDate: allDatesJune[index],
        customerID: faker.number.int({min: 1, max: 10}),
        salesDescription: descriptionJune[index],
        total: totalJune[index],
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      
      allJune.push(actualSale);      
    }

    const allSales = allJune.concat(allJuly, allAugust, allSeptember, allOctober, allNovember);

    return queryInterface.bulkInsert('Sales', allSales);
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
