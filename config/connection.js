// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();
//  new Sequelize() function accepts the database name, MySQL username, and MySQL password (respectively) as parameters,
// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  // we also pass configuration settings
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;