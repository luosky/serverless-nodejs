'use strict'
const config = require('../config.js')()
const parse = require('aws-event-parser').parse
const debug = process.env.DEBUG || true
console.log(config.tableName)
const handler =  async (event) => {
    if (debug) {
        console.debug('[DEBUG] Received event:', JSON.stringify(event, null, 2))
    }

    // let payload = event.Records[0].body
    if (event.Records && event.Records.length !== 1) {
        console.error(`[ERROR] batch size more than 1 : ${JSON.stringify(event, null, 2)}`)
        return
    }

    let payload = parse(event)
    console.log(`[INFO] payload : ${ JSON.stringify(payload)}`)

    if (payload === null) {
        console.error(`[ERROR] can't find payload : ${JSON.stringify(event, null, 2)}`)
        return
    }
    return "OK"
    /*
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless v1.0! Your function executed successfully!',
            input: event,
        }),
    }
    */
}
module.exports.handler= handler
