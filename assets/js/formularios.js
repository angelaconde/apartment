$('#formulario-reserva').on('submit', function (e) {
    $('#modal-reserva').modal('show');
    e.preventDefault();
});

$('#formulario-contacto').on('submit', function (e) {
    e.preventDefault();
    enviarEmail();
    $('input').val('');
    $('textarea').val('');
    $('#modal-contacto').modal('show');
});

function enviarEmail() {
    const formData = new FormData(document.getElementById('formulario-contacto'));
    fetch('http://localhost:3000/contact', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData.entries())),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            console.log('Success:', response);
        });
}