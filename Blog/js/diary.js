$(function(){
    $("#col ul li:eq(3)").addClass("tec");

    $("#col ul li").mousedown(function(){
        $(this).addClass("tec");
        var index=$(this).index();
        $(this).siblings().removeClass("tec");
    });
    $(".year").click(function () {
        var index  = $(this).parents(".time_year").index()-2;
        var ele = $(".time_year").eq(index).children("h2").children("i");
        if(ele.hasClass("fa-caret-down")){
            ele.removeClass("fa-caret-down");
            ele.addClass("fa-caret-right");
            $(".time_year").eq(index).children(".time_month").css("display","none");
        }
        else{
            ele.removeClass("fa-caret-right");
            ele.addClass("fa-caret-down");
            $(".time_year").eq(index).children(".time_month").css("display","block");
        }
    })
})