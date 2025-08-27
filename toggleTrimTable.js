// Mostrar/ocultar la tabla al hacer clic en la imagen
window.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('toggleTableBtn');
    var table = document.getElementById('tableTrimDetails');
    btn.addEventListener('click', function() {
        if (table.style.display === 'none') {
            table.style.display = 'table';
            btn.src = '/public/flecha_up.png';
        } else {
            table.style.display = 'none';
            btn.src = '/public/flecha_down.png';
        }
    });
});
