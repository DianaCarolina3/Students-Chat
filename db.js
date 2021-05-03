//connecion a base de datos mongoose
const db = require("mongoose");

db.Promise = global.Promise;

const connect = async (url) => {
  await db.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("[db] Conectada exitosamente");
};

module.exports = connect;
