
const express = require('express');
const fs = require('fs');
const formidable = require('formidable');
const path = require('path');
let app = express();
const db = require('./dbTools');

const https = require('https');

const options = {
  key: fs.readFileSync('./1530632509237.key'),
  cert: fs.readFileSync('./1530632509237.pem')
};


let server = https.createServer(options,app);


app.engine('.html',require('express-art-template'));

app.set('view options', {
    debug: process.env.NODE_ENV !== 'production',
});

// 配置默认渲染引擎
app.set('view engine','.html');

let router = express.Router();
router
.get('/list',(req,res,next) => {

  console.log(req.headers.cookie);



  // 获取到xxx.xxx,xxx.xxx;
  let location = req.headers.cookie.split('=');
  if(!location) return res.send('没有注册');
  location = location[1];
  let left = location.split(',')[1];
  let right = location.split(',')[0];


  console.log(left,right)


    // left/right
    db.nearMe('test',{left:parseFloat(left),right:parseFloat(right)},function(err,heros) {
          if(err) next(err);
         console.log(heros);
         res.render('list',{
          heros, // ES6属性简写，key和value是同名的
         });
    });

})
.get('/',(req,res,next)=>{
  res.render('index')
})
.post('/add',(req,res,next) => {
  // 解析文件,用包
   var form = new formidable.IncomingForm();
  
  // 修改上传目录
  form.uploadDir = path.join(__dirname,'public','imgs');
  // 保持原有后缀名
  form.keepExtensions = true;

   // 解析
    form.parse(req, function(err, fields, files) {
      // console.log(fields);  // fields.nickname
                            // files.avater.path
                            // path.parse(路径).base文件名
      // console.log(files);
      
      let nickname = fields.nickname;
      let filename = path.parse(files.avater.path).base;
      let location = fields.location; 
       // 39.9821890743,116.3584743323
       //  纬度          经度


      // 存储 img: 网络能请求道的路径    img/uploadxxx.js
      let img = 'imgs/' + filename;
      // heros.push({
      //   nickname,img
      // });
      // 


      // 接收用户输入的location
      let left = location.split(',')[1];
      let right = location.split(',')[0];


      // 保存数据
      db.insert('test',{ nickname,img,anystr:{type:"Point",coordinates:[parseFloat(left),parseFloat(right)]} },function(err,result) {
        if(err) return next(err);




          // 保存位置的cookie
          res.setHeader('set-cookie','location='+location);



        // 同步提交，浏览器等待页面显示
         res.redirect('/list');
      });




      
    });
})
// 最后一条路由中
.all('*',(req,res)=> {
  res.send('地址错误，您去首页吧');
});   




// 处理图片
app.use(express.static('./public'));
// /imgs/upload_5304f504b298af0f0330f9d0c77ea3c9.jpg

app.use(router); 


// 处理错误(参数位置错误优先) -> 优雅的用户体验
app.use((err,req,res,next) => {
  console.log(err);
  res.send('<h1>亲爱的用户，您访问的页面，有事儿了,<a href="/">去首页看看?</a></h1>');
});

// 这样要改
server.listen(8888,()=>{
  console.log('8888');
});