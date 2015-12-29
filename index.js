'use strict'

var paribasan_jawa = require('./paribasan.json')

function Paribasan () {}

Paribasan.prototype.get = function () {
  var paribasan_array = Object.keys(paribasan_jawa).map(function (k) {
    return paribasan_jawa[k]
  })
  var moratmarit = paribasan_jawa[Math.floor(Math.random() * paribasan_array.length)]
  return '"' + moratmarit.paribasan.trim() + '" - ' + moratmarit.bahasa
}

module.exports = new Paribasan()
