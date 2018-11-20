const mongoose = require("mongoose");
// &retryWrites=true
const dbURI = "mongodb://schecheleski:06544560@cluster0-shard-00-00-nuida.mongodb.net:27017,cluster0-shard-00-01-nuida.mongodb.net:27017,cluster0-shard-00-02-nuida.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
// const dbURI = "mongodb://schecheleski:06544560@cluster0-shard-00-00-nuida.mongodb.net:27017,cluster0-shard-00-01-nuida.mongodb.net:27017,cluster0-shard-00-02-nuida.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
// const dbURI = "mongodb://newuser:myNewPassword@cluster0-shard-00-00-gibou.mongodb.net:27017,cluster0-shard-00-01-gibou.mongodb.net:27017,cluster0-shard-00-02-gibou.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";



const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Conexão com o banco de dados estabelecido!");
  },
  err => {
    console.log("Erro ao conectar com o banco de dados: ", err);
  }
);

// require any models
require("../models/Task");
require("../models/Category");
require("../models/Entry");