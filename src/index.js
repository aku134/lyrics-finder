const tiny = require("tiny-json-http");
module.exports = async function(i, t) {
    let d = `https://www.google.com/search?q=${artist}+${title}+lyrics`;
    d = (d = await tiny.get({
        url: d
    })).body;
    try {
        d = d.split('</div></div></div></div><div class="hwc"><div class="BNeawe tAd8D AP7Wnd"><div><div class="BNeawe tAd8D AP7Wnd">')[1].split('</div></div></div></div></div><div><span class="hwc"><div class="BNeawe uEec3 AP7Wnd">')[0]
    } catch (i) {
        d = ""
    }
    return d
};
