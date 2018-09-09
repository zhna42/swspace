module.exports = function (Sequelize){
  return sequelize = new Sequelize('phones', 'root', '1234', {
    host: 'localhost', 
    dialect: 'mysql',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  })
}

