'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'luanpc2805@gmail.com',
      password: '123456',
      firstName: 'pc',
      lastName: 'luan',
      address: 'VN',
      gender: 1,
      roleId: 'R1',
      phonenumber: 12345678,
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
