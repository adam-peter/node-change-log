import { Router } from "express";

const router = Router();

/**
 * Product
 */
router.get("/product", (req, res) => {
    res.json({message: "Hello!"})
});

//dynamic request parameter id
router.get("/product/:id", () => {});

//put = complete update of the record; patch = updates only updated properties
router.put("/product/:id", () => {});

router.post("/product", () => {});

router.delete("/product/:id", () => {});

/**
 * Update
 */
router.get("/update", () => {});

router.get("/update/:id", () => {});

router.put("/update/:id", () => {});

router.post("/update", () => {});

router.delete("/update/:id", () => {});

/**
 * Update Points
 */
router.get("/updatepoint", () => {});

router.get("/updatepoint/:id", () => {});

router.put("/updatepoint/:id", () => {});

router.post("/updatepoint", () => {});

router.delete("/updatepoint/:id", () => {});

export default router;