// 创建一个返回值规范
class BaseModel{
  constructor(data,message){
    if(typeof data === "string"){
      this.message = data;
      data = null;
      message = null;
    }
    if (data) {
      this.data = data;
    }
    if (message){
      this.message = message;
    }
  }
}

// 成功
class SuccessModel extends BaseModel {
  constructor(data,message){
    super(data,message);
    this.errno = 0;
  }
}
// 错误
class ErrorModel extends BaseModel {
  constructor(data,message){
    super(data,message);
    this.errno = -1;
  }
}

module.exports={
  SuccessModel,
  ErrorModel
}