/**
 * Created by lsy on 2018/8/15.
 */

let path = require('path');         // nodejs自带模块
let express = require('express');       // 引入express
let app = express();                    // 创建express实例

app.use('/api', require('./api/login'));
// app.use('/api/consult', require('./api/consult/get'));
// app.use('/api/consult/list', require('./api/consult/list/get'));

app.use('/api/customer/base', require('./api/customer/base/get'));
app.use('/api/skinDoc/hisList', require('./api/skinDoc/hisList/get'));

app.use(express.static('src'));     // 指定静态资源所在的目录

// 设置路由配置
// app.get('/get', function(req, res) {
//   res.send(path.join(__dirname, './get.js'));
// });

// 监听端口, 创建服务器
let server = app.listen(9006, function() {
  console.log('app listening at http://localhost:9006');
})
