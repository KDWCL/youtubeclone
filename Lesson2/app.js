import express from "express";
import { userRouter } from "./router";

const app = express();

const handleindex = (req, res) => {
  res.send("indexpage");
};
const handleProfile = (req, res) => {
  res.send("my profile");
};

app.get("/", handleindex);
app.get("/profile", handleProfile);
app.use("/user", userRouter);

export default app;
