// module de connexion pour ne pas le copier coller à chaque fois
const mysql = require("mysql2/promise");
const { dbConfig } = require("../config.json");

async function query(sql, params) {
  //query : requet personnalisé à la base de données
  const connection = await mysql.createConnection(dbConfig); //on prépare la connexion
  const [results] = await connection.execute(sql, params); //on effectue la connexion
  return results;
}

module.exports = {
  query,
};
