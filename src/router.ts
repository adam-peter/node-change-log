import { Router } from "express";
import { body } from "express-validator";
import { handleInputValidation } from "./utils/middleware";
import {
    createProduct,
    deleteProduct,
    getProduct,
    getProducts,
    updateProduct,
} from "./handlers/product";
import {
    createUpdate,
    deleteUpdate,
    getUpdate,
    getUpdates,
    updateUpdate,
} from "./handlers/update";

const router = Router();

/**
 * Product
 */
router.get("/product", getProducts);

router.get("/product/:id", getProduct);

//body(enforcedField).rule() - validationResult checks the enforced fields in the request
//you can store the input validators inside an array. You can store the arrays in utils/validators.ts
router.put(
    "/product/:id",
    body("name").isString(),
    handleInputValidation,
    updateProduct
);

router.post(
    "/product",
    body("name").isString(),
    handleInputValidation,
    createProduct
);

router.delete("/product/:id", deleteProduct);

/**
 * Update
 */
router.get("/update", getUpdates);

router.get("/update/:id", getUpdate);

router.put(
    "/update/:id",
    body(["title", "body"]).optional().isString(),
    body(["version", "asset"]).optional().isString(),
    body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(),
    handleInputValidation,
    updateUpdate
);

router.post(
    "/update",
    body(["title", "body", "productId"]).exists().isString(),
    body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(),
    handleInputValidation,
    createUpdate
);

router.delete("/update/:id", deleteUpdate);

/**
 * Update Points
 */
router.get("/updatepoint", () => {});

router.get("/updatepoint/:id", () => {});

router.put(
    "/updatepoint/:id",
    body(["name", "description"]).optional().isString(),
    handleInputValidation,
    (req, res) => {}
);

router.post(
    "/updatepoint",
    body(["name", "description", "updateId"]).exists().isString(),
    handleInputValidation,
    (req, res) => {}
);

router.delete("/updatepoint/:id", () => {});

export default router;
