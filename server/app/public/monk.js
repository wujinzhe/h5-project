/*
 * @Author: wangll 
 * @Date: 2018-07-13 16:34:15 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-07-24 10:53:29
 */
const MongoClient = require('mongodb').MongoClient
const url = 'localhost:27017'
const dbName = 'h5-edit'

MongoClient.connect(url, (err, db) => {
  if (err) throw err

  const dbo = db.db(dbName)
  dbo.collection('documennts').find({}).toArray((err, result) => {
    if (err) throw err
    console.log('xxxx',result)
    return result
  })
})


module.exports = MongoClient

