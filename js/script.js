$(".subMenu ul").hide();
$(".subMenu a").click(function() {
    console.log("clicked");
    $(this).parent(".subMenu").children("ul").slideToggle("100");
    // $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});