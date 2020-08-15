const http=require('http');
const configApp= require('../app');

// 创建一个网络服务
const server = http.createServer();

// 监听当前端口
server.listen(8000,()=>{
  console.log("监听开始");
});

// 绑定一个请求事件
server.on('request',(req,res)=>{
  configApp(req,res);
});