$(document).ready(function(){
    $(".channel-item").click(function(){
        var list = $(this).data("list");
      $(this).children("i").toggleClass("rotate");
      $("#extend-"+list).toggleClass("open");
    });
  });