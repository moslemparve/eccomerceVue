$(document).ready(function () {
    $(document).on('click', '.mbl_select_iteam_in' ,function(){
        $(this).toggleClass("pm").siblings().slideToggle(300);
    });
});
$(document).ready(function () {
    $(document).on('click', '.select_iteam_in' ,function(){
        $(this).toggleClass("pm").siblings().slideToggle(300);
    });
});
$(document).ready(function () {
    $(document).on('click', '.top_icon' ,function(){
        $(this).siblings().slideToggle(300);
    });
});
$(".toggler_all i").click(function () {
    $(".product_left_all").addClass("active");
    $("html").addClass("modal-open");
    $(".all_toggle").addClass("active");
});
$(".close_btn").click(function () {
    $(".product_left_all").removeClass("active");
    $("html").removeClass("modal-open");
    $(".all_toggle").removeClass("active");
});
$(".icon_click").click(function () {
    $(".mobile_menu_dropdown").addClass("active");
    $("html").addClass("modal-open");
    $(".all_toggles").addClass("active");
    $(".icon_click").addClass("active");
    $(".icon_rmv").addClass("active");
});
$(".icon_rmv, .all_toggles").click(function () {
    $(".mobile_menu_dropdown").removeClass("active");
    $("html").removeClass("modal-open");
    $(".all_toggles").removeClass("active");
    $(".icon_rmv").removeClass("active");
    $(".icon_click").removeClass("active");
});
$(".icon_one").click(function () {
    $(".mobile_menu_btm").addClass("active");
    $(".icon_one").addClass("active");
    $(".icon_two").addClass("active");
});
$(".icon_two").click(function () {
    $(".mobile_menu_btm").removeClass("active");
    $(".icon_two").removeClass("active");
    $(".icon_one").removeClass("active");
});
window.onscroll = function () {
    myFunction();
};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
