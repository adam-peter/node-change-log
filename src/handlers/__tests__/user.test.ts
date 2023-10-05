import * as user from "../user";

describe("user handler", () => {
    it("should create a new user", async () => {
        //mock out function parameters
        const req = { body: { username: "asdf", password: "asdfasdf" } };
        const res = {
            json({ token }) {
                expect(token).toBeTruthy();
            },
        };

        //createNewUser needs (req, res, next)
        await user.createNewUser(req, res, () => {});
    });
});
