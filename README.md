# Lyrics-Finder

A lyrics api which actually works!

# Installing

 ```js
npm install --save lyrics-finder
 ```

# Usage

 ```js
const lyricsFinder = require('lyrics-finder');
(async function() {
    let lyrics = await lyricsFinder('shakira', 'chantaje');
    console.log(lyrics);
})();
``` 


