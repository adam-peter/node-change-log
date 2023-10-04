import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

//include unique user info for the JWT to parse - id, username, Role (for different access), etc.
export const createJWT = (user) => {
    const token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_SECRET
    );

    return token;
};

export const protect = (req, res, next) => {
    //a generic name for a person who sends some token
    const bearer = req.headers.authorization;

    //protect empty tokens
    if (!bearer) {
        res.status(401);
        res.json({ message: "Not authorized" });
        return;
    }

    //must recieve a token that looks like "bearer secretJwtToken"
    const [_, token] = bearer.split(" ");
    if (!token) {
        res.status(401);
        res.json({ message: "Token not valid" });
        return;
    }

    //try-catch to handle users crashing the server
    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();
    } catch (e) {
        console.log(e);
        res.status(401);
        res.json({ message: "Token not valid" });
    }
};

export const comparePasswords = (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
}

export const hashPassword = async (password) => {
    //hash(plainTextPassword, salt) - salt is like a minecraft seed for hashing
    return bcrypt.hash(password, 8);
}

