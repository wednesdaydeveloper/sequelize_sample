"use strict";
/**
 * Sequelizeの導入
 */
const Sequelize = require("sequelize");

/**
 * DBの読み込み
 */
const sequelize = new Sequelize('Claire3_19', 'rm', 's3cret', {
			dialect: 'mssql',
			host: 'localhost',
			dialectOptions: {
				port: 1433
			}
		});

sequelize.query("SELECT * FROM [M_AREA]", { type: sequelize.QueryTypes.SELECT})
  .then(function(area) {
    console.log(JSON.stringify(area))
  })
