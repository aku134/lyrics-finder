#!/usr/bin/env node

const tiny = require("tiny-json-http"),
    urlencode = require("urlencode"),
    unidecode = require("unidecode"),
    [, , ...args] = process.argv;
args.length > 2 ? (console.log("Excessive arguments provided!"), console.log(`Needs 2 arguments but was provided with ${args.length}!`)) : args.length < 2 ? (console.log("Insufficient arguments provided!"), console.log(`Needs 2 arguments but was provided with ${args.length}!`)) : async function(e, s) {
    let d = `https://www.google.com/search?q=${urlencode(s+" "+e)}+lyrics`;
    d = (d = await tiny.get({
        url: d
    })).body;
    try {
        console.log(d.split('</div></div></div></div><div class="hwc"><div class="BNeawe tAd8D AP7Wnd"><div><div class="BNeawe tAd8D AP7Wnd">')[1].split('</div></div></div></div></div><div><span class="hwc"><div class="BNeawe uEec3 AP7Wnd">')[0])
    } catch (e) {
        console.log("Not Found!")
    }
}(args[0], args[1]);
