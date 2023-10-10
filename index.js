function abrirMenu(){
    $("#botonMenu").addClass('hidden');
    $("#botonCerrarMenu").removeClass('hidden');
    $("#barraNav").removeClass("max-[819px]:hidden");

}

function cerrarMenu(){
    $("#botonMenu").removeClass('hidden');
    $("#botonCerrarMenu").addClass('hidden');
    $("#barraNav").addClass("max-[819px]:hidden");
}

$("#botonMenu").click(abrirMenu);
$("#botonCerrarMenu").click(cerrarMenu);