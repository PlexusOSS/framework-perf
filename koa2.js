const Koa = require('koa2');
const app = new Koa();

app.use(ctx => {
  ctx.body = {msg: 'Hello Human!'};
});

const init = async () => {
  await app.listen(3000);
  console.log('Koa server lsitening on port 3000...');
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
