'use strict';

const Hapi    = require('hapi');
const server  = new Hapi.server({
  host: 'localhost',
  port: 3000
});

server.route({
  method: 'GET',
  path: '/',
  config: {
    handler: (request, h) => {
      return h.response({
        msg: 'Hello Human!'
      }).code(200);
    }
  }
});

const init = async () => {
  await server.start();
  console.log('Hapi server listening on port 3000...');
}

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
