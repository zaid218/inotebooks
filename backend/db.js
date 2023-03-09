const mongoose = require('mongoose')
const mongoURI = "mongodb://localhost:27017/cruduseroperation?directConnection=true&readPreference=primary"

const connectToMongo = () => {
    mongoose.connect(mongoURI, (err) => {
        console.log('connected to Mongo successfully')
    })
}
module.exports=connectToMongo