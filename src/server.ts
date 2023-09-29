import express from "express";
import router from "./router";
import morgan from "morgan";
import {protect} from "./utils/auth";

const app = express();

//app.use - to apply middleware globally
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("Hello from express");
  res.status = 200;
  res.json({ message: "hello" });
});

//protect -> using our auth middleware to protect the api router
app.use("/api", protect, router);

export default app;
