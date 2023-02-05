import "./index.less";
$(".menu").on("click", function(){
    $(".m-header").toggleClass("on");
    $(this).nextAll(".right-layout").slideToggle();
})