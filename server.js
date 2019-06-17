const express = require('express');
const morgan = require('morgan');
const { titleController, articlesController } = require('./controllers');

const app = express();
const port = 3000;

app.use(morgan('tiny'));

app.get('/articles', articlesController);
app.get('/articles/title', titleController);

// TODO(chai): implement this controller
app.get('/articles/body', (req, res) => res.send(''));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
