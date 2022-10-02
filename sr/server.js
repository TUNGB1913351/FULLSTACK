import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initwebRouter from "./route/web";
import connectDB from "../sr/config/connectDB";

require("dotenv").config();

let app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extend: true}))



viewEngine(app);
initwebRouter(app);

connectDB()

let port = process.env.PORT;

app.listen(port, () =>{
    console.log("xin chao"+port)
})
