var exp = require('express');
var bodyParser = require('body-parser');
var fs = require('fs')

var app = exp();

app.use(exp.static('public'));
app.use(bodyParser.urlencoded({
  extended:true, 
  // 数据大小限制
  limit: '10mb',
  // 参数长度限制
parameterLimit: 10000}));

app.use(exp.static(__dirname+"/public",{index:"login.html"}));


// 在这里制作JSON
// app.post('/menus',function(req,res){
//   // console.log(req)
//   fs.writeFileSync('JDMS.json',JSON.stringify(req.body));
// })

// app.get('/all',function(req,res){
//   var data=fs.readFileSync('menu.json');
//   console.log(data.toString());

// })

// 注册
app.post('/user/register',function(req,res){
  fs.exists('user',function(exi){
      if(exi){
          // 写入文件
          Witer();
      }else{
          fs.mkdir('user',function(err){
              if(err){
                  res.status(200).json({
                      code:0,
                      msg:'用户文件创建失败'
                  })
              }else{
                  // 写入文件
                  Witer();
              }
          })
      }
  })

  //封装一个写入的函数
  function Witer(){
       var filename=`user/${req.body.username}.txt`;
       fs.exists(filename,function(exi){
           if(exi){
              //  该用户已经被注册过
              res.status(200).json({
                  code:1,
                  msg:'该用户已经被注册，请重新注册'
              })
           }else{
               req.body.ip=req.ip;
               req.body.time=Date.now();
               fs.appendFile(filename,JSON.stringify(req.body),function(err){
                   if(!err){
                       res.status(200).json({
                           code:2,
                           msg:'注册成功'
                       })
                   }
               })
           }
       })
  }
})


// 登录
app.post('/user/login',function(req,res){
  console.log(req.body);
  // 根据用户名去查看该用户是否已经注册成功，有注册后，再根据用户名找到对应的文件，取出密码，进行对比，只有在这两步都成功的情况下，才登录成功
  var filename=`user/${req.body.username}.txt`;
  // 判断文件是否存在
  fs.exists(filename,function(exi){
      if(exi){
          // 用户是注册过的，才取密码进行对比
          fs.readFile(filename,function(err,data){
              if(!err){
                  // console.log(data);
                  var user=JSON.parse(data);
                  // console.log(user)
                  if(user.psw==req.body.psw){
                      // 将用户的信息存在cookie
                      var expires = new Date();
                      // cookie的保存时间为1个月
                      expires.setMonth(expires.getMonth()+1);
                      // {expires}=={expires:expires}
                      res.cookie('username',req.body.username,{expires});
                      res.status(200).json({
                          code:1,msg:'登录成功'
                      })
                  }else{
                       // 用户已经注册了，但是密码不正确
                       res.status(200).json({
                           code:2,
                           msg:'密码错误，请重新输入'
                       }) 
                  }

              }
          })
      }else{
          res.status(200).json({
              code:0,
              msg:'您还未注册，请先注册'
          })
      }
  })
})


// ---------------返回前端-------------
app.get('/user/out',function(req,res){
  var myJD=fs.readFileSync('myJD.json','utf-8');
  res.json(myJD)
})

app.get('/nav/left',function(req,res){
  var nav_left=fs.readFileSync('menuss.json','utf-8');
  res.json(nav_left)
})

app.get('/JDMS',function(req,res){
  var JDMS=fs.readFileSync('JDMS.json','utf-8');
  res.json(JDMS)
})

//排行榜
app.get('/phb',function(req,res){
  var PHB=fs.readFileSync('paihang.json','utf-8');
  res.json(PHB)
})

// 领券
app.get('/quan',function(req,res){
  var quan=fs.readFileSync('quan.json','utf-8');
  res.json(quan)
})
//直播
app.get('/zhibo',function(req,res){
  var zhibo=fs.readFileSync('live.json','utf-8');
  res.json(zhibo)
})
//寻宝
app.get('/xunbao',function(req,res){
  var xunbao=fs.readFileSync('bigmsg.json','utf-8');
  res.json(xunbao)
})

//特色推荐
app.get('/tuijian',function(req,res){
  var tuijian=fs.readFileSync('spa.json','utf-8');
  res.json(tuijian)
})
//底部
app.get('/foot',function(req,res){
  var foot=fs.readFileSync('footer.json','utf-8');
  res.json(foot)
})

app.listen(3000,function(){
    console.log('running....');
})