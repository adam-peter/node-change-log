import prisma from "../utils/db";

/*
router.get("/update"
router.get("/update/:id"
router.put("/update/:id"
router.post("/update"
router.delete("/update/:id"
*/

//GET all
export const getUpdates = async (req, res) => {
    const updates = await prisma.update.findMany({
        where: {
            productId: req.body.productId,
        },
    });

    res.json({ data: updates });
};

//GET one
export const getUpdate = async (req, res) => {
    const update = await prisma.update.findUnique({
        where: {
            id: req.params.id,
        },
        // include: {
        //     product: {
        //         include: {
        //             belongsTo: {
        //                 where: {
        //                     id: req.user.id,
        //                 },
        //             },
        //         },
        //     },
        // },
    });

    res.json({ data: update });
};

//PUT one
export const updateUpdate = async (req, res) => {
    const updated = prisma.update.update({
        where: {
            id: req.params.id,
            //where belongs to user...
        },
        data: {
            title: req.body.title,
            body: req.body.body,
            status: req.body.status,
            version: req.body.version,
            asset: req.body.asset,
        },
    });

    res.json({ data: updated });
};

//POST
export const createUpdate = async (req, res) => {
    const created = prisma.update.create({
        data: {
            title: req.body.title,
            body: req.body.body,
            status: req.body.status,
            version: req.body.version,
            asset: req.body.asset,
            updatedAt: new Date(),
            product: null, //...
        },
    });

    res.json({ data: created });
};

export const deleteUpdate = async (req, res) => {
    const deleted = prisma.update.delete({
        where: {
            id: req.params.id,
            //...
        },
    });

    res.json(deleted);
};
