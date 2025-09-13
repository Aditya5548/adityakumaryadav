import mongoose from "mongoose";
export const connectdb=async()=>{
    await mongoose.connect('mongodb+srv://yadityakumar:9621882868@cluster0.ekfa9rr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
        console.log("Database at MongoDb Atlas connected.....")
    })
}