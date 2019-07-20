$(window).load(function(){
    
   /* $("#li-8>li").mouseenter(function(){
        var $li=$(this);
        if($li.btn){
            $li.removeClass("btn")
        }else{
            $li.addClass("btn")
        };
    });
    $("#li-8>li").mouseleave(function(){
        $(this).removeClass("btn")

    })*/
    
    $("#li-8>li").hover(
        function(){
            //移入时先查找兄弟元素是否有btn，有就先清除了再给自己添加
            var $li=$(this);
            $li.siblings("li.btn").removeClass("btn");
            $li.addClass("btn");
        },function(){
            console.log("  sdd")
        }
    )
})