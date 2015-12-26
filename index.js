var jsonServer = require('json-server');

var server = jsonServer.create();
server.use(jsonServer.defaults());

var router = jsonServer.router('./public/db.json');
server.use(router);

server.listen(3000);