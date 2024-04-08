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
  console.log("Successfully connected to the database");
  let sql =
    "INSERT INTO pokemons (name, type, hp, defence, speed, imagelink) VALUES ?";
  let values = [
    ["Bulbizarre", "Plante", 100, 50, 20, ""],
    ["Salamèche", "Feu", 100, 20, 30, ""],
    ["Carapuce", "Eau", 100, 30, 55, ""],
    ["Pikachu", "Électric", 100, 10, 70, ""],

    ["Viridium", "Plante", 100, 50, 20, ""],
    ["Reshiram", "Feu", 100, 30, 30, ""],
    ["Suicune", "Eau", 100, 60, 15, ""],
    ["Raikou", "Électric", 100, 20, 40, ""],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Successfully inserted : " + result.affectedRows);
  });

  sql =
    "INSERT INTO attaquesnormales (nomeattacknormal, degatsattacknormal) VALUES ?";
  values = [
    ["Fouet", 100],
    ["Morsure", 100],
    ["Coup de queue", 100],
    ["Charge", 100],

    ["Vive-Attaque", 100],
    ["Tranche", 100],
    ["Vitesse Extrême", 100],
    ["Mâchouille", 100],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Successfully inserted : " + result.affectedRows);
  });

  sql =
    "INSERT INTO attaqueselementaires (nomattackelementaire, degatseattackelementaire) VALUES ?";
  values = [
    ["Fouet", 100],
    ["Lance Flame", 100],
    ["Bulle d'eau", 100],
    ["Tonnerre", 100],

    ["Lame Feuille", 100],
    ["Flamme Bleue", 100],
    ["Hydrocanon", 100],
    ["Élecanon", 100],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Successfully inserted : " + result.affectedRows);
  });
});
