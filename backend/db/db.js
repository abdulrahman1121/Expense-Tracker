const mongoose = require('mongoose');

const db = async () => {
    try{
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log("DB is Working")
    } catch (error) {
        console.log('DB Connection Error', error.message)
        throw error

    }
}

module.exports = {db}