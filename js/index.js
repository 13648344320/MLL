$(window).load(function(){
var i=0;//关键变量
var $lis=$("#li-8>li");//8个li的集合
var $pics=$("#eight-pic>a");//8张大图的集合
var $lists=$("#commodity1>div")//8个div的集合
function moveTo(to){
    // 如果没有参数传入,则给当前位置的下一张图片添加class
    if(to===undefined){
        to=++i;
        (to==$lis.length) && (to=0,i=0);
        // 通过下标从jQ集合中拿出来的是DOM元素，需要重新包装成jQ对象
        $($lis[to]).addClass("btn");
        $($lis[to]).siblings().removeClass("btn");
        $($pics[to]).addClass("shows");
        $($pics[to]).siblings().removeClass("shows");
        $($lists[to]).addClass("shows");
        $($lists[to]).siblings().removeClass("shows");
    }else if(to||to==0){
    // 如果传入参数,就用这个参数当做下标去查找上面三个集合中对应下标的元素
        $($lis[to]).addClass("btn");
        $($lis[to]).siblings().removeClass("btn");
        $($pics[to]).addClass("shows");
        $($pics[to]).siblings().removeClass("shows");
        $($lists[to]).addClass("shows");
        $($lists[to]).siblings().removeClass("shows");
     
    }
}

var timer=setInterval(()=>{
     moveTo();
},3000);

// 移入
$("ul#li-8").on("mouseenter","[data-toggle]",function(){
    var $li=$(this);
    var $li_id=$li.attr("data-toggle");
    to=$li_id;
    moveTo(to);
    clearTimeout(timer);
    timer=null;
})
// 移出
$("ul#li-8").on("mouseleave","[data-toggle]",function(){
    var $li=$(this);
    var $li_id=$li.attr("data-toggle");
    //将全局的i变为当前i的自定义属性值:也就是i的下标
    i=$li_id;
    //再次调用timer时,i已变为现在拥有btn的li的下标,再以undefined的形式传入moveTo,自动跳至下一张
    timer=setInterval(function(){
        moveTo();
   },3000);
})  





})//最外层函数的结束括号
