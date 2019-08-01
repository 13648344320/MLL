$(window).load(function(){
  
var i=0;//关键变量
var $lis=$("#li-8>li");//8个li的集合
var $pics=$("#eight-pic>a");//8张大图的集合
var $lists=$("#commodity1>div")//8个div的集合
var no_and_off=true;  //开关
// console.log($lis,$pics,$lists)
function moveTo(to){
    // 如果没有参数传入,则给当前位置的下一张图片添加class
    if(to===undefined){
        to=++i;
        (to==8) && (to=0,i=0);
        
        // 通过下标从jQ集合中拿出来的是DOM元素，需要重新包装成jQ对象
        $($lis[to]).addClass("btn");
        $($lis[to]).siblings().removeClass("btn");
        $($pics[to]).addClass("shows");
        $($pics[to]).siblings().removeClass("shows");
        $($lists[to]).addClass("shows");
        $($lists[to]).siblings().removeClass("shows");


    }else if(to||to==0){
        
    // 如果传入参数,就用这个参数当做下标去查找上面三个集合中对应下标的值
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

// 事件委托
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
    //moveTo(i);
    console.log(i)
    //再次调用timer时,i已变为现在拥有btn的li的下标,再以undefined的形式传入moveTo,自动跳至下一张
    timer=setInterval(function(){
        moveTo();
   },3000);
})    



   /* $("ul#li-8>li").mouseenter(function(){
        var $li=$(this);
        //清除别的btn
        console.log("111")
        $li.siblings().removeClass("btn");
        //给自己加btn
        $li.addClass("btn");
        var $content=$li.attr("data-toggle");
        var $sss=$(`.content${$content}`);
        $sss.siblings().removeClass("shows");
        $sss.addClass("shows")
    */
  /*  $("ul#li-8").on("mouseenter","[data-toggle]",function(){
        var $li=$(this);
        //清除别的btn
        $li.siblings().removeClass("btn");
        //给自己加btn
        $li.addClass("btn");
        var $content=$li.attr("data-toggle");
        var $sss=$(`.content${$content}`);
        $sss.siblings().removeClass("shows");
        $sss.addClass("shows")
    })*/

/*     // DOM版
    var i=0;
    var ul=document.querySelector("#li-8");
    ul.onmouseover=function(e){
        var li=e.target;
        if(li.nodeName=="LI"){
            // 先清除其他li上的btn
        var lis=document.querySelectorAll("#li-8>li");
        for(var i=0;i<lis.length;i++){
            lis[i].className="";
        };
        // 再给自己加上btn
        li.className="btn";
        // 再找到li的自定义属性的值
        var content=li.dataset.toggle;
        //console.log(content)
        // 上边的大图和下边的列表的class就是li的自定义属性值
        var taga=document.querySelector(`#eight-pic>a.${content}`);
        var tagd=document.querySelector(`#commodity1>div.${content}`);
        //console.log(taga);
        //console.log(tagd);
        // 然后找到八张大图的父元素
        var taga_parent=taga.parentElement.children;
        var tagd_parent=tagd.parentElement.children;
        //console.log(taga_parent);
        //console.log(tagd_parent);
        //遍历清空每个孩子(a标签)的shows
        for(var i=0;i<taga_parent.length;i++){
            if(taga_parent[i]==taga){
                continue;
            }
            taga_parent[i].className=`content${i}`;
        }
        // 再给taga添加show
        taga.className="shows"

         //遍历清空每个孩子(div)的shows
        for(var i=0;i<tagd_parent.length;i++){
            if(tagd_parent[i]==tagd){
                continue;
            }
            tagd_parent[i].className=`content${i}`;
        }
      
        // 再给tagd添加show
        tagd.className="shows"
        }

    };

    // 定义一个核心函数，可以从当期位置移动到任意一张图
    function moveTo(to){
        // 如果用户没有将鼠标移入li中,
        if(to==undefined){
            to=i+1;//就默认跳到下一张。
        }
        // 先将标识当前位置的变量i变为目标位置
        i=to;
        // 再用i来带着上下图片一起动
    }*/
})
