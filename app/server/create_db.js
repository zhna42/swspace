const Sequelize = require('sequelize');

const sequelize = require("./model/connect.js")(Sequelize);
const User = require("./model/schema/user.js")(sequelize);

process.argv.forEach(e => {
  switch (e) {
    case "user":
      User.sync({force: false});
      break;
    default:
      console.log("Нет такой записи");
  }
})

//process.exit(-1);
