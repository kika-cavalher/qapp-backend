'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Projects', [{
      title: 'Title test 1',
      abbreviation: 'TE1',
      describe: 'Describe test1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    { 
      title: 'Title test2',
      abbreviation: 'TE2',
      describe: 'Describe test2',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Projects', null, {});
  }
};
