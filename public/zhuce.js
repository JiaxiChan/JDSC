$('input.check').click(function(){
    $(this).css('display','none')
    $('input.check_ma').css('display','block')
    $('label.check_ma_qian').css('display','block')
    $('label.check_ma_hou').css('display','block')
})
var a=0
var namee=''
$('label.check_ma_hou a').click(function(e){
    e.preventDefault();
    a=1;
    $('div.yanzheng').css('display','block')
})
var phone=document.querySelector('input.phone')
onclick=function(){
    if(phone==document.activeElement){
        $('div.shouji').css('display','block')
    }else{
        $('div.shouji').css('display','none')
    }
}
$('input.ss').click(function(e){
    e.preventDefault();
    if(!$('input.phone').val()){
        alert('请输入手机号码')
    }
    if(a==0){
        alert('好歹点一下手机验证和获得验证码嘛')
    }
    if(a==1&&$('input.phone').val()){
        a==2
        $('div.yanzheng').css('display','none')
        $('.dier').css('display','none')
        $('.disan').css('display','block')
        $('div.ott').css('background-position','0 -130px')
    }
})

$('form').submit(function (e) {
    e.preventDefault();
    namee=$('input.yhm').val();
    var password = $(':password').map(function () {
        return $(this).val();
    })
    // console.log(password);
    if (password[0] == password[1]) {
        // 密码一致，可以送请求
        // 获取表单中的内容
        var data = $(this).serialize();
        // console.log(data);
        // $.post 是ajax提供发生post请求的快捷方式
        // $.post(发送请求的路径,请求的数据,请求成功的时候回调的函数[ps：在这个函数中的参数是获取后台给前端的响应数据],后台发送的数据类型)
        $.post(this.action, data, function (data) {
            // console.log(data);
            // 成功之后，让模态框显示
            $('.modal-body').html(data.msg);
            if(data.code==2){
                  alert(namee + ' 恭喜您注册成功，点击确认进入商城')
                 location.href='主页.html'
            }
            if(data.code==1){
                alert('该用户已经被注册，请重新注册')
                 location.href='zhuce.html'
             
            }
           
        })
    }

})