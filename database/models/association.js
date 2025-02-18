// In associations.js
const Category = require('./category.model');
const Specification = require('./specification.model');
const CategorySpecification = require('./category_specification.model');

// Set up the associations correctly
Specification.belongsToMany(Category, {
    through: CategorySpecification,
    foreignKey: 'specification_id', // This should match the column name in the junction table
    otherKey: 'category_id'
});

Category.belongsToMany(Specification, {
    through: CategorySpecification,
    foreignKey: 'category_id', // This should match the column name in the junction table
    otherKey: 'specification_id'
});

// Sync the models
CategorySpecification.sync()
    .then(() => {
        console.log("Category Specification is synced");
    })
    .catch((error) => {
        console.error('Error syncing Category Specification model:', error);
    });