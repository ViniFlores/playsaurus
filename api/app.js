var express = require('express');
const db = require("./models")
const Pings = require("./models/pings");
const cors = require("cors")
var app = express();

app.use(cors())

app.get('/', async function (req, res) {
  const pings = await Pings.findAll()
  res.send(pings);
});

app.post('/', async function (req, res) {
  const ip = req.headers['x-real-ip'] || req.socket.remoteAddress
  try {
    Pings.create({ip})
    res.send(200)
  } catch(e) {
    console.error(e)
    res.send(500)
  }
})

db.sync(() => console.log(`Banco de dados conectado: ${process.env.MYSQLDB_DATABASE}`));

const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});