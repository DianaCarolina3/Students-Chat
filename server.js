const express = require("express");
const app = express();
const server = require("http").Server(app);

const config = require("./config");

const bodyParser = require("body-parser");
const socket = require("./socket");
const router = require("./network/routes");
const db = require("./db");

require("dotenv").config({ path: ".env" });
db(process.env.URLDATABASE);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

socket.connect(server);

router(app);

// //url public in server
app.use(`/${config.public_route}`, express.static("public"));

server.listen(config.port, () => {
  console.log(`listen to: ${config.host}${config.port}`);
});
