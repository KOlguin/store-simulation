'use strict';

/** @type {import('sequelize-cli').Migration} */
const { faker } = require('@faker-js/faker')

module.exports = {
  async up (queryInterface, Sequelize) {
    faker.seed(100);

    // MES DE NOVIEMBRE
    const allDatesNovember = faker.date.betweens({ from: '2024-11-01', to: '2024-11-30', count: 5 })

    const totalNovember = [
      26136690, // 10 X (ID 1)
      9928755, // 5 X (ID 9 y 10)
      29215264, // 8 X (ID 7 y 4)
      54476976, // 12 x ID 5
      7214070 // ID 2 y 6
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
      5181362, // (ID 1,2, 3, 4, 5, 6, 7, 8, 9 Y 10)
      5408885, // 5 X (ID 2 Y 7)
      12750773, // 7 X (ID 1, 5 Y 10)
      938136, // 20 X ID 9 + ID 3
      17543620 // 10 X (ID 4, 6 Y 8)
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
      19007780, // 10 X (ID 1,2, 3 Y 9)
      5471495, // 5 X (ID 8, 9 Y 10)
      4994034, // 3 X (ID 5, 6 Y 7)
      5453150, // 10 x ID 4
      8909775 // 7 X (ID 2 y 10)
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
      19007780, // 10 X (ID 1,2, 3 Y 9)
      17543620, // 10 X (ID 4, 6 Y 8)
      4994034, // 3 X (ID 5, 6 Y 7)
      29215264, // 8 X (ID 7 y 4)
      17543620 // 10 X (ID 4, 6 Y 8)
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
      5181362, // (ID 1,2, 3, 4, 5, 6, 7, 8, 9 Y 10)
      5408885, // 5 X (ID 2 Y 7)
      12750773, // 7 X (ID 1, 5 Y 10)
      938136, // 20 X ID 9 + ID 3
      17543620 // 10 X (ID 4, 6 Y 8)
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
      26136690, // 10 X (ID 1)
      5408885, // 5 X (ID 2 Y 7)
      19007780, // 10 X (ID 1,2, 3 Y 9)
      19007780, // 10 X (ID 1,2, 3 Y 9)
      17543620 // 10 X (ID 4, 6 Y 8)
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
