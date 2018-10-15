const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
app.use(morgan('tiny'));
app.set('view engine', 'vash');
app.get('/', (req, res) => {
  res.render('index', { title: 'hello + vash' });
});


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
