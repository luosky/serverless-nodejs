class ApiGatewayResponse {
    constructor(statusCode, payloadOrError) {
        this.statusCode = statusCode

        let body = {}
        if (statusCode < 400) {
            body.code = 0
            body.data = payloadOrError
            console.info(`[Info] api gateway response : ${JSON.stringify(body)}`)
        } else {
            body.code = payloadOrError.code || 0
            body.err = payloadOrError.message
            console.error(`[ERROR] api gateway response error : ${JSON.stringify(body)}`)
        }

        this.body = JSON.stringify(body)
    }
}

module.exports = ApiGatewayResponse