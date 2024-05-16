const { connectDB } = require("./connectDB");
const indexRoute = require('./routes');

exports.startup = async (app) => {
    app.use('/api', indexRoute);
    await connectDB();
}