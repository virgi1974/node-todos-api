import mongoose from "mongoose";
import config from "./config";

// "tasksapi" -> nombre de la base de datos

(async () => {
  const db = await mongoose.connect(config.mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  console.log("Database connected to: ", db.connection.name);
})();

// export default db;
