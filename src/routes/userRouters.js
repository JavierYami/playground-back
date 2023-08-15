const {Router} = require('express');
const usersRouter = Router();

usersRouter.get('/', async (req, res) => {
    try {
    res.send('Funciona');
    } catch (error) {
    console.log(error)
    }
});

module.exports = {
    usersRouter
}