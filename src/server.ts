import express from "express";
import router from "./router";
import morgan from "morgan";
import { body } from "express-validator";
import { handleInputValidation } from "./utils/middleware";
import { protect } from "./utils/auth";
import { createNewUser, signin } from "./handlers/user";
import { errorHandler } from "./handlers/error";

const app = express();

//app.use - to apply middleware globally
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
    res.json({message: "hello from express"})
});

//protect -> using our auth middleware to protect the api router
app.use("/api", protect, router);

//Create
app.post("/user", body(["name", "password"]).exists().isString(), handleInputValidation, createNewUser);
app.post("/signin", body(["name", "password"]).exists().isString(), handleInputValidation, signin);

app.use(errorHandler);

export default app;
