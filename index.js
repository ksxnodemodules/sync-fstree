'use strict'
const {join} = require('path')
const {lstatSync, readdirSync} = require('fs')

function * tree (origin = '') {
  const stats = lstatSync(origin)
  if (stats.isDirectory()) {
    yield * readdirSync(origin)
      .map(child => join(origin, child))
      .map(tree)
      .map(gen => Array.from(gen))
      .reduce((prev, current) => [...prev, ...current], [])
  } else {
    yield origin
  }
}

module.exports = x => Array.from(tree(x))
