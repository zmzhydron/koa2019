const fs = require("fs");
const koaMulter = require('koa-multer');
const Path = require("path");
const upload = koaMulter({
  dest: Path.join(__dirname, "../uploaded")
})
module.exports = (o) => {
  console.log(__dirname);
  return [
    upload.single("hehe"),
    async o => {
      console.log(o.req.file, '``````````````````````');
      // 重命名文件;
      let { originalname, destination, path } = o.req.file;
      let r = fs.renameSync(path, destination + "\\" + originalname);
      o.body = 'shit la';
    }
  ]
}