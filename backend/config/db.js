const mongoos = require('mongoose')
const connectDB =async ()=>{
    try {
        const conn = await mongoos.connect(process.env.MONGO_URI,{
            // useNewUrlParser: true,
            // useUnifiedTopology: true
            // strictQuery:true
            // useFindAndModifiy:true
        })
        console.log(`MongoDB Connected ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit()
    }
}
module.exports = connectDB