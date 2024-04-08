const express = require("express");
const cors = require("cors");
const app = express(); //express est un framework : créer des apis et des serveurs
// library : fonctions préfaitent qu'on peut utiliser
const pokemonsRouter = require("./routes/pokemons.js");
const attaquesnormalesRouter = require("./routes/attaquesnormales.js");
const attaqueselementairesRouter = require("./routes/attaqueselementaires.js");

// une Route est un chemin dans un lien

const port = 3000;

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200, //100 : infos / 200 : succes / 300 : redrection message / 400 : erreur clients / 500 : erreur serveur / lien : https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
};

app.use(cors(corsOptions)); //on peut appeler "corsOptions" comme on veut

app.use(express.json()); //traduire le code en json pour qu'on puisse le lire
app.use(
  express.urlencoded({
    extended: true,
  })
);

//Shows a "Hello World on the default link"
app.get("/", function (req, res) {
  // ça : "/" c'est pareil que ça : "localhost3000/"
  res.send("Bien le bonjour à toi :)");
});

app.use("/pokemons", pokemonsRouter); //copier ça pour les nouvelles routes
app.use("/attaquesnormales", attaquesnormalesRouter);
app.use("/attaqueselementaires", attaqueselementairesRouter);

app.listen(port, () => {
  console.log(`Example app listening at https://localhost:${port}`);
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log(`Exemple server listening at https://%s:%s, ${host}, ${port}`);
});

/* Error handler middleware. */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.use(express.static("public")); //mettre le dossier du jeux dans le dossier public
