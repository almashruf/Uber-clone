
const userModel = require('../models/user.model');


module.exports.createUser = async (req, res) => ({
    firstname, lastname, email, pasword

}) => {
    if (!firstname || !email || !password) {
        throw new Error('all fields required');
    }
    const user = userModel.create({
        fullname: {
            firstname,
            lastname,
        },
        email,
        password
    });


    return user;

}