const express = require('express');
const mongoose = require('mongoose');
const configure = require('./server/configure');

let app = express();

app = configure(app);

// 建立数据库连接
mongoose.connect('mongodb://localhost/Instagrammy');
mongoose.connection.on('open', function() {
  console.log('Mongoose connected.');
});

// 设置端口号变量
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log(`Sever running at http://localhost:${app.get('port')}`)
})