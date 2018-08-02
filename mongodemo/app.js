const koa = require('koa')
const mongoose = require('mongoose')

const db = mongoose.connect('mongodb://localhost:27017/h5-edit')

// db.connection.on('open', console.log('connection error'))

const Schema = mongoose.Schema({
    user: String
})

// model中的第一个参数为 数据库中的集合名称
const myModel = mongoose.model('users', Schema)

const myModel1 = new myModel({user: 'wll000111'})
// 将数据保存在集合中
myModel1.save((err, result) => {
    if(err) return console.log(err)
    console.log('result', result)
})

