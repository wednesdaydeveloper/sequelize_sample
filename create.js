"use strict";
const Sequelize = require("sequelize");
const config = require("./db_config")
const sequelize = new Sequelize('database', '', '', config);


const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

User.sync({force: true}).then(function () {
  // Table created
  User.bulkCreate([{
    firstName: 'John',
    lastName: 'Hancock'
  }, {
    firstName: 'mickel',
    lastName: 'Jackson'
  }]);
});

