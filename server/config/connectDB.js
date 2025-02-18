import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config ()

if (!process.env.MONGODB_URI){
    throw new Error(
        "Please provide MONGODB_URI in the .evn file"
    )
}

async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connect DB");    
    } catch (error){
        console.log("mongodb connect error", error);
        process.exit(1)
    }
}
export default connectDB