$(function () {
    var jqxhr = $.ajax({
        url:'http://jorgesancheznet.ddns.net/practicas/iaw/practica06/comunidades.php',
        method:"get",
        dataType:"json"
    });
    jqxhr.done(function (e) {
        $("select").on("change",function (e) {
            var comunidades = data["comunidades"];
            for (var comunidad of comunidades) {
                var id = comunidad["id_comunidad"];
                var nombre = comunidad["nombre"];
                var opciones="<option value='"+id+"'>"+nombre+"</option>";
                $("#com").append(opciones);
            }
        })
    });
});