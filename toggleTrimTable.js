// Datos de la tabla Trim
const trimDetailsData = [
    { description: "T-MOLD 94\" X 1 3/4\" X 5/16\"", color: "FUME TM TOBACCO", sku: "EVFTME623" },
    { description: "T-MOLD 94\" X 1 3/4\" X 5/16\"", color: "FUME TM CANELA", sku: "EVFTME3L5" },
    { description: "T-MOLD 94\" X 1 3/4\" X 5/16\"", color: "FUME TM HONEY", sku: "EVFTMEL04" },
    { description: "T-MOLD 94\" X 1 3/4\" X 5/16\"", color: "FUME COTTON", sku: "EVFTME1L4" },
    { description: "T-MOLD 94\" X 1 3/4\" X 5/16\"", color: "FUME TM SILK", sku: "EVFTMEL03" },
    { description: "T-MOLD 94\" X 1 3/4\" X 5/16\"", color: "FUME TM MAPLE", sku: "EVFTMEL07" }
];

function createTrimDetailsTable(containerId, tableId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const table = document.createElement('table');
    table.className = 'table-noborder';
    table.id = tableId;
    table.style.display = 'none';

    const thead = document.createElement('thead');
    thead.innerHTML = `<tr><th>Description</th><th>Color</th><th>SKU</th></tr>`;
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    trimDetailsData.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${row.description}</td><td>${row.color}</td><td>${row.sku}</td>`;
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    container.appendChild(table);
}

window.addEventListener('DOMContentLoaded', function() {
    // Crear las tres tablas
    createTrimDetailsTable('tableTrimDetailsContainer1', 'tableTrimDetails1');
    createTrimDetailsTable('tableTrimDetailsContainer2', 'tableTrimDetails2');
    createTrimDetailsTable('tableTrimDetailsContainer3', 'tableTrimDetails3');

    // Asignar funcionalidad a cada botón
    for (let i = 1; i <= 3; i++) {
        const btn = document.getElementById('toggleTableBtn' + i);
        const table = document.getElementById('tableTrimDetails' + i);
        if (btn && table) {
            btn.addEventListener('click', function() {
                if (table.style.display === 'none') {
                    table.style.display = 'table';
                    btn.src = '/public/flecha_up.png';
                } else {
                    table.style.display = 'none';
                    btn.src = '/public/flecha_down.png';
                }
            });
        }
    }
});
