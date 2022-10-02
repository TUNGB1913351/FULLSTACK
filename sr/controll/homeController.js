import db from '../models/index';
import CRUDService from '../services/CRUDService';

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
            
    } catch (e) {
        console.log(e)
    }
   
} 

let getAbout = (req, res) => {
    return res.render('test/about.ejs');
}

let getCrud =(req, res) => {
    return res.render('test/crud.ejs');
}

let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send('post crud from server');
}

let displaygetCrud = async (req,res) =>{
    let data = await  CRUDService.getAlluser();
    console.log(data)
    return res.render('displayCRUD.ejs',{
        dataTable: data
    });

}

let geteditCRUD = async (req, res) => {
    let userID = req.query.id;
    if(userID){
        let userDATA = await CRUDService.getUserINFObyID(userID);  
        console.log(userDATA)
        return res.render('editCRUD.ejs',{
            user: userDATA
        });
    }
    else
        return res.send('not foud user');
}

let putCRUD = async (req,res) => {
    let data = req.body;
    let allUser = await CRUDService.updateUserData(data);
    return res.render('displayCRUD.ejs',{
        dataTable: allUser
    });
}

let deleteCRUD = async (req, res) =>{
    let id = req.query.id;
    if(id){
        await CRUDService.deleteUserByID(id);
        return res.send('Deleted the User');   
    }
    else{
        return res.send('no user');
    }
  
}
module.exports = {
    getHomePage: getHomePage,
    getAbout: getAbout,
    getCrud: getCrud,
    postCRUD: postCRUD,
    displaygetCrud: displaygetCrud,
    geteditCRUD:geteditCRUD,
    putCRUD:putCRUD,
    deleteCRUD:deleteCRUD
}