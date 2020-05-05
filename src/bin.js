#!/usr/bin/env node

const lyricsFinder = require("./index.js"),
    [, , ...args] = process.argv;
args.length > 2 ? (console.log("Excessive arguments provided!"), console.log(`Needs 2 arguments but was provided with ${args.length}!`)) : args.length < 2 ? (console.log("Insufficient arguments provided!"), console.log(`Needs 2 arguments but was provided with ${args.length}!`)) : async function(e, s) {
    let o = await lyricsFinder(e, s) || "Not Found!";
    console.log(o)
}(args[0], args[1]);
