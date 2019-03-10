$(function () {
  $(document).scroll(function () {
      var top = $(document).scrollTop();
      var t = 0;
      if(top>140){
          $("#section2Title").addClass("section2TitleAdd");
          for(var i=0;i<3;i++){
              $(".hot").eq(i).addClass("hotAdd");
          }
      }
      if(top>1000){
        $("#leftS").addClass("leftSAdd");
        $("#rightS").addClass("rightSAdd");
      }
  })
})
  
