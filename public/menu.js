
var JDMS = [];



var src = []
var p = []
var span = []
var spann = []
// console.log($(this).chidren('img').src())
$('img').each(function () {
    //    console.log($(this)[0].src)
    src.push($(this)[0].src)
})
JDMS.push(src)


$('p').each(function () {
    p.push($(this).text())
})
JDMS.push(p)
$('span.sk_item_price_new span').each(function () {
    span.push($(this).text())
})
$('span.sk_item_price_origin span').each(function () {
    spann.push($(this).text())
})
JDMS.push(span)
JDMS.push(spann)



console.log(JDMS)

$.post('/menus', { data: JDMS })

//  $.get('/user/out',function(data){
//      var JDMS = JSON.parse(data).data
//     $('section').html(JDMS);
//     // console.log(JDMS)
// })