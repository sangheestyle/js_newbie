const articles = [
  {
    title: "article 1 title",
    // body: "article 1 body",
    color: "red"
  },
  {
    title: "article 2 title",
    body: "article 2 body"
  }
];

class DB {
  getArticles() {
    return articles;
  }
}

module.exports = DB;
