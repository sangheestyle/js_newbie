const express = require("express");
const morgan = require("morgan");
const {
  titleController,
  articlesController,
  articlesBodyController
} = require("./controllers");

const app = express();
const port = 3000;

app.use(morgan("tiny"));

app.get("/articles", articlesController);
app.get("/articles/title", titleController);
app.get("/articles/body", articlesBodyController);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
