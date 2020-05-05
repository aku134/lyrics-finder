#!/usr/bin/env node

const lyricsFinder = require('./index.js');

const [, , ...args] = process.argv;

async function main(e, s) {
  const o = await lyricsFinder(e, s) || 'Not Found!';
  console.log(o);
}

if (args.length > 2) {
  console.log('Excessive arguments provided!');
  console.log(`Needs 2 arguments but was provided with ${args.length}!`);
} else if (args.length < 2) {
  console.log('Insufficient arguments provided!');
  console.log(`Needs 2 arguments but was provided with ${args.length}!`);
} else {
  main(args[0], args[1]);
}
