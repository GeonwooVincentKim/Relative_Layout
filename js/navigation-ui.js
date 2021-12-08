$(document).ready(function () {
    $(".nav-grid-items").click(function () {
        $(".grid-item-active").css(
            "animation",
            "moveActive .455s cubic-bezier(0.46, 0.03, 0.21, 0.93)"
        );

        var index = ($(this).index());
        var positionChange = 100;
        var finalValue = positionChange * index.toString() + `%`;

        $('.nav-grid-items').removeClass('active');
        $(this).addClass('active');
        $("#active-nav-grid-item").css("left", finalValue);

        setTimeout(() => {
            $(".grid-item-active").css("animation", "reset");
        }, 500);
    });
});