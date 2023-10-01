import express from "express";
import router from "./router";
import morgan from "morgan";
import { protect } from "./utils/auth";
import { createNewUser, signin } from "./handlers/user";

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

//Create
app.post("/user", createNewUser);
app.post("/signin", signin);

export default app;
