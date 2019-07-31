$(window).load(function(){
  


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
    /*$("ul#li-8").on("mouseenter","[data-toggle]",function(){
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

    // DOM版
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
    }
})
