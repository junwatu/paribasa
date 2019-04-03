/**__JS__ 
 * Paribasa - Javanese Wisdom and Quote
 * (c) 2015-2019
 */

'use strict'
const info = require('./package.json')
const paribasan_jawa = require('./dat/paribasa_jawa.json')
const index = require('flexsearch').create({
    tokenize: 'forward',
    encode: 'icase',
    async: false,
    worker: false,
    doc: {
        id: '_id',
        field: ['data:paribasa', 'data:jawa']
    }
})

function Paribasan() { }

Paribasan.init = () => {
    let paribasan_jawa_array = Paribasan._toArray(paribasan_jawa)
    paribasan_jawa_array.forEach((el) => {
        index.add(el)
    })
}

Paribasan.prototype.search = (q) => {
    Paribasan.init()
    console.log(`Paribasa ${info.version}`)
    console.log('')
    index.search(q, 100, (result) => {
        console.log(`Hasile: [${result.length}]`)
        result.map((val, idx) => {
            console.log(`${idx+1}. ${val.paribasa} - ${val.jawa}`)
        })
    })
}

Paribasan.prototype.get = () => {
  let paribasan_array = Paribasan._toArray(paribasan_jawa)
  let moratmarit = paribasan_jawa[Math.floor(Math.random() * paribasan_array.length)]
  return moratmarit
}

Paribasan._toArray = (paribasan_object) => {
    let x = 0
    return Object.keys(paribasan_object).map((k) => {
      paribasan_object[k]._id = x++
      return paribasan_object[k]
  })
}

module.exports = new Paribasan()
