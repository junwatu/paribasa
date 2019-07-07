'use strict'

const paribasan = require('../index.js')

describe('PARIBASAN TEST', () => {
    test('Random', ()=> {
        expect(paribasan.get_api().length).toBe(1)
    })
    
    test('Query', () => {
        paribasan.search_api('wani').then(r => {
            expect(r).toBeGreaterThan(0)
        })
    })
})
