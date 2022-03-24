const ImageModel = require('../models/image');

module.exports = {
  index: (req, res) => {
    const viewModel = { images: [] };
    ImageModel.find({}, {}, { sort: { timestamp: -1 } }, (err, images) => {
      if(err) throw err;
      viewModel.images = images;
      console.log('home ==>',images)
      res.render('index', viewModel);
    })
  }
}