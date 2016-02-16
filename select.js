"use strict";
/**
 * Sequelizeの導入
 */
const Sequelize = require("sequelize");

/**
 * DBの読み込み
 */
const config = require("./db_config")
const sequelize = new Sequelize('database', '', '', config);

/**
 * データ型の宣言 テーブル名: places
 */
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

// Userを取得
 User.findAll()
  .then(prefectures => console.log(JSON.stringify(prefectures)))
  .catch(err => {
      if(err)
        console.error(JSON.stringify(err));
  });
