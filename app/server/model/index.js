const Sequelize = require('sequelize');

const sequelize = require("./connect.js")(Sequelize);
const User = require("./schema/user.js")(sequelize);

module.exports = sequelize;