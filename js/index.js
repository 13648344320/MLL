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
    $("ul#li-8").on("mouseenter","[data-toggle]",function(){
        var $li=$(this);
        //清除别的btn
        $li.siblings().removeClass("btn");
        //给自己加btn
        $li.addClass("btn");
        var $content=$li.attr("data-toggle");
       
        var $sss=$(`.content${$content}`);
        $sss.siblings().removeClass("shows");
        $sss.addClass("shows")
    })
})
