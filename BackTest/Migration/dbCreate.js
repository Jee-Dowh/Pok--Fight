// importer mysql
const mysql = require("mysql");
const { dbConfig } = require("../config.json");

let con = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  port: 8889, //cette ligne est que pour MAC
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE IF NOT EXISTS Game", function (err, result) {
    //dbTest est juste le nom de la db, on peut le nommer comme on veut
    if (err) throw err;
    console.log("Database created");
  });
});
