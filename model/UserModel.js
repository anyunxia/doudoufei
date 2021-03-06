var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//创建文档定义
var User = new Schema({//          User可改
    username     : String,//用户名      username可改
    psw      : String,//密码                    psw可改
    create_date      : {type: Date, default: Date.now}//时间
});
//创建model对象，与数据库中的文档映射；
var UserModel = mongoose.model('user', User);//UserModel可改
module.exports = UserModel;//将创建的对象暴露出去；  UserModel可改，和上面UserModel一致；