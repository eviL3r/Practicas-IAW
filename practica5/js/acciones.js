$(function(e){
   var xml;
   $.ajax({
       method:"get",
       url: "http://jorgesanchez.net/practicas/iaw/practica05/elecciones.xml",
       dataType:"xml"
   })
   .done(function (data) {
        xml=data;
        var elecciones =$(xml).find("eleccion");
        for (var eleccion of elecciones){
            console.log($(eleccion).attr("tipo"));
            var tipo=$(eleccion).attr("tipo");
            $("#tipo").append("<option value="+ tipo +">"+tipo+"</option>");
        }
    })
});