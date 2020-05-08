const fetch = require('node-fetch');
const urlencode = require('urlencode');

async function main(e, d) {
  if ([true, false][Math.floor(Math.random() * 2)]) {
    let i;
    try {
      i = await fetch(`https://www.google.com/search?q=${urlencode(`${d} ${e}`)}+lyrics`);
      i = await i.text();
      [, i] = i.split('</div></div></div></div><div class="hwc"><div class="BNeawe tAd8D AP7Wnd"><div><div class="BNeawe tAd8D AP7Wnd">');
      [i] = i.split('</div></div></div></div></div><div><span class="hwc"><div class="BNeawe uEec3 AP7Wnd">');
    } catch (m) {
      try {
        if ([true, false][Math.floor(Math.random() * 2)]) {
          i = await fetch(`https://www.google.com/search?q=${urlencode(`${d} ${e}`)}+lyrics+song`);
          i = await i.text();
          [, i] = i.split('</div></div></div></div><div class="hwc"><div class="BNeawe tAd8D AP7Wnd"><div><div class="BNeawe tAd8D AP7Wnd">');
          [i] = i.split('</div></div></div></div></div><div><span class="hwc"><div class="BNeawe uEec3 AP7Wnd">');
        } else {
          i = await fetch(`https://www.google.com/search?q=${urlencode(`${d} ${e}`)}+song+lyrics`);
          i = await i.text();
          [, i] = i.split('</div></div></div></div><div class="hwc"><div class="BNeawe tAd8D AP7Wnd"><div><div class="BNeawe tAd8D AP7Wnd">');
          [i] = i.split('</div></div></div></div></div><div><span class="hwc"><div class="BNeawe uEec3 AP7Wnd">');
        }
      } catch (n) {
        try {
          i = await fetch(`https://www.google.com/search?q=${urlencode(`${d} ${e}`)}+song`);
          i = await i.text();
          [, i] = i.split('</div></div></div></div><div class="hwc"><div class="BNeawe tAd8D AP7Wnd"><div><div class="BNeawe tAd8D AP7Wnd">');
          [i] = i.split('</div></div></div></div></div><div><span class="hwc"><div class="BNeawe uEec3 AP7Wnd">');
        } catch (o) {
          try {
            i = await fetch(`https://www.google.com/search?q=${urlencode(`${d} ${e}`)}`);
            i = await i.text();
            [, i] = i.split('</div></div></div></div><div class="hwc"><div class="BNeawe tAd8D AP7Wnd"><div><div class="BNeawe tAd8D AP7Wnd">');
            [i] = i.split('</div></div></div></div></div><div><span class="hwc"><div class="BNeawe uEec3 AP7Wnd">');
          } catch (p) {
            i = '';
          }
        }
      }
    }
    return i;
  }
  let i;
  try {
    i = await fetch(`https://www.google.com/search?q=${urlencode(`${e} ${d}`)}+lyrics`);
    i = await i.text();
    [, i] = i.split('</div></div></div></div><div class="hwc"><div class="BNeawe tAd8D AP7Wnd"><div><div class="BNeawe tAd8D AP7Wnd">');
    [i] = i.split('</div></div></div></div></div><div><span class="hwc"><div class="BNeawe uEec3 AP7Wnd">');
  } catch (m) {
    try {
      if ([true, false][Math.floor(Math.random() * 2)]) {
        i = await fetch(`https://www.google.com/search?q=${urlencode(`${e} ${d}`)}+lyrics+song`);
        i = await i.text();
        [, i] = i.split('</div></div></div></div><div class="hwc"><div class="BNeawe tAd8D AP7Wnd"><div><div class="BNeawe tAd8D AP7Wnd">');
        [i] = i.split('</div></div></div></div></div><div><span class="hwc"><div class="BNeawe uEec3 AP7Wnd">');
      } else {
        i = await fetch(`https://www.google.com/search?q=${urlencode(`${e} ${d}`)}+song+lyrics`);
        i = await i.text();
        [, i] = i.split('</div></div></div></div><div class="hwc"><div class="BNeawe tAd8D AP7Wnd"><div><div class="BNeawe tAd8D AP7Wnd">');
        [i] = i.split('</div></div></div></div></div><div><span class="hwc"><div class="BNeawe uEec3 AP7Wnd">');
      }
    } catch (n) {
      try {
        i = await fetch(`https://www.google.com/search?q=${urlencode(`${e} ${d}`)}+song`);
        i = await i.text();
        [, i] = i.split('</div></div></div></div><div class="hwc"><div class="BNeawe tAd8D AP7Wnd"><div><div class="BNeawe tAd8D AP7Wnd">');
        [i] = i.split('</div></div></div></div></div><div><span class="hwc"><div class="BNeawe uEec3 AP7Wnd">');
      } catch (o) {
        try {
          i = await fetch(`https://www.google.com/search?q=${urlencode(`${e} ${d}`)}`);
          i = await i.text();
          [, i] = i.split('</div></div></div></div><div class="hwc"><div class="BNeawe tAd8D AP7Wnd"><div><div class="BNeawe tAd8D AP7Wnd">');
          [i] = i.split('</div></div></div></div></div><div><span class="hwc"><div class="BNeawe uEec3 AP7Wnd">');
        } catch (p) {
          i = '';
        }
      }
    }
  }
  return i;
}
module.exports = main;
