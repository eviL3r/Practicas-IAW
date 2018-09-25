$(function () {
    $("#seleccion").on("change",function () {
        if($(this).val()=="todo"){
            $("h1,h2,p").css({
            "display":"block"
        })
    }
    else{
    $("p").css({
        "display":"none"
    })
    }
    })
})
$("#letra").on("change",function (){
    if ($("h1,h2,p").css({
        "font-family":$(this).val()
    })
    })
})