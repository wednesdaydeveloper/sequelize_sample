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

const Area = sequelize.define('M_AREA', {
  name: {
    type: Sequelize.STRING,
    field: 'NAME'
  },
	displayOrder: {
    type: Sequelize.INTEGER,
		field: 'DISPLAY_ORDER'
  },
	updateDate: {
    type: Sequelize.TIME,
		field: 'UPDATE_DATE'
  },
	updateUserId: {
    type: Sequelize.INTEGER,
		field: 'UPDATE_USER_ID'
  },
	isDeleted: {
    type: Sequelize.BOOLEAN,
		field: 'IS_DELETED'
  }
}, {
	timestamps: false,
  freezeTableName: true // Model tableName will be the same as the model name
});

// Areaを取得
Area.findAll()
.then(areas => {
	areas.forEach(function (area) {
		console.log(JSON.stringify(area));
	});
})
.catch(err => {
    if(err)
      console.error(JSON.stringify(err));
});

// sequelize.query("SELECT * FROM [M_AREA]", { type: sequelize.QueryTypes.SELECT})
//   .then(function(area) {
//     console.log(JSON.stringify(area))
//   })
