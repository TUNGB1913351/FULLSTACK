'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('booking', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      statusID: {
        type: Sequelize.STRING
      },
      typdoctorIDe: {
        type: Sequelize.INTEGER
      },
      patientID: {
        type: Sequelize.INTEGER
      },
      date: {
          type: Sequelize.DATE,
      },
      timeType: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('booking');
  }
};