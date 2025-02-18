module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('category_specifications', {
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true, // Part of composite key
        references: {
          model: 'category', // Correct table name for Category
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      specificationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true, // Part of composite key
        references: {
          model: 'specification', // Correct table name for Specification
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, {
      uniqueKeys: [{
        name: 'compositeKey',
        fields: ['categoryId', 'specificationId']
      }]
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('category_specifications');
  }
};
