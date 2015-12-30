'use strict'

const os = require('os')
const path = require('path')
const tmp = os.tmpdir()
const si = require('search-index')({indexPath: path.join(tmp, 'paribasa_index')})

let paribasan_jawa = require('./paribasa.json')

function Paribasan () {
  // lapo iki?
}

Paribasan.prototype.indexing = () => {
  let paribasan_jawa_array = Paribasan._toArray(paribasan_jawa)
  return new Promise((resolve, reject) => {
    si.add(paribasan_jawa_array, (err) => {
      err ? reject(err) : resolve(true)
    })
  })
}

Paribasan.prototype.search = (q) => {
  let kata = {}
  kata.query = {'*': [q]}
  return new Promise((resolve, reject) => {
    si.search(kata, (err, searchResult) => {
      let hits = searchResult.hits
      let search_array = []
      hits.map((val) => {
        search_array.push(`${val.document.paribasa} - ${val.document.bahasa}`)
      })
      err ? reject(err) : resolve(search_array)
    })
  })
}

Paribasan.prototype.get = function () {
  let paribasan_array = Paribasan._toArray(paribasan_jawa)
  let moratmarit = paribasan_jawa[Math.floor(Math.random() * paribasan_array.length)]
  return `"${moratmarit.paribasa.trim()}" - ${moratmarit.bahasa}`
}

Paribasan._toArray = (paribasan_object) => {
  return Object.keys(paribasan_object).map((k) => {
    return paribasan_object[k]
  })
}

module.exports = new Paribasan()
