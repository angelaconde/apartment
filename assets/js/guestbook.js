$(document).ready(function () {
    $('#tabla').DataTable({
        ajax: {
            url: 'http://localhost:3000/api/guestbook',
            "dataSrc": ""
        },
        columns: [
            { data: 'nombre' },
            { data: 'email' },
            { data: 'mensaje' },
            {
                data: 'fecha',
                render: function (data, type, row) {
                    if (type === "sort" || type === "type") {
                        return data;
                    }
                    return moment(data).format("DD/MM/YYYY HH:mm");
                }
            },
        ],
        "order": [[3, "desc"]],
        "language": {
            "url": "http://cdn.datatables.net/plug-ins/1.10.20/i18n/Spanish.json"
        },
        responsive: true
    });
});
$('#formulario').on('submit', function (e) {
    e.preventDefault();
    insertar();
    $('#formulario').trigger("reset");
});
function insertar() {
    const formData = new FormData(document.getElementById('formulario'));
    fetch('http://localhost:3000/api/guestbook', {
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
            $('#tabla').DataTable().ajax.reload();
        });
}