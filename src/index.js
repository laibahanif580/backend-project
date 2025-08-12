
// require("dotenv").config({path: "./env"});
import dotenv from "dotenv";

import mongoose from "mongoose"
import { DB_NAME } from "./constants.js"
import connectDB from "./db/index.js"
import {app} from "./app.js";

dotenv.config({
     path: "./env"
     });


// Attach error listener
app.on("error", (error) => {
  console.error("App encountered an error:", error);
  throw error;
});

connectDB()
.then(()=>{
      const PORT = process.env.PORT || 8000;
     app.listen(PORT, () => {
          console.log(`App is listening on port ${PORT}`);
     });
})
.catch((err)=>{
     console.error("Error connecting to MongoDB:", err);
})



// import express from "express"
// const app=express()


// ;( async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODBB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("error")
//             throw error;
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`app is listening on port ${process.env.PORT}`)
//         })

//     } catch(error){
//         console.error("Error connecting to MongoDB:", error);
//         throw error;
//     }
// })()