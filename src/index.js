const fetch = require("node-fetch"),
    urlencode = require("urlencode");
module.exports = async function(e, d) {
    let i = await fetch(`https://www.google.com/search?q=${urlencode(d+" "+e)}+lyrics`);
    i = await i.text();
    try {
        i = i.split('</div></div></div></div><div class="hwc"><div class="BNeawe tAd8D AP7Wnd"><div><div class="BNeawe tAd8D AP7Wnd">')[1].split('</div></div></div></div></div><div><span class="hwc"><div class="BNeawe uEec3 AP7Wnd">')[0]
    } catch (e) {
        i = ""
    }
    return i
};
