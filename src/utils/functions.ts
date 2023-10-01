import { Response } from "express";
import { Result, ValidationError } from "express-validator";

export const handleInputValidation = (
    res: Response,
    errors: Result<ValidationError>
) => {
    console.log(errors);

    if (!errors.isEmpty()) {
        res.status(400);
        res.json({ errors: errors.array() });
    }
};
