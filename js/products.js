function selectCategory(element, category) {
    $(".category-option").removeClass("active");
    $(element).addClass("active");

    if (category == 'all') {
        $(".product-item").parent().fadeIn();
        return;
    }

    $(".product-item").parent().hide();
    $(".product-item." + category).parent().fadeIn(1000);
}