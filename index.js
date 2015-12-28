'use strict'

var paribasan_jawa = require('./paribasan.json')

module.exports = {
  get: function () {
    var moratmarit = paribasan_jawa[Math.floor(Math.random() * paribasan_jawa.length)]
    return '"' + moratmarit.paribasan.trim() + '" - ' + moratmarit.bahasa
  }
}
