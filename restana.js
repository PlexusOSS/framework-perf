const service = require('restana')();

service.get('/', (req, res) => {
  res.status(200).send({
    msg: 'Hello Human!'
  });
});

service.start(3000).then(() => {
  console.log('Server listening on port 3000...')
});
