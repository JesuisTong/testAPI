const fs = require('fs');
const Koa = require('koa');
const Router = require('koa-router');
const PixivAPI = require('./build/PixivAPI');

const App = new Koa();
const router = new Router();
const Pixiv = new PixivAPI();


// 你哈哈测试
router.get('/test', async (ctx, next) => {
  console.log('-----test----');
  console.log(ctx._matchedRoute);
  console.log(ctx.query);
  const { response } = ctx;
  response.lastModified = new Date();
  response.type = 'application/json';
  const readFile = () => {
    return fs.readFileSync('./package.json', { encoding: 'utf-8' });
  };
  const body = await readFile();
  response.body = JSON.parse(body);
})

// 模拟登录
router.get('/login', async (ctx, next) => {
  console.log('-----login----');
  console.log(ctx.query);
  const { response, request } = ctx;
  let query = { ...ctx.query };
  if (Object.keys(query).length === 0) {
    throw new Error('please enter your userName or password.');
  }
  try {
    await Pixiv.login(
      decodeURIComponent(query.userName),
      decodeURIComponent(query.pwd),
      '',
      (res) => {
        if (res.has_error) {
          throw new Error(res);
        }
        console.log(res);
        response.type = 'application/json';
        // text/html; charset=UTF-8
        response.body = {
          code: 0,
          msg: '登陆成功！'
        }
      }
    );
  } catch (err) {
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = {
      code: '401',
      msg: err.message
    };
  }
});

// get图片de🌟ze
router.get('/rank/:mode', async (ctx, next) => {
  console.log('----ranking select----');
  console.log(ctx._matchedRoute);
  console.log(ctx.query);
  const { response, request } = ctx;
  let query = { ...ctx.query };
  if (Object.keys(query).length === 0) {
    query = { page: 1, date: null };
  }
  query = { mode: ctx.params.mode, ...query };
  try {
    await Pixiv.illustRanking(query, (res) => {
      response.type = 'application/json';      
      response.body = res;
    });
  } catch (err) {
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = {
      code: 'error',
      msg: err.message
    };
  }
});

App.use(router.routes());

App.listen(3001);
