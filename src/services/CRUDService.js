import bcrypt from 'bcrypt'
import db from '../models/index';
var salt = bcrypt.genSaltSync(10); //hash password

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.email,
                phonenumber: data.phonenumber,
                gender: data.gender == '1' ? true : false,
                roleId: data.roleId
            })
            resolve('created new user success!');
        } catch (e) {
            reject(e);
        }


    })

}


let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            var hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    })
}
module.exports = {
    createNewUser: createNewUser,
}