const MongoClient = require('mongodb').MongoClient
const myurl = 'mongodb://localhost:27017';


 MongoClient.connect(myurl, (err, client) => {
    if (err) return console.log(err)
    db = client.db('code_challenge') 
  })

