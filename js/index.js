$(document).ready(function () {
    AOS.init();

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });

    $('.navbar .dropdown').hover(function () {
        $(this).find('.dropdown-menu').first().stop(true, true).delay(0).slideDown();
    }, function () {
        $(this).find('.dropdown-menu').first().stop(true, true).delay(50).slideUp()
    });
})