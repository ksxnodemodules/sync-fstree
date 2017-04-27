'use strict'
const {resolve} = require('path')
const {setStrictEqual} = require('./lib/assert.js')
const tree = require('../index.js')
const expectation = require('fs')
  .readFileSync(resolve(__dirname, 'tree.txt'))
  .toString('utf8')
  .split(/[\r\n]/)
  .filter(Boolean)

require('process').chdir(__dirname)
setStrictEqual(tree('test'), expectation, 'Relative path test failed.')

setStrictEqual(
  tree(resolve(__dirname, 'test')),
  expectation.map(path => resolve(__dirname, path)),
  'Absolute path test failed.'
)
