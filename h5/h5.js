let http = require('http');
let fs = require('fs');
let url = require('url');
let open = require('open');

// 读取'pages/404.html'文件的内容
let htmlContent404 = '';
fs.readFile('pages/404.html', function (err, data) {
  if (!err) {
    htmlContent404 = data.toString();
  }
});

// 创建服务器
let server = http.createServer(function (request, response) {

  // 当前访问路径
  let requestPath = url.parse(request.url).pathname;

  // 如果当前访问路径是根目录，将自动匹配到默认页面的路径， 即： '/' => '/index.html'
  if (requestPath == '/') {
    requestPath += 'index.html';
  }

  // html模块文件路径
  let templateFilePath = 'pages' + requestPath;

  // 读取html模板文件里面的代码
  fs.readFile(templateFilePath, function (err, data) {
    if (err) { // 404 处理
      console.log(`404: "${requestPath}"`);
      // response.writeHead(404, {'Content-Type': 'text/html'});
      response.write(htmlContent404 || '404 not found');
      response.end();
    } else { // 200 处理
      console.log(`200: "${requestPath}"`);
      // response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(data.toString());
      response.end();
    }
  });

});

server.listen(8001, function () {
  let address = `http://127.0.0.1:${server.address().port}`;
  console.log('前端H5静态文件服务器启动成功！');
  console.log('访问地址如下：');
  console.log(address);
  open(address);
});