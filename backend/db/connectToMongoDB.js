import mongoose from "mongoose";

export const connectToMongoDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("Connected to mongo DB")
    } catch (e) {
        console.log(e)
    }
}