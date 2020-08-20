const { getList,
  getDetail,
  getDel,
  postNew,
  postUpdate}=require('../controller/blog');
const {SuccessModel,ErrorModel}=require('../model/resModel');

// 发送数据;
const BlogRequest= function(req,res){
    // 路由分发
    // 获取当前列表数据
    if(req.reqMethod=="GET"&&req.reqUrl=="/api/blog/list"){
     return getList(req.query.author,req.query.keyword).then(data=> new SuccessModel(data,'获取成功'));;
    }
    //获取详情
    if(req.reqMethod=="GET"&&req.reqUrl=="/api/blog/detail"){
      return getDetail(req.query.id).then(data=>new SuccessModel(data,'获取成功'));
    }
    //删除当前博客
    if(req.reqMethod=="GET"&&req.reqUrl=="/api/blog/del"){
      return getDel(req.query.id).then(data=>new SuccessModel(data,'删除成功'));
    }
      //创建新的博客
    if(req.reqMethod=="POST"&&req.reqUrl=="/api/blog/new"){
      return postNew(req.query).then(data=>new SuccessModel(data,'添加成功'));
    }
    //更新博客
    if(req.reqMethod=="POST"&&req.reqUrl=="/api/blog/update"){
      return postUpdate(req.query.id,req.query).then(data=>new SuccessModel(data,'修改成功'));
    }
}

module.exports={
  BlogRequest
}