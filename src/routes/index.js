const {Router} = require('express');
const {usersRouter} = require('./userRouters')

const mainRouter = Router();

mainRouter.use('/users', usersRouter);


module.exports = {
    mainRouter
}