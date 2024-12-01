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

    const allNames = faker.helpers.uniqueArray(faker.person.firstName, 10)
    const allLastNames = faker.helpers.uniqueArray(faker.person.lastName, 10)
    const allAddress = faker.helpers.uniqueArray(faker.location.streetAddress, 10)
    const allPhoneNumbers = faker.helpers.uniqueArray(faker.phone.number, 10)

    const allCostumers = []
    for (let index = 0; index < 10; index++) {
      let actualCostumer = {
        name: allNames[index],
        lastName: allLastNames[index],
        address: allAddress[index],
        phoneNumber: allPhoneNumbers[index],
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      
      allCostumers.push(actualCostumer);      
    }

    return queryInterface.bulkInsert('Customers', allCostumers)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Customers', null, {});
  }
};
