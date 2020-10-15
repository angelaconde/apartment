$('#formulario-reserva').on('submit', function (e) {
    $('#modal-reserva').modal('show');
    e.preventDefault();
});

$('#formulario-contacto').on('submit', function (e) {
    $('input').val('');
    $('textarea').val('');
    $('#modal-contacto').modal('show');
    e.preventDefault();
});