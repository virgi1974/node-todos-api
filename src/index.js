import app from "./config/app";
import "./database";
import "dotenv";

// App initialization
app.listen(app.get("port"), () => {
  console.log(`Server running on PORT ${app.get("port")}`);
});
