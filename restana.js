const service = require('restana')();

service.get('/', (req, res) => {
  res.send({
    msg: 'Hello Human!'
  }, 200);
});

service.start(3000).then(() => {
  console.log('Restana server listening on port 3000...')
});
