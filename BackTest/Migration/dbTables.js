const mysql = require("mysql");
const { dbConfig } = require("../config.json");

let con = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  port: 8889,
  database: dbConfig.database,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  let sql =
    "CREATE TABLE IF NOT EXISTS pokemons (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), type VARCHAR(255), hp INT, defence INT, speed INT, imagelink VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table Pokemon created");
  });

  sql =
    "CREATE TABLE IF NOT EXISTS attaquesnormales (id INT AUTO_INCREMENT PRIMARY KEY, nomeattacknormal VARCHAR(255), degatsattacknormal INT)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table AttaquesNormales created");
  });

  sql =
    "CREATE TABLE IF NOT EXISTS attaqueselementaires (id INT AUTO_INCREMENT PRIMARY KEY, nomattackelementaire VARCHAR(255), degatseattackelementaire INT)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Tables AttaquesElementaires created");
  });
});
