const ImageModel = require('../models/image');
const path = require('path');
const fs = require('fs');

module.exports = {
  index: (req, res) => {
    const viewModel = {
      image: {},
      comments: [],
    };
    ImageModel.findOne({ filename: { $regex: req.params.image_id } }, (err,  image) => {
      if (err) throw err;
      if (image) {
        // 增加该图片的访问量
        image.views += 1;
        viewModel.image = image;
        image.save();
        res.render('image', viewModel);
      } else {
        res.redirect('/');
      }
    });
  },
  create: (req, res) => {
    var tempPath = req.file.path;
    var imgUrl = req.file.filename;
    var ext = path.extname(req.file.originalname).toLowerCase();
    var targetPath = path.resolve(__dirname, '../public/upload/' + imgUrl + ext);
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
      fs.rename(tempPath, targetPath, function(err) {
        if (err) throw err;
        const newImg = new ImageModel({
          title: req.body.title,
          description: req.body.description,
          filename: imgUrl + ext,
        });
        newImg.save(function(e, image) {
          if (e) throw e;
          res.redirect('/images/' + image.uniqueId);
        });
      });
    } else {
      fs.unlink(tempPath, function(err) {
        if (err) throw err;
        res.json(500, { error: '只允许上传图片文件.' });
      });
    }
  },
  like: (req, res) => {
    res.send('The image:like POST controller');
  },
  comment: (req, res) => {
    res.send('The image:comment POST controller');
  },
}