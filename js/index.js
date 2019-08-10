$(window).load(function(){

    
(function(){// 轮播图上的导航条的js开始
    // 找到触发事件的元素
    var $ul=$("#carousel-nav>ul");
    // 事件委托
    $ul.on("mouseenter","li",function(){
        var $li=$(this);
        var $li_id=$li.attr("data-liId");

        var $data1_i=$("[data-liId=1]>i");
        var $data1_a=$("[data-liId=1]>a");
        var $data8_i=$("[data-liId=8]>i");
        var $data8_a=$("[data-liId=8]>a");
        var $data11_i=$("[data-liId=11]>i");
        var $data11_a=$("[data-liId=11]>a");
        // 如果$li_id为undefined,说明移入的不是三个标题之一
        if(!$li_id){
            $li.addClass("hover");
            $li.children().addClass("hover");
        }else if($li_id==1){
            $li.addClass("hover1")
            $data1_a.addClass("hover1");
            $data1_i.addClass("hover1");
            $li.children().addClass("hover1");
        }else if($li_id==8){
            $li.addClass("hover8")
            $data8_a.addClass("hover8");
            $data8_i.addClass("hover8");
            $li.children().addClass("hover8");
        }else if($li_id==11){
            $li.addClass("hover11");
            $data11_a.addClass("hover11");
            $data11_i.addClass("hover11");
            $li.children().addClass("hover11");
        }
    });

    // 鼠标移出
    $ul.on("mouseleave","li",function(){
        var $li=$(this);
        var $li_id=$li.attr("data-liId");

        var $data1_i=$("[data-liId=1]>i");
        var $data1_a=$("[data-liId=1]>a");
        var $data8_i=$("[data-liId=8]>i");
        var $data8_a=$("[data-liId=8]>a");
        var $data11_i=$("[data-liId=11]>i");
        var $data11_a=$("[data-liId=11]>a");
        // 如果$li_id为undefined,说明移入的不是三个标题之一
        if(!$li_id){
            $li.removeClass("hover");
            $li.children().removeClass("hover");
        }else if($li_id==1){
            $li.removeClass("hover1");$data1_i.removeClass("hover1");
            $data1_a.removeClass("hover1");
            $li.children().removeClass("hover1");
        }else if($li_id==8){
            $li.removeClass("hover8");$data8_i.removeClass("hover8");
            $data8_a.removeClass("hover8");
            $li.children().removeClass("hover8");
        }else if($li_id==11){
            $li.removeClass("hover11");$data11_i.removeClass("hover11");
            $data11_a.removeClass("hover11");
            $li.children().removeClass("hover11");
        }
    })
    
})();// 轮播图上的导航条的js结束


(function(){//大图,ul>li和随动的商品列表的js的开始
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
})();//大图,ul>li和随动的商品列表的js的结束




})//最外层函数的结束括号
