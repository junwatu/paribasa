'use strict'

const paribasan = require('../index.js')

describe('PARIBASAN TEST', () => {
    test('Random', ()=> {
        expect(paribasan.getRandomQuote().length).toBe(1)
    })
    
    test('Query', () => {
        paribasan.searchQuote('wani').then(r => {
            expect(r).toBeGreaterThan(0)
        })
    })
})
