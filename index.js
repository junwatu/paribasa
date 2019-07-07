/**
 * 
Paribasa - Javanese Wisdom and Quote
 
MIT License

Copyright 2015-2019 @junwatu

Permission is hereby granted, free of charge, to any person obtaining a copy of this 
software and associated documentation files (the "Software"), to deal in the Software 
without restriction, including without limitation the rights to use, copy, modify, 
merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies 
or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE 
FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR 
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
DEALINGS IN THE SOFTWARE.


#######################################################################################
Intie sakarepmu tapi elokno lisensi ndek nduwur iku.
#######################################################################################

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
const gradient = require('gradient-string')

function Paribasan() {

}

Paribasan.init = () => {
    let paribasan_jawa_array = Paribasan._toArray(paribasan_jawa)
    paribasan_jawa_array.forEach((el) => {
        index.add(el)
    })
}

Paribasan.prototype.search_api = async (q) => {
    Paribasan.init()
    let search_res = new Promise((resolve, reject) => {
        index.search(q, 100, (q_result) => {
            q_result ? resolve(q_result) : reject(new Error("Error"))
        })
    })

    let result = await search_res
    return result
}

Paribasan.prototype.get = () => {
    let paribasan_array = Paribasan._toArray(paribasan_jawa)
    let moratmarit = paribasan_jawa[Math.floor(Math.random() * paribasan_array.length)]
    return moratmarit
}

Paribasan.prototype.get_api = () => {
    const _arr = []
    _arr.push(Paribasan.prototype.get())
    return _arr
}

Paribasan._toArray = (paribasan_object) => {
    let x = 0
    return Object.keys(paribasan_object).map((k) => {
        paribasan_object[k]._id = x++
        return paribasan_object[k]
    })
}

Paribasan.prototype.search = (q, cf) => {
    console.log(`Paribasa ${info.version}`)
    Paribasan.prototype.search_api(q).then(result => {
        console.log(`Hasile: [${result.length}]`)
        result.map((val, idx) => {
            if (!cf) {
                console.log(`${idx + 1}. ${val.paribasa} - ${val.jawa}`)
            } else {
                console.log(`${idx + 1}. ${gradient.summer(val.paribasa)} - ${gradient.vice(val.jawa)}`)
            }
        })
    })
}

module.exports = new Paribasan()
