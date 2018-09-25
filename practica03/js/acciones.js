$(function () {
    $("button").on("click",function () {
        $(this).css({
            "display":"none"
            });
        var ajax=$.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            data: {
                results: '50'
            }
        });
    });

});

