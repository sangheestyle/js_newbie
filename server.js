const express = require("express");
const morgan = require("morgan");
const { titleController } = require('./controllers');
const DB = require("./db");

const db = new DB();

const app = express();
const port = 3000;

app.use(morgan("tiny"));

app.get("/articles", (req, res) => res.send(db.getArticles()));
app.get("/articles/title", titleController);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
