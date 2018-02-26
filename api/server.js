const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const PixivAPI = require('../build/PixivAPI');

const App = new Koa();
const router = new Router();
const Pixiv = new PixivAPI();

// 测试是否正常
router.get('/api/test', async (ctx, next) => {
  console.log('-----test----');
  console.log(ctx.query);
  const { response } = ctx;
  response.lastModified = new Date();
  response.type = 'application/json';
  const readFile = () => {
    return fs.readFileSync('./package.json', { encoding: 'utf-8' });
  };
  const body = await readFile();
  response.body = JSON.parse(body);
});

// 模拟登录
router.get('/api/login', async (ctx, next) => {
  console.log('-----login----');
  console.log(ctx.query);
  const { response, request } = ctx;
  let query = { ...ctx.query };
  if (Object.keys(query).length === 0) {
    ctx.body = {
      code: 101,
      msg: 'please enter your userName or password.'
    }
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
        // text/html; charset=UTF-8
        response.type = 'application/json';
        response['Content-Encoding'] = 'gzip';
        response.body = {
          code: 0,
          msg: '登陆成功！'
        }
      }
    );
  } catch (err) {
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = {
      code: 400,
      msg: err.message
    };
  }
});

// get每日图片de🌟ze
router.get('/api/rank/:mode', async (ctx, next) => {
  console.log('----ranking select----');
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
      code: 400,
      msg: err.message
    };
  }
});

router.get('/api/*', async (ctx) => {
  console.log('-----empty----');
  const {request, response} = ctx;
  if ((request.method === 'GET' || request.method === 'HEAD') && request.accepts('html')) {
    ctx.type = 'application/json';
    ctx.body = {
      code: 404,
      msg: 'not found api'
    };
  }
});



// 页面处理
router.get('/*', async (ctx) => {
  const { response } = ctx;
  response.type = 'text/html';
  response.body = fs.createReadStream(path.resolve(__dirname, '../Vuew/index.html'));
});

// 静态资源
App.use(serve(path.resolve(__dirname, '../Vuew')));
// 路由系统
App.use(router.routes());

App.listen(3001);

// 模拟登录
if (process.argv.length > 2) {
  console.log(process.argv[2], process.argv[3]);
  Pixiv.login(process.argv[2], process.argv[3]);
}