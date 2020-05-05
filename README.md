# Lyrics-Finder

A lyrics api which actually works!

It scrapes the lyrics from google.

# In your code:

## Installation

```bash
npm install --save lyrics-finder
```

## Usage

```js
const lyricsFinder = require('lyrics-finder');
(async function(artist, title) {
    let lyrics = await lyricsFinder(artist, title) || "Not Found!";
    console.log(lyrics);
})("shakira", "chantaje");
```

# Command line usage:

## Using without installation

```bash
npx lyrics-finder "dream theatre" "another day"
```

> Note: Use this method only if you plan to use lyrics-finder for one time, installing lyrics-finder globally (see-below) is recommended for multiple time usages.

## Installation

```bash
npm install -g lyrics-finder
```

> Note: **DO NOT** use sudo to install global packages! The correct way to do it is to tell npm where to install it's global packages: `npm config set prefix ~/.local`. Make sure `~/.local/bin` is added to `PATH`.

## Usage after installation
 
```bash
lyrics-finder "dream theatre" "another day"
```

# API

It takes two arguments, artist name and song name and returns the lyrics as a string if found, else it will return an empty string (if used in code). The CLI binary logs the lyrics on your console if found, else it will log 'Not Found!'.

# License

[MIT](./LICENSE)
