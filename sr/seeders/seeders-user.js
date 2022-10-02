'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'example@example.com',
      password: 'Tungnui123',
      firstName: 'Thanh',
      lastName: 'Tung',
      address: 'nguyen van cu',
      gender: '1',
      typeRole: 'ROLE',
      key: 'r1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
