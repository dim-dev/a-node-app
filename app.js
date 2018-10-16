const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const controllers = require('./controllers');

const app = express();
app.use(morgan('tiny'));
app.set('view engine', 'vash');
controllers.init(app);

app.get('/api/users', (req, res) => {
  res.send({
    name: 'Dimitrios',
    isVadid: true,
    group: 'Admin',
  });
});

app.listen(3000, () => {
  debug(`listening on port ${chalk.yellow('3000')}`);
});
