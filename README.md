# vue-nodejs-mongodb
基于 nodejs and mongodb，快速搭建后端接口服务器，实现对数据库中的表数据进行（增删改查）操作。

## 1. 软件下载与安装

### 1.1 Node.js
* 官方网站：https://nodejs.org
* 下载地址：https://nodejs.org/dist/v10.16.3/node-v10.16.3-x64.msi
* 安装步骤：下一步，下一步，完成。

### 1.2 MongoDB Server (Database software 数据库软件)
* 官方网站：https://www.mongodb.com/what-is-mongodb
* 下载地址：https://downloads.mongodb.com/win32/mongodb-win32-x86_64-enterprise-windows-64-4.2.0-signed.msi
* 安装步骤：下一步，下一步，完成。

### 1.3 MongoDB Compass (GUI for MongoDB 图形化数据库管理软件)
* 官方网站： https://www.mongodb.com/products/compass
* 下载地址：https://downloads.mongodb.com/compass/mongodb-compass-1.19.12-win32-x64.exe
* 安装步骤：下一步，下一步，完成。

## 2. 项目运行

### 2.1 后端nodejs接口服务器启动 (先启动后端服务)
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

### 2.2 前端H5静态文件服务器启动 (再启动前端服务)
```
cd h5
npm install
npm run dev
```
访问地址如下：  
http://127.0.0.1:8001  
