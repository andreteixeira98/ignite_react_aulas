const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const jsonServer= require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.resolve('src','services','jsonserver','db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = process.env.REACT_APP_SERVER_PORT ?? 6000;

server.listen(port,()=>{
    console.log(`json server is running on port ${port}`);
})
module.exports ={
    server
}
