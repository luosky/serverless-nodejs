'use strict'
const config = require('../config.js')()
const parse = require('aws-event-parser').parse
const debug = process.env.DEBUG || true

const handler =  async (event) => {
    if (debug) {
        console.debug('[DEBUG] Received event:', JSON.stringify(event, null, 2))
    }

    if (event === undefined || event.Records === undefined) {
        // const e = new Error(`[ERROR] can't find payload : ${JSON.stringify(event, null, 2)}`)
        const e = new Error("[ERROR] can't find payload : undefined")
        console.error(e)
        throw e
    }

    if (event.Records.length !== 1) {
        const e = new Error(`[ERROR] batch size more than 1 : ${JSON.stringify(event, null, 2)}`)
        console.error(e)
        throw e
    }

    let payload = parse(event)
    if (payload === null) {
        const e = new Error(`[ERROR] can't find payload : ${JSON.stringify(event, null, 2)}`)
        console.error(e)
        throw e
    }

    return "OK"
}
module.exports= handler
