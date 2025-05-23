// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',       // or your MySQL server IP
  user: 'root',            // your MySQL username
  password: '1234', // your MySQL password
  database: 'canteen'   // your database name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    return;
  }
  console.log('Connected to MySQL database.');
});

module.exports = connection;
