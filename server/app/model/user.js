// const mongoose = require('mongoose')


module.exports = app => {
  console.log('app.config.mongoose.url', app.config.mongoose.url)
  // const db = mongoose.connect(app.config.mongoose.url)
  const mongoose = app.mongoose
  const Schema = mongoose.Schema
  const conn = app.mongooseDB.get('db1')
  // const conn = app.mongooseDB.get('db1')
  
  const UserSchema = new Schema({
    name: {type: String},
    md5Pwd: {type: String},
    eamil: {type: String},
    department: {type: String},
    accessToken: {type: String},
  })

  // const myModel = mongoose.model('User', UserSchema) 

  return conn.model('User', UserSchema)
}