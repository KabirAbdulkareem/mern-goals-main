const mongoose = require('mongoose')

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDb Connected: ${conn.connection.host}`.bgWhite.black.bold)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB