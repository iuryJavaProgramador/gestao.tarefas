document.getElementById('dataForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const datacriacao = document.getElementById('datacriacao').value.trim();
    const titulo = document.getElementById('titulo').value.trim();
    const descricao = document.getElementById('descricao').value.trim();
    const status = document.getElementById('status').value;

    if (datacriacao === "" || titulo === "" || descricao === "" || status === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const table = document.querySelector('.dataTable');
    if (table.style.display === 'none' || table.style.display === '') {
        table.style.display = 'table';
    }

    const tbody = table.querySelector('tbody');
    const newRow = tbody.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);

    cell1.textContent = datacriacao;
    cell2.textContent = "ID...NUMBER";
    cell3.textContent = titulo;
    cell4.textContent = descricao;

    cell5.innerHTML =
        `<select class="form-select status-select">
            <option value="Pendente" ${status === "Pendente" ? "selected" : ""}>Pendente</option>
            <option value="Concluído" ${status === "Concluído" ? "selected" : ""}>Concluído</option>
        </select>`;

    cell6.innerHTML = 
    '<button class="btn-confirmar">✔️</button> <button class="btn-remover">❌</button>';
    event.target.reset();

    if (status === "Concluído") {
        alert("Sua tarefa foi marcada como concluída.");
    } else if (status === "Pendente") {
        alert("Sua tarefa foi enviada com sucesso.");
    }

    console.log("Data de criação:", datacriacao);
    console.log("Título:", titulo);
    console.log("Descrição:", descricao);
    console.log("Status:", status);
});

document.querySelector('.dataTable').addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-confirmar')) {
        const row = event.target.closest('tr');
        const statusSelect = row.querySelector('.status-select');
        const status = statusSelect.value;

        if (status === "Concluído") {
            alert("A tarefa foi confirmada como concluída.");
        } else if (status === "Pendente") {
            alert("A tarefa foi confirmada como pendente.");
        }
    }
});

document.querySelector('.dataTable').addEventListener('click', function (event) {
    if (event.target.classList.contains('remove-btn')) {
        const row = event.target.closest('tr');
        row.remove();
    }
});
