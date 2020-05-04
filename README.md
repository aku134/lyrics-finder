**Lyrics-Finder**
This package actually works!
**Usage**
**For Node.js**
Install using:
npm install lyrics-finder --save
In your code:
const lyricsFinder = require('lyrics-finder');
async function get\_lyrics (artist, title) {
 let lyrics = await lyricsFinder(artist, title);
console.log(lyrics);
})
get\_lyrics("shakira", "chantaje");



