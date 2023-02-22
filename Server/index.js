import express  from "express";
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.js" 
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import bookingRoute from "./routes/booking.js"

dotenv.config()
const app =express()
const port=process.env.PORT || 8800

//database connection

const connect =async ()=>{
    try{
        await mongoose.connect(process.env.MONGO,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        console.log('MONGODB database connected');

    }catch (err) {
        console.log("MONGODB database connection failed");

    }
}

//for testing

app.get('/',(req,res)=>{
    res.send("api is working")
})


//middleeweare


app.use(express.json());
app.use(cors());
app.use(cookieParser());



app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/api/rooms",roomsRoute);
app.use("/api/booking",bookingRoute);


app.use((err,req,res,next)=>{
    const errorStatus=err.status || 500;
    const errorMessage=err.message || "something went wrong!";
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack: err.stack,
    });
});

 

app.listen(port,()=>{
    connect();
    console.log('listening port',port);
})