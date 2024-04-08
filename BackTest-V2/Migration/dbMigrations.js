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
    "INSERT INTO pokemons (name, type, hp, defence, speed, weekness, imagelink) VALUES ?";
  let values = [
    [
      "Bulbizarre",
      "Plante",
      100,
      50,
      20,
      "Feu",
      "https://www.pokepedia.fr/images/e/ef/Bulbizarre-RFVF.png?20141212043325",
    ],
    [
      "Salamèche",
      "Feu",
      100,
      20,
      30,
      "Eau",
      "https://www.pokepedia.fr/images/thumb/8/89/Salam%C3%A8che-RFVF.png/795px-Salam%C3%A8che-RFVF.png?20141019213025",
    ],
    [
      "Carapuce",
      "Eau",
      100,
      30,
      55,
      "Plante",
      "https://www.pokepedia.fr/images/thumb/c/cc/Carapuce-RFVF.png/870px-Carapuce-RFVF.png?20141016142207",
    ],
    [
      "Pikachu",
      "Électric",
      100,
      10,
      70,
      "Eau",
      "https://www.pokepedia.fr/images/thumb/7/76/Pikachu-DEPS.png/922px-Pikachu-DEPS.png?20220418180124",
    ],

    [
      "Viridium",
      "Plante",
      100,
      50,
      20,
      "Feu",
      "https://eternia.fr/public/media/pokedex/artworks/640.png",
    ],
    [
      "Reshiram",
      "Feu",
      100,
      30,
      30,
      "Eau",
      "https://www.pokepedia.fr/images/3/31/Sprite_0643_chromatique_HOME.png",
    ],
    [
      "Suicune",
      "Eau",
      100,
      60,
      15,
      "Plante",
      "https://www.pokepedia.fr/images/thumb/5/51/Suicune-DEPS.png/800px-Suicune-DEPS.png",
    ],
    [
      "Raikou",
      "Électric",
      100,
      20,
      40,
      "Eau",
      "https://www.media.pokekalos.fr/img/pokemon/home/raikou.png",
    ],
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
    ["Tranch’Herbe", 100],
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
