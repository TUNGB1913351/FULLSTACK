import express from "express";

let configViewEngine = (app) =>{
    app.use(express.static("./sr/public"));
    app.set("view engine", "ejs");
    app.set("views", "./sr/views")
}

module.exports = configViewEngine;