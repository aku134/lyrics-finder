# Lyrics-Finder

A lyrics api which actually works!

It scrapes the lyrics from google front page.

# In your code:

## Installation

```bash
npm install --save lyrics-finder
```

## Usage

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

# Command line usage:

## Installation

```bash
npm install -g lyrics-finder
```

> Note: **DO NOT** use sudo to install global packages! The correct way to do it is to tell npm where to install it's global packages: `npm config set prefix ~/.local`. Make sure `~/.local/bin` is added to `PATH`.

## Usage
 
```bash
lyrics-finder "dream theatre" "another day"
```

# API

It takes two arguments, artist name and song name and returns the lyrics as a string if found, else it will return an empty string (if used in code). The CLI binary logs the lyrics on your console if found, else it will log 'Not Found!'.

# License

[MIT](./LICENSE)
