const config = require('../config.js')()
const md5 = (text) => require('crypto').createHash('md5').update(text).digest('hex')
class TaskExecutor {
    // constructor(api) {
    //     this.api = api
    // }

    async execute(param) {
    }

}

module.exports = TaskExecutor
