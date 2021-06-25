const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDBConnected ${conn.connection.host}`);
  } catch (e) {
    console.error(`Error connecting MongoDB ${e}`);
    process.exit();
  }
};
module.exports = connectDB;
