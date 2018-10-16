
const data = require('../data');

exports.init = (app) => {
  app.get('/', (req, res) => {
    data.getNoteCategories((err, results) => {
      res.render('index', { title: 'Library', error: err, categories: results });
    });
  });
};
