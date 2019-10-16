let bodyParser = require('body-parser');
let db = require('./../db/db');

// 创建 application/x-www-form-urlencoded 编码解析
let urlencodedParser = bodyParser.urlencoded({extended: false});

let apiListInit = (app) => {

  // 用户列表
  app.post('/userLists', urlencodedParser, (request, response) => {

    console.log('----------------------------------------用户列表----------------------------------------');

    // 数据库操作
    db.userLists((isOk, result) => {
      let responseData = {
        rtn_code: isOk ? '0' : '-1',
        rtn_tip: isOk ? '查询成功' : '查询失败',
        data: result
      };
      response.send(responseData);
    });

  });

  // 新增用户
  app.post('/addUser', urlencodedParser, (request, response) => {

    console.log('----------------------------------------新增用户----------------------------------------');

    // 接收用户信息
    let userInfo = {
      name: request.body.name,
      age: request.body.age
    };
    console.log('用户信息如下:');
    console.log(userInfo);

    // 数据非空校验
    let checkMsg = '';
    if (userInfo.name == '') {
      checkMsg = '请填写姓名';
    } else if (userInfo.age == '') {
      checkMsg = '请填写年龄';
    }
    if (checkMsg) {
      response.send({
        rtn_code: '-1',
        rtn_tip: checkMsg,
        data: null
      });
      return;
    }

    // 数据库操作
    db.addUser(userInfo, (isOk, result) => {
      response.send({
        rtn_code: isOk ? '0' : '-1',
        rtn_tip: isOk ? '新增成功' : '新增失败',
        data: result
      });
    });

  });

  // 编辑用户
  app.post('/editUser', urlencodedParser, (request, response) => {

    console.log('----------------------------------------编辑用户----------------------------------------');

    // 接收用户信息
    let userInfo = {
      _id: request.body._id,
      name: request.body.name,
      age: request.body.age
    };
    console.log('用户信息如下:');
    console.log(userInfo);

    // 数据非空校验
    let checkMsg = '';
    if (userInfo._id == '') {
      checkMsg = '用户ID无效';
    } else if (userInfo.name == '') {
      checkMsg = '请填写姓名';
    } else if (userInfo.age == '') {
      checkMsg = '请填写年龄';
    }
    if (checkMsg) {
      response.send({
        rtn_code: '-1',
        rtn_tip: checkMsg,
        data: null
      });
      return;
    }

    // 数据库操作
    db.editUser(userInfo, (isOk, result) => {
      let responseData = {
        rtn_code: isOk ? '0' : '-1',
        rtn_tip: isOk ? '编辑成功' : '编辑失败',
        data: result
      };
      response.send(responseData);
    });

  });

  // 删除用户
  app.post('/deleteUser', urlencodedParser, (request, response) => {

    console.log('----------------------------------------删除用户----------------------------------------');

    // 接收用户信息
    let userInfo = {
      _id: request.body._id
    };
    console.log('用户信息如下:');
    console.log(userInfo);

    // 数据非空校验
    let checkMsg = '';
    if (userInfo._id == '') {
      checkMsg = '用户ID无效';
    }
    if (checkMsg) {
      response.send({
        rtn_code: '-1',
        rtn_tip: checkMsg,
        data: null
      });
      return;
    }

    // 数据库操作
    db.deleteUser(userInfo, (isOk, result) => {
      let responseData = {
        rtn_code: isOk ? '0' : '-1',
        rtn_tip: isOk ? '删除成功' : '删除失败',
        data: result
      };
      response.send(responseData);
    });

  });

};

module.exports = apiListInit;