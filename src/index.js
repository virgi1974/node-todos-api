import express from "express";

const app = express();

app.set("port", process.env.PORT || 3000);

// app.get('/',(req,res) => {
//     res.send('GeeksforGeeks');
// })

app.listen(app.get("port"), () => {
  console.log(`Server running on PORT ${app.get("port")}`);
});
