const mysql = require('mysql');

// creating connection for mysql DB
const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Hagen123',
  database: 'wikimedia_donation',
  multipleStatements: true
});

mysqlConnection.connect((err) => {
  if (err) return console.error('error: ' + err.message);
  console.log('Connected to the MySQL server.');
});

module.exports = mysqlConnection;
