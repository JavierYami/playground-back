require('dotenv').config();
const {PORT} = process.env || 3001;
const {server} = require('./src/app');

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})