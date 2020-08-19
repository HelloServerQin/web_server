// Dom层面数据操作
const {exec} =require('../db/mysql_');
const moment = require('moment');
/**
 *  getList 获取当前所有的数据列表
 *  @param {string} author : 返回查询数据用户名
 *  @param {string} keyword: 关键词查询
 * @returns 有参数根据参数返回数据,无参数返回所有数据;
 */
const getList =async (author="",keyword="")=>{
  let sql =`select * from blogs where 1=1`; // 查询所有
  author && (sql+=` and author = '${author}' `); // 查询作者
  keyword && (sql+=` and title like BINARY '%${keyword}%' `); // 查询相似的标题
  sql += ` order by createtime desc`; // 根据 创建时间排序
   return await exec(sql);
  // return  exec(sql).then(data=>console.log(data));
}

/**
 *  获取详细数据信息
 * getDetail 详情页获取
 * @param {number} id 根据id获取详情页面
 * @returns 返回详细的博客数据
 */
const getDetail =async (id=null)=>{
  if (!id) {
    return ;
  }
  let sql  = `select * from blogs where id = ${id}`;
  return await exec(sql);
}

/**
 * 根据id 删除当前博客
 * @param {number} id 博客id
 * @returns 返回被删除的元素
 */
const getDel=async (id = null)=>{
  if (!id) {
    return ;
  }
  let sql  = `delete from blogs where id = ${id}`;
  return await exec(sql);
}

/**
 * 添加新的数据
 * @param {object} obj  用户存储对象
 * @returns 返回新添加的对象
 * 
 */
const postNew = async(obj=null) =>{
  if(!obj)return;
  obj.createtime = moment(new Date()).format('YYYY年MM月DD日 hh:mm');
  let sql=`INSERT INTO blogs(author,title,article,createtime) VALUES('${obj.author}', '${obj.title}', '${obj.article}',  '${obj.createtime}' )`;
  return await exec(sql);
}

/**
 * 修改的对象
 * @param {number} id  更改的博客id
 * @param {object} obj  更改对象值
 * @returns 返回更新后的数据
 */
const postUpdate=async(id=null,obj=null)=>{
  if(!obj&&!id)return;
  // 对obj进行遍历
  let sql= `update blogs set `;
  let count =0;
  for(let key in obj){
    if (key==='id')continue;
    if(count && count  < Object.keys(obj).length -1){
      sql+=` , `;
    }
    sql+=` ${key} = '${obj[key]}'  `;
    count++;
  }
  sql+=` where id = ${id} `;
  return await exec(sql);
}

module.exports={
  getList,
  getDetail,
  getDel,
  postNew,
  postUpdate
}