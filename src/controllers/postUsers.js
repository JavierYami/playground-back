const {User} = require('../db');

const createUser = async ({first_name, last_name, email, password}) => {
    
    const newUser = await User.create({
        first_name,
        last_name,
        email,
        password
    });

    if(newUser) return newUser;

}

module.exports = {
    createUser
}