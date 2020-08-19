function changeStyle(style) {
    if (style == 'grid') {
        $(".products-container .grid").show()
        $(".products-container .list").hide();

        $(".products-style-selector .grid-style").addClass("active");
        $(".products-style-selector .list-style").removeClass("active");
    } else {
        $(".products-container .grid").hide()
        $(".products-container .list").show();

        $(".products-style-selector .list-style").addClass("active");
        $(".products-style-selector .grid-style").removeClass("active");
    }

}