const KOA = require("koa2");
const fs = require("fs");
const Path = require("path");
const koaStatic = require('koa-static');
const koaRouter = require("koa-router")();

const app = new KOA();
app.use(koaStatic(Path.resolve(__dirname, './')));
// app.use(koaRouter.routes()).use(koaRouter.allowedMethods());
app.use(koaRouter.routes())
app.context.myname = 'zmz';
koaRouter.get("/api/fuckyou", async (o, next) => {
  o.shitloadofmoney = [];
  o.myage = 31;
  await next();
  o.shitloadofmoney.push(11);
  o.shitloadofmoney.push(o.myname);
  o.shitloadofmoney.push(o.myage);
  o.body = o.shitloadofmoney;
  // o.body = o.state.nigger;
})
app.use(async (o, next) => {
  console.log(o.shitloadofmoney, '$$$$$$$$$$$$$$');
  if(!o.shitloadofmoney){
    o.shitloadofmoney = [];
  }
  o.shitloadofmoney.push(1);
  await next();
  o.shitloadofmoney.push(10);
})
app.use(async (o, next) => {
  o.shitloadofmoney.push(2);
  await next();
  o.shitloadofmoney.push(9);
  o.state.nigger = 'fyuck you nigger!!';
})
app.use(async (o, next) => {
  o.shitloadofmoney.push(3);
  await next();
  o.shitloadofmoney.push(8);
})
app.use(async (o, next) => {
  o.shitloadofmoney.push(4);
  // await next();
  // throw new Error("Eeeeeeeeeee");
  o.shitloadofmoney.push(7);
})
app.use(async (o, next) => {
  o.shitloadofmoney.push(5);
  await next();
  o.shitloadofmoney.push(6);
})
app.listen("9991", () => {
  console.log("koa2 start @@@@ 9991");
});
app.on('error', (err, o) => {
  console.log(o);
  o.body = err;
});

