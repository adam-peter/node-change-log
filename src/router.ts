import { Router } from "express";
import { body, validationResult } from "express-validator";
import { handleInputValidation } from "./utils/middleware";

const router = Router();

/**
 * Product
 */
router.get("/product", (req, res) => {
    res.json({ message: "Hello!" });
});

router.get("/product/:id", () => {});

//body(enforcedField).rule() - validationResult checks the enforced fields in the request
//you can store the input validators inside an array. You can store the arrays in utils/validators.ts
router.put(
    "/product/:id",
    body("name").isString(),
    handleInputValidation,
    (req, res) => {}
);

router.post(
    "/product",
    body("name").isString(),
    handleInputValidation,
    (req, res) => {}
);

router.delete("/product/:id", () => {});

/**
 * Update
 */
router.get("/update", () => {});

router.get("/update/:id", () => {});

router.put(
    "/update/:id",
    body(["title", "body", "version", "asset"]).isString(),
    handleInputValidation,
    (req, res) => {}
);

router.post(
    "/update",
    body(["title", "body"]).notEmpty().isString(),
    body(["version", "asset"]).notEmpty().isString(),
    body("status").notEmpty(),
    handleInputValidation,
    (req, res) => {}
);

router.delete("/update/:id", (req, res) => {});

/**
 * Update Points
 */
router.get("/updatepoint", () => {});

router.get("/updatepoint/:id", () => {});

router.put(
    "/updatepoint/:id",
    body(["name", "description"]).notEmpty().isString(),
    handleInputValidation,
    (req, res) => {
        //#
    }
);

router.post(
    "/updatepoint",
    body(["name", "description"]).notEmpty().isString(),
    handleInputValidation,
    (req, res) => {}
);

router.delete("/updatepoint/:id", () => {});

export default router;
