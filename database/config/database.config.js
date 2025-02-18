const { Sequelize } = require("sequelize");

const ENV_KEYS = require("../../environment");
const userModel = require("../models/user.model");
const config = require("../config/config")[ENV_KEYS.NODE_ENV];

const sequelize = new Sequelize(config);

const address = require("../models/address.model")(sequelize, Sequelize);
// const categorySpecification = require('../models/category_specification.model')(sequelize,Sequelize)
const category = require("../models/category.model")(sequelize, Sequelize);
// const seller = require('../models/seller.model')(sequelize,Sequelize)
// const specification = require('../models/specification.model')(sequelize,Sequelize)
const user = require("../models/user.model")(sequelize, Sequelize);
const userToken = require("../models/userToken.model")(sequelize, Sequelize);

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
userToken.belongsTo(user,{foreignKey:'userId'});
user.hasOne(userToken,{foreignKey:'userId'})




module.exports = {
  address,
  category,
  //  categorySpecification,
  //  seller,
  user,
  //  specification,
  userToken,
};
