import { comparePasswords, createJWT, hashPassword } from "../utils/auth";
import prisma from "../utils/db";

//all async queries are async
export const createNewUser = async (req, res) => {
    const user = await prisma.user.create({
        data: {
            username: req.body.username,
            password: await hashPassword(req.body.password),
        },
    });

    const token = createJWT(user);
    res.json({ token });
};

export const signin = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            username: req.body.username,
            //not comparing password - the saved password is hashed
        },
    });

    const isValid = await comparePasswords(req.body.password, user.password);

    if (!isValid) {
        res.status(401);
        res.json({ message: "Invalid username or password" });
        return;
    }

    const token = createJWT(user);
    res.json({ token });
};