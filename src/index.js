'use strict'
const config = require('../config.js')()
const debug = process.env.DEBUG || true
const Response = require('./AWS/ApiGatewayResponse')

const index =  async (event) => {
    if (debug) {
        console.debug('[DEBUG] Received event:', JSON.stringify(event, null, 2))
    }

    if (event === undefined) {
        const e = new Error(`[ERROR] can't find payload : ${JSON.stringify(event, null, 2)}`)
        return new Response(502, e)
    }

    // const payload = event.queryStringParameters
    const payload = event.pathParameters

    if (payload === undefined) {
        const e = new Error(`[ERROR] can't find payload : ${JSON.stringify(event, null, 2)}`)
        return new Response(502, e)
    }

    return new Response(200, "OK")
}

module.exports= index
