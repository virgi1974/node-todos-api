import mongoose from "mongoose";
import config from "./config";

// "tasksapi" -> nombre de la base de datos

(async () => {
  try {
    const db = await mongoose.connect(config.mongodbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Database connected to: ", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();

// export default db;
