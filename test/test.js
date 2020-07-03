const {
  expect,
} = require('chai');
const shelljs = require('shelljs');
const fs = require('fs');
const lyricsFinder = require('../src/index.js');

describe('lyricsFinder()', function () {
  this.timeout(0);
  it('for "shakira", "chantaje" should be of length greater than zero', async () => {
    expect((await lyricsFinder('shakira', 'chantaje')).length > 0).to.be.true;
  });
});
describe('console.log()', function () {
  this.timeout(0);
  it('for "dream theatre", "another day" should not be equal to "Not Found!"', () => {
    shelljs.exec("./src/bin.js 'dream theatre' 'another day' > ./src/output.txt");
    expect(String(fs.readFileSync('./src/output.txt')).trim() !== 'Not Found!').to.be.true;
    fs.unlinkSync('./src/output.txt');
  });
});
