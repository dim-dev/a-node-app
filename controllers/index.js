const homeController = require('./homeController');

exports.init = (app) => {
  homeController.init(app);
};
