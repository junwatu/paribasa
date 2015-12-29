'use strict'

var paribasan_jawa = require('./paribasa.json')
var si = require('search-index')()

function Paribasan () {
  // lapo iki?
}

Paribasan.prototype.indexing = function (callback) {
  var paribasan_jawa_array = Paribasan._toArray(paribasan_jawa)
  si.add(paribasan_jawa_array, function (err) {
    err ? callback(err) : callback(null, true)
  })
}

Paribasan.prototype.search = function (q, callback) {
  var kata = {}
  kata.query = {'*': [q]}
  si.search(kata, function (err, searchResult) {
    if (!err) {
      callback(null, searchResult)
    } else {
      callback(err)
    }
  })
}

Paribasan.prototype.get = function () {
  var paribasan_array = Paribasan._toArray(paribasan_jawa)
  var moratmarit = paribasan_jawa[Math.floor(Math.random() * paribasan_array.length)]
  return '"' + moratmarit.paribasa.trim() + '" - ' + moratmarit.bahasa
}

Paribasan._toArray = function (paribasan_object) {
  return Object.keys(paribasan_object).map(function (k) {
    return paribasan_object[k]
  })
}

module.exports = new Paribasan()
