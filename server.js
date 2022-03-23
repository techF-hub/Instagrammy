const express = require('express');
const configure = require('./server/configure');

let app = express();

app = configure(app);

// 设置端口号变量
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log(`Sever running at http://localhost:${app.get('port')}`)
})