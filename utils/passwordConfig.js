const { hash, compare } = require("bcrypt");
const ENV_KEYS = require("../environment");
const hashPassword = async (password) => {
  const salt = parseInt(ENV_KEYS.SALT);
  const hashedPassword = await hash(password, salt);
  return hashedPassword;
};
const comparePassword = async (originalPassword, hashedPassword) => {
  const isPasswordMatched = await compare(originalPassword, hashedPassword);
  return isPasswordMatched;
};

module.exports = {
  hashPassword,
  comparePassword,
};
