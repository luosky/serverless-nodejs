'use strict'
const should = require('chai').should()
// const event = require('./fixtures/sns.json')
const event = require('./fixtures/s3.json')
describe('handler.js', function() {
    this.timeout(15000)

    const handler = require('../src/handler')

    describe('handler', function() {
        it('should return with OK', async () => {
            const response = await handler(event)
            console.log(`[TEST] response : ${JSON.stringify(response)}`)
            response.should.equal('OK')
        })

        // it('should throw error', async () => {
            // should(await handler()).throw()
            // should.throw(await handler())
        // })
    })
})