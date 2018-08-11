module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema
  const conn = app.mongooseDB.get('db1')
  
  const UserSchema = new Schema({
    name: {type: String},
    md5Pwd: {type: String},
    eamil: {type: String},
    department: {type: String},
    accessToken: {type: String},
  })

  return conn.model('User', UserSchema)
}