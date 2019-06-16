const DB = require("./db");

const db = new DB();

const titleController = (req, res) => {
  res.send(db.getArticles().map(({ title }) => ({ title })));
};

module.exports = {
  titleController
};
