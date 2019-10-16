// 导入操作MongoDB数据库的工具库：MongoClient
let MongoClient = require('mongodb').MongoClient;
let ObjectID = require('mongodb').ObjectID;

// 数据库信息
let dbConnectUrl = 'mongodb://127.0.0.1:27017/'; // 数据库连接地址
let dbName = 'yywH5'; // 数据库名称
let usersTableName = 'users'; // 用户表 表名称


let dbExports = {

  // 用户列表
  userLists(callBack) {
    MongoClient.connect(dbConnectUrl, (error, client) => {
      // 数据库连接失败
      if (error) {
        console.log('数据库连接失败');
        callBack(false, null);
        client.close();
        return
      }

      // 数据库连接成功
      console.log('数据库连接成功');
      let db = client.db(dbName);
      db.collection(usersTableName).find({}).sort({_id: -1}).toArray((error, result) => {
        if (error) {
          console.log('查询失败');
          callBack(false, null);
          client.close();
          return
        }
        console.log('查询成功');
        console.log('返回数据如下：');
        console.log(result);
        callBack(true, result);
        client.close();
      });
    });
  },

  /**
   * 新增用户
   * @param userInfo 用户信息
   * @param callBack 回调方法
   */
  addUser(userInfo, callBack) {
    MongoClient.connect(dbConnectUrl, (error, client) => {
      // 数据库连接失败
      if (error) {
        console.log('数据库连接失败');
        callBack(false, null);
        client.close();
        return
      }

      // 数据库连接成功
      console.log('数据库连接成功');
      let db = client.db(dbName);
      db.collection(usersTableName).insertOne(userInfo, (error, result) => {
        if (error) {
          console.log('新增失败');
          callBack(false, null);
          client.close();
          return
        }
        if (result.insertedCount == 0) {
          console.log('新增失败');
          callBack(false, null);
          client.close();
          return
        }
        console.log('新增成功');
        console.log('返回数据如下：');
        console.log(result);
        callBack(true, result);
        client.close();
      });
    });
  },

  /**
   * 编辑用户
   * @param userInfo 用户信息
   * @param callBack 回调方法
   */
  editUser(userInfo, callBack) {

    // 转换id类型，string -> mongodb ObjectId
    userInfo._id = ObjectID(userInfo._id);

    // 查询条件sql
    let whereSql = {
      _id: userInfo._id
    };

    // 更新字段值sql
    let updateSql = {
      $set: {
        name: userInfo.name,
        age: userInfo.age
      }
    };

    MongoClient.connect(dbConnectUrl, (error, client) => {
      // 数据库连接失败
      if (error) {
        console.log('数据库连接失败');
        callBack(false, null);
        client.close();
        return
      }

      // 数据库连接成功
      console.log('数据库连接成功');
      let db = client.db(dbName);
      db.collection(usersTableName).updateOne(whereSql, updateSql, (error, result) => {
        if (error) {
          console.log('编辑失败');
          callBack(false, null);
          client.close();
          return
        }
        if (result.matchedCount == 0 || result.modifiedCount == 0) {
          console.log('编辑失败');
          callBack(false, null);
          client.close();
          return
        }
        console.log('编辑成功');
        console.log('返回数据如下：');
        console.log(result);
        callBack(true, result);
        client.close();
      });
    });
  },

  /**
   * 删除用户
   * @param userInfo 用户信息
   * @param callBack 回调方法
   */
  deleteUser(userInfo, callBack) {

    // 转换id类型，string -> mongodb ObjectId
    userInfo._id = ObjectID(userInfo._id);

    MongoClient.connect(dbConnectUrl, (error, client) => {
      // 数据库连接失败
      if (error) {
        console.log('数据库连接失败');
        callBack(false, null);
        client.close();
        return
      }

      // 数据库连接成功
      console.log('数据库连接成功');
      let db = client.db(dbName);
      db.collection(usersTableName).deleteOne(userInfo, (error, result) => {
        if (error) {
          console.log('删除失败');
          callBack(false, null);
          client.close();
          return
        }
        if (result.deletedCount == 0) {
          console.log('删除失败');
          callBack(false, null);
          client.close();
          return
        }
        console.log('删除成功');
        console.log('返回数据如下：');
        console.log(result);
        callBack(true, result);
        client.close();
      });
    });
  }

};

module.exports = dbExports;