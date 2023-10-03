import prisma from "../utils/db";

/*
router.get("/update")
router.get("/update/:id")
router.put("/update/:id")
router.post("/update")
router.delete("/update/:id")
*/

//GET all updates for a user
export const getUpdates = async (req, res) => {
    const products = await prisma.product.findMany({
        where: {
            belongsToId: req.user.id,
        },
        include: {
            updates: true,
        },
    });

    const updates = products.reduce((allUpdates, product) => {
        return [...allUpdates, ...product.updates];
    }, []);

    res.json({ data: updates });
};

//GET one
export const getUpdate = async (req, res) => {
    const update = await prisma.update.findUnique({
        where: {
            id: req.params.id,
        },
    });

    res.json({ data: update });
};

//PUT one
export const updateUpdate = async (req, res) => {
    const products = await prisma.product.findMany({
        where: {
            belongsToId: req.user.id,
        },
        include: {
            updates: true,
        },
    });

    const updates = products.reduce((allUpdates, product) => {
        return [...allUpdates, ...product.updates];
    }, []);

    const match = updates.find((update) => update.id === req.params.id);

    if (!match) {
        return res.json({ message: "No updates found." });
    }

    const updatedUpdate = await prisma.update.update({
        where: {
            id: req.params.id,
        },
        data: req.body,
    });

    res.json({ data: updatedUpdate });
};

//POST one
export const createUpdate = async (req, res) => {
    const product = await prisma.product.findUnique({
        where: {
            id: req.body.productId,
        },
    });

    if (!product) {
        res.json({ message: "the product doesn't belong to you" });
    }

    const update = await prisma.update.create({
        data: {
            title: req.body.title,
            body: req.body.body,
            product: { connect: { id: product.id } },
        },
    });

    res.json({ data: update });
};

export const deleteUpdate = async (req, res) => {
    const deleted = await prisma.update.delete({
        where: {
            id: req.params.id,
        },
    });

    res.json({ data: deleted });
};
