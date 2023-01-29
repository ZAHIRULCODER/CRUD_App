const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
const connectDB = async() => {
    try{
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true
        })
        console.log(`Connected to the database!`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;