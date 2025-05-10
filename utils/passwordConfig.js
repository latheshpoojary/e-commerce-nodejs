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

const generateRandomPassword = () => {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var result = '';
  for (var i = 8; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

module.exports = {
  hashPassword,
  comparePassword,
  generateRandomPassword
};
