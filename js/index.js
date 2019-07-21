$(window).load(function(){
    //先找到触发事件的元素
    //1.
    $("#li-8>li:nth-child(1)").mouseenter(function(){
        var $li=$(this);
         //移入时先查找兄弟元素是否有btn，有就先清除了再给自己添加
        $li.siblings("li.btn").removeClass("btn");
        $li.addClass("btn");
        //
        var $c1=$(".content1")
        $c1.siblings().removeClass("shows");
        $c1.addClass("shows");
    });
    //2.
    $("#li-8>li:nth-child(2)").mouseenter(function(){
        var $li=$(this);
         //移入时先查找兄弟元素是否有btn，有就先清除了再给自己添加
        $li.siblings("li.btn").removeClass("btn");
        $li.addClass("btn");
        //
        var $c2=$(".content2");
        $c2.siblings().removeClass("shows");
        $c2.addClass("shows")
    })
    //3.
    $("#li-8>li:nth-child(3)").mouseenter(function(){
        var $li=$(this);
         //移入时先查找兄弟元素是否有btn，有就先清除了再给自己添加
        $li.siblings("li.btn").removeClass("btn");
        $li.addClass("btn");
        //
        var $c3=$(".content3");
        $c3.siblings().removeClass("shows");
        $c3.addClass("shows")
    })
    //4.
    $("#li-8>li:nth-child(4)").mouseenter(function(){
        var $li=$(this);
         //移入时先查找兄弟元素是否有btn，有就先清除了再给自己添加
        $li.siblings("li.btn").removeClass("btn");
        $li.addClass("btn");
        //
        var $c4=$(".content4");
        $c4.siblings().removeClass("shows");
        $c4.addClass("shows")
    })
    //5.
    $("#li-8>li:nth-child(5)").mouseenter(function(){
        var $li=$(this);
         //移入时先查找兄弟元素是否有btn，有就先清除了再给自己添加
        $li.siblings("li.btn").removeClass("btn");
        $li.addClass("btn");
        //
        var $c5=$(".content5");
        $c5.siblings().removeClass("shows");
        $c5.addClass("shows")
    })
    //6.
    $("#li-8>li:nth-child(6)").mouseenter(function(){
        var $li=$(this);
         //移入时先查找兄弟元素是否有btn，有就先清除了再给自己添加
        $li.siblings("li.btn").removeClass("btn");
        $li.addClass("btn");
        //
        var $c6=$(".content6");
        $c6.siblings().removeClass("shows");
        $c6.addClass("shows")
    })
    //7.
    $("#li-8>li:nth-child(7)").mouseenter(function(){
        var $li=$(this);
         //移入时先查找兄弟元素是否有btn，有就先清除了再给自己添加
        $li.siblings("li.btn").removeClass("btn");
        $li.addClass("btn");
        //
        var $c7=$(".content7");
        $c7.siblings().removeClass("shows");
        $c7.addClass("shows")
    })
    //8.
    $("#li-8>li:nth-child(8)").mouseenter(function(){
        var $li=$(this);
         //移入时先查找兄弟元素是否有btn，有就先清除了再给自己添加
        $li.siblings("li.btn").removeClass("btn");
        $li.addClass("btn");
        //
        var $c8=$(".content8");
        $c8.siblings().removeClass("shows");
        $c8.addClass("shows")
    })
})