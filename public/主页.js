
var city = '';

//广告消失
$('b.toptop').click(function (e) {
    e.preventDefault();
    $('div.toptop').css('display', 'none')
})

// 城市选项
$('ul.nav_left>li').hover(function (e) {
    $(this).css("background-color", "#fff")
    $('div.nav_left_down').css('display', 'block')
}, function () {
    $(this).css("background-color", "#e3e4e5")
    $('div.nav_left_down').css('display', 'none')
})


$('div.nav_left_down div.top a').each(function () {
    var text = $('ul.nav_left>li').text();
    city = text.substr(0, 2);
    if ($(this).text() == city) {
        $(this).css({
            "color": "#fff",
            "background-color": "#e33333"
        })
    }
})

$('div.nav_left_down div.top a').hover(function () {
    if ($(this).text() != city) {
        $(this).css({
            "color": "#e33333",
            "background-color": "#f4f4f4"
        })
    }

}, function () {
    if ($(this).text() != city) {
        $(this).css({
            "color": "#666",
            "background-color": "#fff"
        })
    }
})

$('div.nav_left_down div.down a').hover(function () {
    $(this).css({
        "color": "#e33333",
    })
}, function () {
    $(this).css({
        "color": "#666",
    })
})

//接收导航栏数据
$.get('/user/out', function (data) {
    var MYJD = JSON.parse(data).data
    // console.log(MYJD)

    // 我的京东
    for (var i = 0; i < 10; i++) {
        $('div.wdjd').append(`<div class='a'><a href="">${MYJD[0][i]}</a></div>`)
        if (i == 5) {
            $('div.wdjd').append(`<div class='line'></div><div class='b' style="width:265px; height:18px;float:left;"></div>`)
        }
    }
    //客户服务
    for (var i = 10; i < 24; i++) {
        if (i == 10) {
            $('div.khfw').append(`<p>客户<p>`)
        }
        $('div.khfw').append(`<div class='a'><a href="">${MYJD[0][i]}</a></div>`)
        if (i == 17) {
            $('div.khfw').append(`
        <div class='b' style="width:155px; height:30px;float:left;"></div>
        <div class="line"><p style="margin-left:18px;">商户<p></class>`)
        }
    }

    //网站导航
    for (var i = 24; i < 44; i++) {

        $('div.wzdh_1').append(`<div class='a'><a href="">${MYJD[0][i]}</a></div>`)

    }
    for (var i = 44; i < 59; i++) {

        $('div.wzdh_2').append(`<div class='a'><a href="">${MYJD[0][i]}</a></div>`)

    }
    for (var i = 59; i < 73; i++) {
        $('div.wzdh_3').append(`<div class='a'><a href="">${MYJD[0][i]}</a></div>`)
    }
    for (var i = 73; i < 85; i++) {
        $('div.wzdh_4').append(`<div class='a'><a href="">${MYJD[0][i]}</a></div>`)
    }
})
// 让他们显示出来
$('div.nav_right>div>ul').hover(function () {
    // console.log($(this).children('div'))
    $(this).children('div').css('display', 'block')
}, function () {
    $(this).children('div').css('display', 'none')
})

// 搜索栏附近
$('div#gwc').hover(function () {
    // console.log($(this))
    $(this).children('div').css('display', 'block')
    $(this).css('border-bottom', 'none')
}, function () {
    $(this).children('div').css('display', 'none')
    $(this).css('border-bottom', '1px solid #e3e4e5')
})

// 轮播加大大大侧边导航
//左边导航栏
$.get('/nav/left', function (data) {
    var navl = JSON.parse(data);
    // console.log(navl)
    for (i = 0; i < navl.length; i++) {
        // $('div.leftnav>ul>li').eq(i)
        var left_c = navl[i].left_C
        for (q = 0; q < left_c.length; q++) {
            if (q == 0) {
                $('div.leftnav>ul>li').eq(i).html(`<a href="">${left_c[q]}</a>`)
            }
            else {
                $('div.leftnav>ul>li').eq(i).html($('div.leftnav>ul>li').eq(i).html() + `/<a href="">${left_c[q]}</a>`)
            }
        }
        // var index=i;
        // $('div.leftnav>ul>li').eq(index).hover(function(){
        //     $('div.divdown_right').text(index)
        // },function(){

        // })
    }

    // 导航栏右边部分
    for (i = 0; i < navl.length; i++) {
        $('div.leftnav>ul>li').eq(i).hover(function () {
            //  console.log($(this).text());

            //  抓序号

            var index = $('div.leftnav>ul>li').index(this)
            var tagg = navl[index].tag;
            var conten = navl[index].content;
            var text = '';
            var text1 = '';
            var text2 = '';
            var text4 = '';
            $('div.rightnav').css('display', 'block')
            for (q = 0; q < tagg.length; q++) {
                text += `<a href="">${tagg[q]}</a>`;
                $('div.rightnav div.div1').html(text)
                // console.log($(tagg))
            }

            //右边部分
            var adex = i;
            //  console.log(conten[adex])
            for (w = 0; w < conten.length; w++) {

                for (q = 0; q < conten[w].box.length; q++) {
                    // text2+=`<div class="divdown_right">${conten[w].box[q]}</div>`;
                    text2 += `<a href="">${conten[w].box[q]}</a>`;
                }
                text1 = `<div class="divdown_left"><a href="">${conten[w].title} ></a></div>`;
                text2 = `<div class="divdown_right">${text1}${text2}</div>`
                var text3 = `<div>${text2}<div>`;

                text4 = text4 + text3;
                text3 = ''
                $('div.divdown').html(text4);
                //添加完重置
                text1 = '';
                text2 = '';
            }
            //每次移动重置
            text4 = '';

            //右边图片部分
            var ismall = navl[index].small;
            var ibig = navl[index].big;
            var text5 = '';
            var text6 = '';
            if (index != 4) {
                for (w = 0; w < ismall.length; w++) {
                    text5 += `<a href=""><img src="https:${ismall[w]}" ></a>`;
                }
            }
            for (w = 0; w < ibig.length; w++) {
                text6 += `<a href=""><img src="https:${ibig[w]}" ></a>`;
            }
            $('div.rit_top').html(text5);
            $('div.rit_down').html(text6);
        }, function () {
            $('div.rightnav').css('display', 'none')
        })
    }
    $('div.rightnav').hover(function () {
        $('div.rightnav').css('display', 'block')
    }, function () {
        $('div.rightnav').css('display', 'none')
    })


})// 到这里获取后端信息结束



//轮播部分
var turn = 0;
$('div.lb_button span').hover(function () {
    // $('div.lb_button span').css({
    //     'width': '14px',
    // 'height': '14px',
    // 'margin': '0',
    // 'background-color': '#fff',
    // 'opacity': '1',
    // 'border': '3px solid rgba(136, 136, 136, 0.938)'
    // })
    var index = $('div.lb_button span').index(this)
    for (i = 0; i < 8; i++) {
        $('div.lb a').eq(i).css('display', 'none')
        $('div.lb_button span').eq(i).removeClass("lb_hover")
    }
    $('div.lb a').eq(index).fadeIn(600)
    turn = index;
    $(this).addClass("lb_hover")
}, function () {
    // $(this).removeClass("lb_hover")
})
// 左右
$('a.lb_left').click(function (e) {
    e.preventDefault();
    turn = turn - 1;
    if (turn == -1) {
        turn = 7;
    }
    for (i = 0; i < 8; i++) {
        $('div.lb a').eq(i).css('display', 'none')
        $('div.lb_button span').eq(i).removeClass("lb_hover")
    }
    $('div.lb a').eq(turn).fadeIn(600)
    $('div.lb_button span').eq(turn).addClass("lb_hover")
})

$('a.lb_right').click(function (e) {
    e.preventDefault();
    turn = turn + 1;
    if (turn == 8) {
        turn = 0;
    }
    for (i = 0; i < 8; i++) {
        $('div.lb a').eq(i).css('display', 'none')
        $('div.lb_button span').eq(i).removeClass("lb_hover")
    }
    $('div.lb a').eq(turn).fadeIn(600)
    $('div.lb_button span').eq(turn).addClass("lb_hover")
})

// 自动轮播
function suib() {
    turn = turn + 1;
    if (turn == 8) {
        turn = 0;
    }
    //图片动
    for (i = 0; i < 8; i++) {
        $('div.lb a').eq(i).css('display', 'none')
        $('div.lb_button span').eq(i).removeClass("lb_hover")
    }
    $('div.lb a').eq(turn).fadeIn(600)
    // fadeIn(2000)
    //hover动
    $('div.lb_button span').eq(turn).addClass("lb_hover")

}
var time1 = setInterval(suib, 4000);
//悬停暂停
$('div.fs_lb').hover(function () {
    clearInterval(time1)
}, function () {
    time1 = setInterval(suib, 4000)
})
// 轮播右边的促销和广告
var a = 0;
$('a.ad2_tpp').hover(function () {
    //58px
    var index = $('a.ad2_tpp').index(this)
    if (index == 1 && a == 0) {
        a = 1;
        $('div.ad2_down').css('display', 'none')
        $('div.ad2_down').eq(index).css('display', 'block')
        $('div.deline').animate({ left: "+=58px" }, 100);
    }
    if (index == 0 && a == 1) {
        a = 0;
        $('div.ad2_down').css('display', 'none')
        $('div.ad2_down').eq(index).css('display', 'block')
        $('div.deline').animate({ left: "-=58px" }, 100);
    }
}, function () {
    if (a == 0) {
        $('div.deline').css('left', '0px')
    }
    if (a == 1) {
        $('div.deline').css('left', '58px')
    }
})

//京东秒杀
//秒杀倒计时
var miao = 59;
var fen = 59;
var shi = 4;
var timer2 = setInterval(function () {
    var m = miao;
    var f = fen;
    var s = shi;
    miao--;
    if (miao < 0) {
        miao = 59;
        fen--;
    }
    if (fen < 0) {
        fen = 59;
        s--;
    }
    if (s < 0) {
        s = 4;
        miao = 59;
        fen = 59;
    }
    if (miao < 10) {
        m = '0' + miao;
    }
    if (fen < 10) {
        f = '0' + fen;
    }
    if (shi < 10) {
        s = '0' + shi;
    }
    $('div.jdms_init>a>div>div span').eq(2).text(m)
    $('div.jdms_init>a>div>div span').eq(1).text(f)
    $('div.jdms_init>a>div>div span').eq(0).text(s)
}, 1000);

// 接受京东秒杀数据
$.get('/JDMS', function (data) {
    var jdms = JSON.parse(data)
    var text7 = $('div.fanye').html();

    //导入轮播内容
    // console.log(jdms)
    for (var i = 0; i < jdms.src.length; i++) {

        text7 += `<div class="fanye_in"><a href="">
        <img src="${jdms.src[i]}" alt="">
        <p>${jdms.p[i]}</p>
        <div>
            <div class="zuo">￥<span>${jdms.span[i]}</span></div>
            <div class="you"><span>￥</span><s> ${jdms.span2[i]}</s></div>
        </div>
    </a></div>`;
    }
    $('div.jdms_lb div.fanye').html(text7);
    text7 = '';
})

// 轮播按钮控制
var le=4000;
$('button#fanye_left').click(function (e) {
    le=le-800;
    $('div.fanye_in').animate({ left: "+=800px" }, 500);
    if(le==0){
        $('div.fanye_in').animate({ left: "-=4000px" }, 1);
        le=4000;
    }
})
$('button#fanye_right').click(function (e) {
    le=le+800;
    $('div.fanye_in').animate({ left: "-=800px" }, 500);
    if(le==4800){
        $('div.fanye_in').animate({ left: "+=4000px" }, 1);
        le=800;
    }
    // console.log(le)
})





//右边小轮播
var o = 0;
var fun2 = function () {
    $('section.honer span').removeClass('hoverhover')
    $('div.lb_right>div>div>a').animate({ left: "-=180px" }, 500);
    o = o + 1;
    // console.log(o)
    if (o == 2) {
        $('div.lb_right>div>div>a').animate({ left: "+=360px" }, 1);
        o = 0;
    }
    $('section.honer span').eq(o).addClass('hoverhover')
}


var timer3 = setInterval(fun2, 3000)


$('div.lb_right>div>div>a').hover(function () {
    clearInterval(timer3)
}, function () {
    timer3 = setInterval(fun2, 3000)
})



$('section.honer span').eq(0).hover(function () {
    clearInterval(timer3)
    $('section.honer span').removeClass('hoverhover')
    $(this).addClass('hoverhover')
    if (o == 1) {
        o = 0;
        $('div.lb_right>div>div>a').animate({ left: "+=180px" }, 500);
    }
}, function () {
    timer3 = setInterval(fun2, 3000)
})
$('section.honer span').eq(1).hover(function () {
    clearInterval(timer3)
    $('section.honer span').removeClass('hoverhover')
    $(this).addClass('hoverhover')
    if (o == 0) {
        o = 1;
        $('div.lb_right>div>div>a').animate({ left: "-=180px" }, 500);
    }
}, function () {
    timer3 = setInterval(fun2, 3000)
})



//右边栏
$('div.right_mid>a').hover(function () { 
    var index = $('div.right_mid>a').index(this)
    // console.log($('div.right_mid div').eq(index))
    if(index!=7){
        $('div.right_mid a').eq(index).css("cssText","background-color:rgb(207, 0, 0);")
        $('div.right_mid div').eq(index).css("cssText","left:35px !important;background-color:rgb(207, 0, 0);")
    }
    if(index==7){
        $('div.right_mid a').eq(index).css("cssText","background-color:rgb(207, 0, 0);position: fixed;right: 0;bottom: 0;")
        $('div.right_mid div').eq(index).css("cssText","left:35px !important;background-color:rgb(207, 0, 0);index:-1;")
    }
    $('div.right_mid div').eq(index).stop().animate({left:"-=94px"},500)

 },function(){
    var index = $('div.right_mid>a').index(this)
     $('div.right_mid div').eq(index).stop().animate({left:"+=94px"},500)
     $('div.right_mid div').eq(index).css("cssText","left:35px !important;")
     if(index!=7){
        $('div.right_mid a').eq(index).css("cssText","background-color:#7a6e6e; ")
     }
     if(index==7){
        $('div.right_mid a').eq(index).css("cssText","background-color:#7a6e6e;position: fixed;right: 0;bottom: 0;")
    }

 })


 //排行榜部分
 $.get('/phb', function (data) {
    var phb = JSON.parse(data)
    var data1 = phb[0]
    // console.log(phb)
    for(var i=0;i<6;i++){
        $('div.item_small>a').eq(i).html(`<div class="item_img">
        <img src="http:${data1[i].img}" alt="">
    </div>
    <span class="item_num">${data1[i].num}</span>
    <span class="item_right">${data1[i].name}</span>`)
    }
    $('div.tahead>a').hover(function(){
        for(var i=0;i<6;i++){
            $('div.tabody div.item_small>a').html('');
        }
        var index = $('div.tahead>a').index(this)
        var data = phb[index]
        var text8='';
        for(var i=0;i<6;i++){
            $('div.item_small>a').eq(i).html(`<div class="item_img">
            <img src="http:${data[i].img}" alt="">
        </div>
        <span class="item_num">${data[i].num}</span>
        <span class="item_right">${data[i].name}</span>`)
        }

    },function(){

    })

    //下面的hover
    var l=0;
    $('i.one').hover(function(){
        if(l==1)
        {
            l=0;
            $('div.lbsmall1 i').removeClass('i_hover')
            $('i.one').addClass('i_hover')
            // $('div.hiden_big').css("cssText","margin-left:-350px !important;")
        $('div.tabody div.hiden_big').stop().animate({"margin-left":"+=350px"},500)}
    },function(){
        if(l==0){
            $('div.tabody div.hiden_big').stop().animate({"margin-left":"0px"},500)}
    })
    $('i.two').hover(function(){
        if(l==0)
        {   l=1;
            $('div.lbsmall1 i').removeClass('i_hover')
            $('i.two').addClass('i_hover')
        $('div.lbsmall1 div.hiden_big').stop().animate({"margin-left":"-=350px"},500)
        // $('div.hiden_big').css("cssText","margin-left:0px !important;")
    }
    },function(){
        if(l==1){
            $('div.tabody div.hiden_big').stop().animate({"margin-left":"-350px"},500)}
    })

 })


//  会买专辑
// 轮播按钮控制
var ll=350;
var la=1;
$('a.buleft').click(function (e) {
    la--;
    // console.log(la)
    if(la==0){
        la=3;
    }
    $('div.d3>i').removeClass('i_hover')
    $('div.d3>i').eq(la-1).addClass('i_hover')
    ll=ll-350;
    $('div.hiden2>div>a').stop().animate({ left: "+=350px" }, 500);
    if(ll==0){
        $('div.hiden2>div>a').animate({ left: "-=1050px" }, 1);
        ll=1050;
    }
    // console.log(ll)
})
$('a.buright').click(function (e) {
    la++;
    // console.log(la)
    if(la==4){
        la=1;
    }
    $('div.d3>i').removeClass('i_hover')
    $('div.d3>i').eq(la-1).addClass('i_hover')
    ll=ll+350;
    $('div.hiden2>div>a').animate({ left: "-=350px" }, 500);
    if(ll==1400){
        $('div.hiden2>div>a').animate({ left: "+=1050px" }, 1);
        ll=350;
    }
    // console.log(ll)
})
$('i.d3').hover(function(){
    $('div.d3>i').removeClass('i_hover')
    $('i.d3').addClass('i_hover')
    if(la==2){
        ll=ll-350;
        la=1;
        $('div.hiden2>div>a').stop().animate({ left: "+=350px" }, 500);
    }
    if(la==3){
        ll=ll-700;
        la=1;
        $('div.hiden2>div>a').stop().animate({ left: "+=700px" }, 500);
    }
},function(){
    $('div.hiden2>div>a').stop().animate({ left: "-350px" }, 500);
})
$('i.d4').hover(function(){
    $('div.d3>i').removeClass('i_hover')
    $('i.d4').addClass('i_hover')
    if(la==1){
        ll=ll+350;
        la=2;
        $('div.hiden2>div>a').stop().animate({ left: "-=350px" }, 500);
    }
    if(la==3){
        ll=ll-350;
        la=2;
        $('div.hiden2>div>a').stop().animate({ left: "+=350px" }, 500);
    }
},function(){
        $('div.hiden2>div>a').stop().animate({ left: "-700px" }, 500);
})
$('i.d5').hover(function(){
    $('div.d3>i').removeClass('i_hover')
    $('i.d5').addClass('i_hover')
    if(la==2){
        ll=ll+350;
        la=3;
        $('div.hiden2>div>a').stop().animate({ left: "-=350px" }, 500);
    }
    if(la==1){
        ll=ll+700;
        la=3;
        $('div.hiden2>div>a').stop().animate({ left: "-=700px" }, 500);
    }
},function(){
    $('div.hiden2>div>a').stop().animate({ left: "-1050px" }, 500);
})


// 
$.get('/quan', function (data) {
    var quan = JSON.parse(data)
    // console.log(quan)
    
        // var text9='';
        for(var i=0;i<6;i++){
            $('div.tabody3 div.item_small>a').eq(i).html(`<div class="imgl">
            <img src="http:${quan[i].img}" alt="">
        </div>
        <div class="fontt">￥<span>${quan[i].span}</span>
        <div class="p2">${quan[i].txt1}</div>
    <div class="p3">${quan[i].txt2}</div></div>
    <div class="shude">${quan[i].aside}</div>
    <div class="ball1"></div>
    <div class="ball1 ball2"></div>`)
        }

    })
    var v=0;
    $('i.d6').hover(function(){
        if(v==1)
        {
            v=0;
            $('div.lbsmall3 i').removeClass('i_hover')
            $('div.lbsmall3 i.d6').addClass('i_hover')
        $('div.tabody3 div.hiden_big').stop().animate({"margin-left":"+=350px"},500)}
    },function(){
            $('div.tabody3 div.hiden_big').stop().animate({"margin-left":"0px"},500)

    })
    $('i.d7').hover(function(){
        if(v==0)
        {
            v=1;
            $('div.lbsmall3 i').removeClass('i_hover')
            $('div.lbsmall3 i.d7').addClass('i_hover')
        $('div.tabody3 div.hiden_big').stop().animate({"margin-left":"-=350px"},500)}
    },function(){
            $('div.tabody3 div.hiden_big').stop().animate({"margin-left":"-350px"},500)
    })


    // 直播数据
    $.get('/zhibo', function (data) {
        var quan = JSON.parse(data)
        // console.log(quan)
        for(var i=0;i<9;i++){
            if(i!=4)
            {$('div.widd_mid a>p').eq(i).text(quan[i].txt)
            $('div.widd_mid a').eq(i).css('background','url('+quan[i].img+')')}
            if(i==4)
            {$('div.widd_mid a>p').eq(i).text(quan[i].txt)
            $('div.widd_mid a>h4').eq(i).text(quan[i].txt1)
            $('div.widd_mid a').eq(i).css('background','url('+quan[i].img+')')}
        }
    })

    // JOY寻宝
    $.get('/xunbao', function (data) {
        var quan = JSON.parse(data).JOY
        var m=0;
        // console.log(quan)
        for(var i=0;i<6;i++){
        
        $('div.widd_small>a>img')[i].src=quan[i].big[0];
        for(var k=0;k<3;k++){
            $('div.widd_small>a>div>img')[m].src=quan[i].small[k];
            m++;
        }
        $('div.widd_small>a>h4').eq(i).html(`${quan[i].msg1}<span>${quan[i].msg2}</span>`)
        // console.log( quan[i].big[0])
        }
    }
    )

    // 特色推荐
    var ts=1210;
    var ts_a=0;
    $.get('/tuijian', function (data) {
        var spa = JSON.parse(data)
        // console.log(spa.length)
        for(var i=0;i<spa.length;i++){
            $('div.tstj_small>h3').eq(i).text(spa[i].span)
            $('div.tstj_small>span').eq(i).text(spa[i].h3)
            $('div.tstj_small>a').eq(i).css('background',`url(${spa[i].img})`)
        }
    })


    $('i.tstj').hover(function(){
        var index = $('i.tstj').index(this)
        // console.log(index);
        $('div.tstj>div.turnnum>i').removeClass('i_hover')
        $('div.tstj>div.turnnum>i').eq(index).addClass('i_hover')
        if(index<ts_a){
            ts=ts-1210*(ts_a - index);
            var tt=(ts_a - index)*1210+'px';
            $('div.tstj>div.wq').stop().animate({ "margin-left": "+="+tt }, 500);
            ts_a=index;
        }
        if(index>ts_a){
            ts=ts+1210*(index - ts_a);
            var tt=(index - ts_a)*1210+'px';
            $('div.tstj>div.wq').stop().animate({ "margin-left": "-="+tt }, 500);
            ts_a=index;
        }
    },function(){
        $('div.tstj>div.wq').stop().animate({ "margin-left": "-"+ts+"px" }, 200);
    })

    $('a.tstj_zuo').click(function(e){
        e.preventDefault();
        ts_a--;
        if(ts_a==-1){
            ts_a=3
        }
        $('div.tstj>div.turnnum>i').removeClass('i_hover')
        $('div.tstj>div.turnnum>i').eq(ts_a).addClass('i_hover')

        $('div.tstj>div.wq').stop().animate({ "margin-left": "+=1210px"},500);
        ts=ts-1210;
        $('div.tstj>div.wq').animate({ "margin-left": "-"+ts+"px"},1);

        if(ts==0){
            ts=4840;
            $('div.tstj>div.wq').animate({ "margin-left": "-=4840px"}, 1);
        }
    })
    $('a.tstj_you').click(function(e){
        e.preventDefault();
        ts_a++;
        if(ts_a==4){
            ts_a=0
        }
        $('div.tstj>div.turnnum>i').removeClass('i_hover')
        $('div.tstj>div.turnnum>i').eq(ts_a).addClass('i_hover')

        $('div.tstj>div.wq').stop().animate({ "margin-left": "-=1210px"},500);
        ts=ts+1210;
        $('div.tstj>div.wq').animate({ "margin-left": "-"+ts+"px"},1);

        if(ts==6050){
            ts=1210;
            $('div.tstj>div.wq').animate({ "margin-left": "+=4840px"}, 1);
        }
    })

    var timer6 = setInterval(function(){
        ts_a++;
        if(ts_a==4){
            ts_a=0
        }
        $('div.tstj>div.turnnum>i').removeClass('i_hover')
        $('div.tstj>div.turnnum>i').eq(ts_a).addClass('i_hover')
        $('div.tstj>div.wq').stop().animate({ "margin-left": "-=1210px"},500);
        ts=ts+1210;
        $('div.tstj>div.wq').animate({ "margin-left": "-"+ts+"px"},1);
        if(ts==6050){
            ts=1210;
            $('div.tstj>div.wq').animate({ "margin-left": "+=4840px"}, 1);
        }
        // console.log(1)
        
    },3000)

    // 我逛够了
    $.get('/xunbao', function (data) {
        var dat = JSON.parse(data).not_yet;
        var text0='';
        for(var i=0;i<dat.length;i++){

            if(dat[i].class=='animation'){
                text0+=`<div class="animation">
                <a href="http:${dat[i].href}">
                    <img src="http:${dat[i].src}" alt="">
                    <div class="jieshao">
                        <p>${dat[i].msg}</p>
                            <div class="price"> <span style="font-size: 12px">￥</span>${dat[i].money}</div>
                    </div>
                </a>
                <div class="more">
                    <a href="#javascript">没有相似的</a>
                </div>
            </div>`
            }
            if(dat[i].class=='unanimation'){
                text0+=`<div class="unanimation">
                <a href="http:${dat[i].href}">
                <img src="http:${dat[i].src}" alt="">
                </a>
            </div>`
            }
        }
        $('div.wggl').html(text0);

        $('div.animation').hover(function(){
            var index = $('div.wggl>div.animation').index(this)
            $('div.more').eq(index).css('display','block')
            $('div.more>a').eq(index).stop().animate({ width: "60px",left:"-=30px",top:"-=30px",height:"60px",'font-size':"13px"}, 300);
            
            
        },function(){
            var index = $('div.wggl>div.animation').index(this)
            $('div.more>a').eq(index).stop().animate({ width: "0px",left:"+=30px",top:"+=30px",height:"0px",'font-size':"1px"}, 300);
            $('div.more').eq(index).css('display','none')
        })
    })

    // 底部
    $.get('/foot',function(data){
        var foothelp=JSON.parse(data)[0].help;
        var mid=JSON.parse(data)[0].mid;
        // console.log(foothelp)
        var text00='';
        for(var i=0;i<foothelp.length;i++){
            var text01='';
            for(var k=0;k<foothelp[i].content.length;k++){
                text01+=`<li><a href="#javascript">${foothelp[i].content[k]}</a></li>
                `;
            }
            text00+=`<div class="help">
            <p>${foothelp[i].title}</p>
            <ul>${text01}</ul>
        </div>`
        }
        $('div.foothelp').html(`${text00}<div class="map">
        <h5>京东自营覆盖区县</h5>
        <p>京东已向全国2661个区县提供自营配送服务，支持货到付款、POS机刷卡和售后上门服务。</p>
        <p style="text-align: right;"><a href="">查看详情 ></a></p>
    </div>`)

        var text02='';
    for(var i=0;i<mid.length;i++){
        text02+=`<a href="#javascript">${mid[i]}</a>`
    }
    $('p.fottop').html(text02)
    })

// 预加载
$('div.jdzb').addClass('none')
$('div.wggl').addClass('none')
// 滚动监听搜索栏
var p=0;
$(window).scroll(function(e){
    var top = $(window).scrollTop();
    // console.log(top)
    if(top>800&&p==0){
        p=1;
        $('div.topnav').animate({top:"+=50px"},300)
    }
    if(top<800&&p==1){
        p=0;
        $('div.topnav').animate({top:"-=50px"},300)
    }
    if(top>2600){
        setTimeout(function () { 
            $('div.jdzb').removeClass('none')
            $('div.dog1').addClass('none')
        }, 600);
    }
    if(top>3200){
        setTimeout(function () { 
            $('div.wggl').removeClass('none')
            $('div.dog2').addClass('none')
        }, 800);
    }
})
