const mongoose = require('mongoose')
mongoose.Promise = global.Promise
// module.exports = mongoose.connect('mongodb://localhost/professor')

const url = process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI : 'mongodb://localhost/professor'
module.exports = mongoose.connect(url, { useMongoClient: true })