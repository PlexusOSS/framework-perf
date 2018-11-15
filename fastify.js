const fastify = require('fastify');
const app = fastify();

app.get('/', (request, reply) => {
  reply
  .status(200)
  .header('Content-Type', 'application/json; charset=utf-8')
  .send({msg: 'Hello Human!'});
});

app.listen(3000, 'localhost', () => {
  console.log('Fastify server listening on port 3000...');
});
