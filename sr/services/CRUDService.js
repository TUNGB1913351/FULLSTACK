import bcrypt from 'bcryptjs'
import db from '../models/index';

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

let createNewUser = (data) =>{
    return new Promise(async(resolve, reject) => {
        try {    
            let hashPasswordFrombcrypt = await hashUserPassword(data.password);    
            await db.User.create({
                email: data.email,
                password: hashPasswordFrombcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender === '1' ? true : false,
                roleID: data.roleID
            })

            resolve('ok  create a new user succeed')
        } catch (e) {
            reject(e)
        }
    })
    // let hashPasswordFrombcrypt = await hashUserPassword(data.password);
    // console.log('data from service');
    // console.data;
}

let hashUserPassword = (password) =>{
    return new Promise(async(resolve, reject) => {
        try {
            const hashPassword= await bcrypt.hashSync(password, salt); 
            resolve(hashPassword)
        } catch (e) {
            reject(e);
        }
    }) 
}

let getAlluser = () => {
    return new Promise((resolve, reject) => {
        try {
            let users = db.User.findAll({
                raw : true
            });
            resolve(users);
        } catch (e) {
            reject(e);
        }
    }
    
    )
}
 let getUserINFObyID = (userID) => {
    return new Promise(async(resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where : {id: userID},
                raw : true
            })
            if(user){
                resolve(user)
            }
            else{
                resolve([])
            }
        } catch (e) {
            reject(e)
        }
    })
}

let updateUserData = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where : {id:data.id}
            })
            if(user){
                user.firstName = data.firstName,
                user.lastName = data.lastName,
                user.address = data.address,
                user.phonenumber = data.phonenumber,
                await user.save();
                let allUser = await db.User.findAll();
                resolve(allUser);
            }
            else{
                resolve();
            }
            await db.user
        } catch (e) {
            reject(e)
        }
    })
}

let deleteUserByID = (userid) =>{
    return new Promise(async(resolve, reject) =>{
        try {
           let user = await db.User.findOne({
            where : {id : userid}
           }) 
           if(user){
            await user.destroy();
           }
           resolve();
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createNewUser:createNewUser,
    getAlluser: getAlluser,
    getUserINFObyID:getUserINFObyID,
    updateUserData: updateUserData,
    deleteUserByID:deleteUserByID
}