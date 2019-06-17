const express = require("express");
const morgan = require("morgan");
const { titleController } = require('./controllers');
const DB = require("./db");

const db = new DB();

const app = express();
const port = 3000;

app.use(morgan("tiny"));

app.get("/articles", (req, res) => {
    const defaultArticle = {
        title: 'no title',
        body: 'no body',
        color: 'default color',
    }
    const articles = db.getArticles().map(article => {
        return {...defaultArticle, ...article};
    })
    res.send(articles)
});
app.get("/articles/title", titleController);

// TODO(chai): implement this controller
app.get("/articles/body", (req, res) => res.send(''));
//will do
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
