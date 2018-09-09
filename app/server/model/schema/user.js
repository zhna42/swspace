const Sequelize = require('sequelize');

module.exports = function(sequelize){
  return sequelize.define('user', {
    password: Sequelize.CHAR,
    mail: Sequelize.CHAR,
    cookies: Sequelize.CHAR,
    dateCookies: Sequelize.DATE,
    admin: Sequelize.BOOLEAN,
    key: Sequelize.CHAR
  }, {
    createdAt: false,
    updatedAt: false
  })
}
