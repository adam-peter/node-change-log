export const errorHandler = (err, req, res, next) => {
    switch (err.type) {
        case "auth":
            res.status(401).json({ message: "Unauthorized" });
        case "input":
            res.status(400).json({ message: "Invalid input" });
        default:
            res.status(500).json({ message: "Something went wrong!" });
    }
};
