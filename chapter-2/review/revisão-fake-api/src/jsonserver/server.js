// server.js
const path = require('path');
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.resolve('src','jsonserver','db.json'));
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(4000, () => {
  console.log('JSON Server is running')
})