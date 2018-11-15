const express = require('express');
const app     = express();

app.get('/', (req, res) => {
  res.status(200).send({
    msg: 'Hello Human!'
  });
});

app.listen(3000, () => {
  console.log('Express server listening on port 3000...');
});
