require('dotenv').config();
const {PORT} = process.env || 3001;
const {server} = require('./src/app');
const {sequelize} = require('./src/db')

sequelize.sync({ force: true }).then(()=>{
    console.log('Ready');
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    })
}).catch(error=>console.log(error));

