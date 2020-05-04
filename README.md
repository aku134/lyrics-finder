# Lyrics-Finder

A lyrics api which actually works!

# Installing

 ```js
npm install --save lyrics-finder
 ```

# Usage

 ```js
const lyricsFinder = require('lyrics-finder');
(async function(artist, title) {
    let lyrics = await lyricsFinder(artist, title);
    if (lyrics) {
        console.log(lyrics);
    } else {
        console.log("Not Found!");
    }
})("shakira", "chantaje");
``` 


