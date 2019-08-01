var mongoose = require('mongoose');

const mlabURL = 'mongodb://localhost:27017/my-pham';
const dbName = 'my-pham';
mongoose.Promise = global.Promise;

const con = mongoose.connect(mlabURL, (err) => {
    if (err) {
        console.log("Error " + err);
    } else {
        console.log("Connected successfully to server")
    }
});

module.exports = con;