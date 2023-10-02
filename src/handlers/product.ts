import prisma from "../utils/db";

//GET all
export const getProducts = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            id: req.user.id,
        },
        include: {
            products: true,
        },
    });
    //always send back an object with "data" field
    res.json({ data: user.products });
};

//GET one
export const getProduct = async (req, res) => {
    //To optimize indexing of this sort, add this line to the schema:
    //@@unique([id, belongsToId])
    const product = await prisma.product.findUnique({
        where: {
            //app.use(express.urlencoded({extended: true})) - to have params turned into an object
            id: req.params.id,
            belongsToId: req.user.id,
        },
    });

    res.json({ data: product });
};

export const createProduct = async (req, res) => {
    const product = await prisma.product.create({
        data: {
            //app.use(express.json) - turns req into a json
            name: req.body.name,
            belongsToId: req.user.id,
        },
    });

    res.json({
        data: product,
    });
};

//PUT one
export const updateProduct = async (req, res) => {
    const updated = await prisma.product.update({
        where: {
            id: req.params.id,
            belongsToId: req.user.id,
        },
        data: {
            name: req.body.name,
        },
    });

    res.json({ data: updated });
};

//DELETE one
export const deleteProduct = async (req, res) => {
    const deleted = await prisma.product.delete({
        where: {
            id: req.params.id,
            //validate the user is deleting his own product
            //@@unique([id, belongsToId]) -> npx prisma migrate (change connection string from 6543 to 5432)
            belongsToId: req.user.id,
            //or use a joint index: id_belongsToId: {id: req.params.id, belongsToId: req.user.id}
        },
    });

    res.json({
        data: deleted,
    });
};
