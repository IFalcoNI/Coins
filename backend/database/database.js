const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('b3zlzwbdzpd6gcuq1aqy', 'uy36iel4mzsevmfk', 'PY49kZtaT5jCcE8DfCsJ', {
    dialect: 'mysql',
    host: 'b3zlzwbdzpd6gcuq1aqy-mysql.services.clever-cloud.com'
});

module.exports = sequelize;
// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('coinUsers', 'root', 'rootroot', {
//     dialect: 'mysql',
//     host: 'localhost'
// });

// module.exports = sequelize;