// const mongoose = require('mongoose')


module.exports = app => {
  console.log('app.config.mongoose.url', app.config.mongoose.url)
  // const db = mongoose.connect(app.config.mongoose.url)
  const mongoose = app.mongoose
  const Schema = mongoose.Schema
  const conn = app.mongooseDB.get('db1')
  // const conn = app.mongooseDB.get('db1')
  
  const UserSchema = new Schema({
    user: {type: String},
  })

  const myModel = mongoose.model('Users', UserSchema) 

  return conn.model('Users', UserSchema)
}