const {Router} = require('express');
const usersRouter = Router();
const {createUser} = require('../controllers/postUsers');

usersRouter.post('/', async (req, res) => {
    try {
        const {userInfo} = req.body;
        const newUser = await createUser(userInfo);
        res.status(201).send(newUser);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

module.exports = {
    usersRouter
}