$(function () {
    $(".grid").slice(0, 8).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".grid:hidden").slice(0, 4).slideDown();
        if ($(".grid:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
        }
    });
});