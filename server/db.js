const mongoose = require("mongoose");

const conectToDataBase = async () => {
  try {
    const db = await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log(`db`, db.connection.host);
  } catch (error) {
    console.log(`errorConnect`, error);
  }
};
module.exports = conectToDataBase;
