const {User} = require('../db');

const createUser = async ({first_name, last_name, email, password}) => {

    if(!first_name || !last_name || !email || !password) throw new Error({message:'Missing data, cannot create user'})
    
    const newUser = await User.create({
        first_name,
        last_name,
        email,
        password
    });

    return {newUser, message: 'User created successfully!'};
}

module.exports = {
    createUser
}