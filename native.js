const http    = require('http');
const server  = new http.Server();

server.on('request', (req, res) => {
  res.statusCode = 200;
  res.end(JSON.stringify({msg: 'Hello Human!'}));
});

const init = async () => {
  await server.listen(3000);
  console.log('Node server listening on port 3000...');
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
