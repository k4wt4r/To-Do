const mongoose = require('mongoose');

const connectDb = async () => {
    await mongoose.connect(process.env.DATABASE_URL);
    mongoose.connection.on('connected', function () {
        console.log('db connected')
    });

    mongoose.connection.on('error', function () {
        console.log('db not connected')
    });
}

module.exports = connectDb;