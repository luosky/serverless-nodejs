'use strict'
const should = require('chai').should()
const event = require('./fixtures/apigateway.json')


describe('index.js', function() {
    this.timeout(15000)

    const index = require('../src/index')

    describe('index', function() {
        it('should return with 200', async () => {
            const response = await index(event)
            console.log(`[TEST] response : ${JSON.stringify(response)}`)
            response.statusCode.should.equal(200)
        })

        it('should return with 502 when no payload', async () => {
            const response = await index()
            console.log(`[TEST] response : ${JSON.stringify(response)}`)
            response.statusCode.should.equal(502)
        })
    })
})