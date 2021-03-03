import app from "./config/app";

// App initialization
app.listen(app.get("port"), () => {
  console.log(`Server running on PORT ${app.get("port")}`);
});
