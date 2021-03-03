import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  // res.json({ message: "Welcome to your node & mogo-db API" });
  res.send("Tasks");
});

export default router;
