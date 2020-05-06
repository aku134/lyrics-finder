const {
  expect,
} = require('chai');
const shelljs = require('shelljs');
const fs = require('fs');
const lyricsFinder = require('../src/index.js');

describe('lyricsFinder()', () => {
  it('for "shakira", "chantaje" should be of length greater than zero', async () => {
    expect((await lyricsFinder('shakira', 'chantaje')).length > 0).to.be.true;
  });
  it('for "dream theatre", "another day" should return a value of type string', async () => {
    expect(typeof (await lyricsFinder('dream theatre', 'another day')) === 'string').to.be.true;
  });
  it('for "shakira", "chantaje" should return a value of type string', async () => {
    expect(typeof (await lyricsFinder('shakira', 'chantaje')) === 'string').to.be.true;
  });
  it('for "dream theatre", "another day" should be of length greater than zero', async () => {
    expect((await lyricsFinder('dream theatre', 'another day')).length > 0).to.be.true;
  });
});

describe('console.log()', () => {
  it('for "shakira", "chantaje" should not be equal to "Not Found!"', () => {
    shelljs.exec("./src/bin.js 'shakira' 'chantaje' > ./src/output.txt");
    expect(String(fs.readFileSync('./src/output.txt')).trim() !== 'Not Found!').to.be.true;
    shelljs.exec('rm ./src/output.txt');
  });
  it('for "dream theatre", "another day" should not be equal to "Not Found!"', () => {
    shelljs.exec("./src/bin.js 'dream theatre' 'another day' > ./src/output.txt");
    expect(String(fs.readFileSync('./src/output.txt')).trim() !== 'Not Found!').to.be.true;
    shelljs.exec('rm ./src/output.txt');
  });
});