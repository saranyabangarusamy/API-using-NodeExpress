const mysql = require("mysql");


// Create a connection to the database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root-India123",
  database: "test_db",
  insecureAuth : true
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;