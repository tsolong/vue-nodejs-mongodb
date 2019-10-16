# vue-nodejs-mongodb
基于 nodejs and mongodb，快速搭建后端接口服务器，实现对数据库中的表数据进行（增删改查）操作。

## 1. 相关链接

* Node.js 官网 https://nodejs.org/  
* MongoDB 官网 https://www.mongodb.com/  

## 2. 软件下载

### 2.1 MongoDB Server (Database software)
* 介绍：https://www.mongodb.com/what-is-mongodb
* 下载地址：https://downloads.mongodb.com/win32/mongodb-win32-x86_64-enterprise-windows-64-4.2.0-signed.msi

### 2.2 MongoDB Compass (GUI for MongoDB)
* 介绍： https://www.mongodb.com/products/compass
* 下载地址：https://downloads.mongodb.com/compass/mongodb-compass-1.19.12-win32-x64.exe

## 3. 项目运行

### 3.1 前端H5静态文件服务器启动

```
cd h5
npm install
npm run dev
```

访问地址如下：  
http://127.0.0.1:8001  

### 3.2 后端nodejs接口服务器启动

```
cd server
npm install
npm run dev
```


目前提供如下接口：  
用户列表：http://127.0.0.1:8002/userLists  
新增用户：http://127.0.0.1:8002/addUser  
编辑用户：http://127.0.0.1:8002/editUser  
删除用户：http://127.0.0.1:8002/deleteUser  

