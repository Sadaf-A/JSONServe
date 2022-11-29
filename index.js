const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const pathName = req.url
    if(pathName==='/api') {
        fs.readFile(`${__dirname}/data.json`, 'utf-8', (err, data) => {
            const productData = JSON.parse(data)
            res.writeHead(200, {'Content-type':'application/json'})
            res.end(data)
        })
    }
    else if(pathName==='/') {
        res.end('this is the overview')
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log("Server is listening on port 8000")
})