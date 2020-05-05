const tiny = require("tiny-json-http"),
    urlencode = require("urlencode"),
    unidecode = require("unidecode-plus");
module.exports = async function(e, d) {
    let i = `https://www.google.com/search?q=${urlencode(d+" "+e)}+lyrics`;
    i = unidecode((i = await tiny.get({
        url: i
    })).body);
    try {
        i = i.split('</div></div></div></div><div class="hwc"><div class="BNeawe tAd8D AP7Wnd"><div><div class="BNeawe tAd8D AP7Wnd">')[1].split('</div></div></div></div></div><div><span class="hwc"><div class="BNeawe uEec3 AP7Wnd">')[0]
    } catch (e) {
        i = ""
    }
    return i
};
