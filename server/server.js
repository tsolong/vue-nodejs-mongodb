let express = require('express');
let app = express();

let apiListInit = require('./api/api');

// 设置响应头
app.all('*', function (request, response, next) {
  response.header('Access-Control-Allow-Origin', '*'); // 设置允许所有来源跨域访问
  response.header('Content-Type', 'application/json'); // 该接口永远只返回json类型的数据
  next();
});

// 初始化所有接口服务
apiListInit(app);

let server = app.listen(8002, function () {
  let address = `http://127.0.0.1:${server.address().port}`;
  console.log('后端nodejs接口服务器启动成功！');
  console.log('目前提供如下接口：');
  console.log(`用户列表：${address}/userLists`);
  console.log(`新增用户：${address}/addUser`);
  console.log(`编辑用户：${address}/editUser`);
  console.log(`删除用户：${address}/deleteUser`);
});