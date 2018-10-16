const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const controllers = require('./controllers');

const app = express();
app.set('view engine', 'vash');
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public')));

controllers.init(app);

app.listen(3000, () => {
  debug(`listening on port ${chalk.yellow('3000')}`);
});
