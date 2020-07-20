$(document).ready(function () {
    AOS.init();

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
})