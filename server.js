const express = require("express");
const { articles } = require("./db");

const app = express();
const port = 3000;

app.get("/articles", (req, res) => res.send(articles));
app.get("/articles/title", (req, res) => {
  res.send(articles.map(({ title }) => ({ title })));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
