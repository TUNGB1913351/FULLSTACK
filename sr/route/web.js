import express from "express";
import homeController from "../controll/homeController";
import usercontroller from "../controll/usercontroller";
let router = express.Router();

let initwebRouters = (app) => {
    router.get('/', homeController.getHomePage)
    router.get('/about', homeController.getAbout)
    router.get('/crud', homeController.getCrud)
    router.post('/post-crud', homeController.postCRUD)
    router.get('/edit-crud', homeController.geteditCRUD)
    router.get('/deleted-crud', homeController.deleteCRUD)
    router.get('/get-crud',homeController.displaygetCrud)
    router.post('/put-crud', homeController.putCRUD)

    router.post('/api/login', usercontroller.handleLogin)
  
    return app.use("/", router);
}

module.exports = initwebRouters;