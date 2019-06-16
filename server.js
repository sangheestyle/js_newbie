const express = require("express");
const morgan = require("morgan");
const DB = require("./db");

const db = new DB();

const app = express();
const port = 3000;

app.use(morgan("tiny"));

app.get("/articles", (req, res) => res.send(db.getArticles()));
app.get("/articles/title", (req, res) => {
  res.send(db.getArticles().map(({ title }) => ({ title })));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
