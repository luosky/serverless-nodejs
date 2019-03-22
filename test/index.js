'use strict'
const should = require('chai').should()
const event = require('./fixtures/s3.json')


describe('index.js', function() {
    this.timeout(15000)

    const index = require('../src/index')

    describe('handler', function() {
        it('should return with OK', async () => {
            const response = await index.handler(event)
            console.log(`[TEST] response : ${JSON.stringify(response)}`)
            response.should.equal('OK')
        })
    })
})