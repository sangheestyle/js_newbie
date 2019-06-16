const express = require("express");
const app = express();
const port = 3000;

const articles = [
  {
    title: "article 1 title",
    body: "article 1 body"
  },
  {
    title: "article 2 title",
    body: "article 2 body"
  }
];

app.get("/articles", (req, res) => res.send(articles));
app.get("/articles/title", (req, res) => {
  res.send(articles.map(({ title }) => ({ title })));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
