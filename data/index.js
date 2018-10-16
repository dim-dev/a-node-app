const seedData = require('./seedData');

exports.getNoteCategories = (next) => {
  next(null, seedData.initialNotes);
};
