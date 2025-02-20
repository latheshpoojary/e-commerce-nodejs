const { Sequelize } = require("sequelize");

const ENV_KEYS = require("../../environment");
const userModel = require("../models/user.model");
const config = require("../config/config")[ENV_KEYS.NODE_ENV];

const sequelize = new Sequelize(config);

const address = require("../models/address.model")(sequelize, Sequelize);

const category = require("../models/category.model")(sequelize, Sequelize);
const seller = require("../models/seller.model")(sequelize, Sequelize);
const specification = require("../models/specification.model")(
  sequelize,
  Sequelize
);
const user = require("../models/user.model")(sequelize, Sequelize);
const userToken = require("../models/userToken.model")(sequelize, Sequelize);
const categorySpecification = require("../models/category_specification.model")(
  sequelize,
  Sequelize
);
const product = require("../models/product.model")(
  sequelize,
  Sequelize
);
const productSpecification = require("../models/product_specification.model")(
  sequelize,
  Sequelize
);
const deliveryPartner = require("../models/delivery_partner.model")(
  sequelize,
  Sequelize
);
const cartTable = require("../models/cart.model")(
  sequelize,
  Sequelize
);
const order = require("../models/order.model")(
  sequelize,
  Sequelize
);
const order_details = require("../models/order_details.model")(
  sequelize,
  Sequelize
);


sequelize
  .authenticate()
  .then(() => console.log("db is connected"))
  .catch((err) => console.log("error" + err));

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("database connected");
  })
  .catch((error) => {
    console.log(error);
  });

// Associations
user.belongsTo(address, { foreignKey: "addressId" });
address.hasMany(user, { foreignKey: "addressId" });
userToken.belongsTo(user, { foreignKey: "userId" });
user.hasOne(userToken, { foreignKey: "userId" });
categorySpecification.belongsTo(category, {
  foreignKey: "categoryRef_id",
  targetKey: "category_id", // Ensure this is unique
});
categorySpecification.belongsTo(specification, {
  foreignKey: "specificationRef_id",
  targetKey: "specification_id",
});

product.belongsTo(seller, {
  foreignKey: "seller_id",
  targetKey: "seller_id",
})
productSpecification.belongsTo(product, {
  foreignKey: "product_id",
  targetKey: "product_id", // Ensure this is unique
});
productSpecification.belongsTo(specification, {
  foreignKey: "specificationRef_id",
  targetKey: "specification_id",
});
cartTable.belongsTo(product,{
  foreignKey: "product_id",
  targetKey: "product_id",
})
cartTable.belongsTo(user,{
  foreignKey: "user_id",
  targetKey: "user_id",
})
order.belongsTo(user,{
  foreignKey: "user_id",
  targetKey: "user_id",
})
order_details.belongsTo(order,{
  foreignKey: "order_id",
  targetKey: "order_id",
})
order_details.belongsTo(product,{
  foreignKey: "product_id",
  targetKey: "product_id",
})


module.exports = {
  address,
  category,
  seller,
  user,
  specification,
  userToken,
  categorySpecification,
  product,
  productSpecification,
  deliveryPartner,
  cartTable,
  order,
  order_details
};
