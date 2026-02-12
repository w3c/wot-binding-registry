const pretty = require("pretty");
const fs = require("fs");

const input = fs.readFileSync("index.html", "utf-8");

const output = pretty(input);

fs.writeFileSync("index.html", output);

if (input !== output){
    const message = "run npm format to prettify index.html";
    console.error(message);
    if (process.env.GITHUB_ACTIONS) {
        const actions = require("@actions/core");
        actions.setFailed(message);
    } else {
        throw new Error(message);
    }
}