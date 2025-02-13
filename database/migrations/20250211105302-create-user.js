'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name:{
        type:Sequelize.STRING
      },
      email:{
        type:Sequelize.STRING,
        unique:true
      },
      password:{
        type:Sequelize.STRING,
      },
      phone:{
        type:Sequelize.INTEGER
      },
      address:{
        references:{
          model:'address',
          key:'id'
        },
        type:Sequelize.INTEGER
      },
      
      createdAt: { // Add createdAt timestamp
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: { // Add updatedAt timestamp
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt:{
        type:Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};

