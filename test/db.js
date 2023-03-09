const mongoose = require('mongoose')
const mongoURI = "mongodb://127.0.0.1:27017/test?directConnection=true"

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log('connected to Mongo successfully')
    },6000)
}
module.exports=connectToMongo