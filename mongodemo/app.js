const koa = require('koa')
const mongoose = require('mongoose')

const db = mongoose.connect('mongodb://localhost:27017/h5-edit')

// db.connection.on('open', console.log('connection error'))

const Schema = mongoose.Schema({
    user: String
})

// model中的第一个参数为 数据库中的集合名称  以定义的Schema为模板，获取users文档集合，如果没有则为新建集合users
const myModel = mongoose.model('users', Schema)

const myModel1 = new myModel({user: 'wll000111'})
// 将数据保存在集合中
myModel1.save((err, result) => {
    if(err) return console.log(err)
    console.log('result', result)
})

// 在集合中创建一个文档

myModel.create({user: 'wll66'}, {user: 'wll88'}, (err) => {
    console.log('err', err)
})
console.log('mongoose', mongoose)



