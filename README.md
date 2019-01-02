# 用heroku搭建简单服务器    
- 预览网页:https://mighty-citadel-35278.herokuapp.com/
heroku nodejs 教程:https://devcenter.heroku.com/articles/getting-started-with-nodejs

1. 需要插件即版本见package.json,并且node版本号需大于8
2. 首先注册一个heroku号,并安装heroku cli 
3. 在工作目录依次执行,下载完后删除隐藏的.git
```
git clone https://github.com/heroku/node-js-getting-started.git
cd node-js-getting-started
```
4. 在该目录下新建index.html,并修改index.js的代码为:
```
const express = require('express')  
const path = require('path')  
const PORT = process.env.PORT || 5000
express()
  .use(express.static('public'))   //当访问到public文件夹的文件时,将自动映射文件夹内对应文件
  //比如我想访问/public/css/default.css,直接用href="./css/default.css"
  .get('/', (req, res) => res.sendfile(path.join(__dirname,'./index.html')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
```
5. 修改package.json,在script里添加"heroku": "NODE_ENV=production node index"
6. 在工作目录新建一个Procfile文件(有则仅修改内容)并写入`web: npm run heroku`.
5. 在工作目录中依次:
- `heroku login          //登录,会弹出网页点击登录`
- `heroku create        //创建heroku `
- `git push heroku master    //这里是git push到了heroku空间上了,并且会生成一个域名`
- `heroku open     //成功后,可使用heroku open打开该域名`

6. 此时虽然代码已经部署到heroku,但是heroku上不方便查看代码,所以还需部署到github,在github新建一个空repo,并按提示创建并push即可.
