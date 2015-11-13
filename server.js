var jsonServer = require('json-server')

// Returns an Express server
var server = jsonServer.create()

// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults())

// Returns an Express router
var router = jsonServer.router('db.json')
server.use(router)

server.listen(3000 || process.env.PORT)
