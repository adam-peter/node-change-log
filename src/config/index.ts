import merge from "lodash.merge";

//don't overwrite if it already existed - isn't set by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const stage = process.env.STAGE || "local";

let envConfig;

switch (stage) {
    case "production":
        envConfig = require("./prod").default;
    case "testing":
        envConfig = require("./testing").default;
    default:
        envConfig = require("./local").default;
}

//merges our own config on the defaultly set config; overwrites all changed
export default merge(
    {
        stage,
        env: process.env.NODE_ENV,
        port: 3000,
        secrets: {
            jwt: process.env.JWT_SECRET,
            dbUrl: process.env.DATABASE_URL,
        },
    },
    envConfig
);
