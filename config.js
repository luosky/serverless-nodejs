//TODO: 等 aws中国区 支持环境变量后通过环境变量传入这些信息
const config = () => {
    return {
        tableName: "template",
        bucketName: "template"
    }
}
module.exports = config