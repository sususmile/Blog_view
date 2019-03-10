$(function(){
    $("#col ul li:eq(2)").addClass("tec");

    $("#col ul li").mousedown(function(){
        $(this).addClass("tec");
        var index=$(this).index();
        $(this).siblings().removeClass("tec");
    });
})

