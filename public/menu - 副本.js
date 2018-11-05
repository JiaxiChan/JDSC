
// 装所有信息
 var allmsg =[];

  
 var menu=$('.JS_navCtn').find('li');
 menu.each(function(index,item){
    //  console.log(index);
     var obj={};
   //  装左边选择内容
     var tarr=[];
    //  装右边头部信息
    var tag=[];
    // 装详细信息的数组
    var content=[];
    // 装小图
    var small=[];
    // 装大图
    var big=[];

    //  console.log($(item).find('a'))
     $(item).find('a').each(function(index,text){
            tarr.push($(text).text())
     })
     
    //  右边的详细内容
    // 右上头部
    $('.cate_part').eq(index).find('.cate_channel a').each(function(index,a){
               tag.push($(a).text());
              
    }) 
    // 右下的主要内容
    $('.cate_part').eq(index).find('.cate_detail dl').each(function(index,dl){
        // console.group('第'+index+'组dl')
        // console.log(dl);
        // console.groupEnd();
        var msg={};
        var box=[];
        msg.title=$(dl).find('.cate_detail_tit_lk').text();
        $(dl).find('.cate_detail_con a').each(function(index,ele){
            box.push($(ele).text())  
        })
        msg.box=box;

        content.push(msg)

    })

    // 获取右边的图片
    $('.cate_part_col2').eq(index).find('.cate_brand a').each(function(index,smallimg){
        small.push($(smallimg).find('img').attr('src'))
    })
    
    $('.cate_part_col2').eq(index).find('.cate_promotion a').each(function(index,bigimg){
        big.push($(bigimg).find('img').attr('src'))
    })

    
      
    // console.log(tag)

     obj.left_C=tarr;
     obj.tag=tag;
     obj.content=content
     obj.small=small;
     obj.big=big;
     allmsg.push(obj)


 })
 console.log(allmsg)

 $.post('/menus',{data:allmsg})