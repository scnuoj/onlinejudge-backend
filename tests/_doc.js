const doc = require('test2doc')

module.exports = doc.title('OnlineJudge API 文档')
                    .desc(`OnlineJudge API 文档`)
                    .scheme('http')
                    .host('localhost:8000')
                    .basePath('/api')

after(function () {
  doc.emit('api-documents.md')
})

const glob = require('glob')
const path = require('path')

glob.sync('./tests/routes/*.js')
    .forEach(file => require(path.resolve(file)))
