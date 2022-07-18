const express = require("express");
const random = require("random-name");
const app = express();
const port = 3000;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
  insecureAuth: true,
};
const mysql = require("mysql2");

app.get("/", async (req, res) => {
  const connection = mysql.createConnection(config);

  const randomName = `${random.first()} ${random.last()}`;
  const addNameSql = `INSERT INTO people(name) values('${randomName}')`;
  await connection.promise().query(addNameSql);

  const nameResults = await connection.promise().query("SELECT * FROM people");
  const names = nameResults[0].map((row) => row.name);
  connection.end();

  res.send(
    `
      <h1>Full Cycle!!</h1>
      <ul>
      ${names
        .map((name) => {
          return `<li>${name}</li>`;
        })
        .join("")}
      </ul>
      `
  );
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});
