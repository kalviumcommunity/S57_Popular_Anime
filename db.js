const mongoose = require('mongoose')
require('dotenv').config()


const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
    }catch(err){
        console.error(err)
    }
}
const disconnectDB = async()=>{
    mongoose.disconnect()
    console.log("mongoose disconnected")
}

const checkconnection = () => {
    const dbStatus = mongoose.connection.readyState;
    return dbStatus === 1; 
};
module.exports={
    connectDB,
    disconnectDB,
    checkconnection
}