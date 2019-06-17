const DB = require('./db');

const db = new DB();

const articlesController = (req, res) => {
  const defaultArticle = {
    title: 'no title',
    body: 'no body',
    color: 'default color',
  };
  const articles = db.getArticles().map(article => {
    return { ...defaultArticle, ...article };
  });
  res.send(articles);
};

const titleController = (req, res) => {
  res.send(db.getArticles().map(({ title }) => ({ title })));
};

const articlesBodyController = (req, res) => res.send("");

module.exports = {
  articlesController,
  titleController,
  articlesBodyController,
};
