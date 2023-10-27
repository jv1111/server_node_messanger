const bcrypt = require("bcrypt");

const hash = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const compare = async (inputPass, encryptedPass) => {
  const isValid = await bcrypt.compare(inputPass, encryptedPass)
  return isValid
}

module.exports = {
  hash,
  compare
};