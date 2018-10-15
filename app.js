const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
app.use(morgan('tiny'));
app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(3000, () => {
  debug(`listening on port ${chalk.yellow('3000')}`);
});
