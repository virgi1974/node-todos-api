import express from "express";
import IndexRoutes from "../routes/tasks.routes";

const app = express();

// settings
app.set("port", process.env.PORT || 3000);

app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to your node & mogo-db API" });
});

app.use("/api/tasks", IndexRoutes);

export default app;
