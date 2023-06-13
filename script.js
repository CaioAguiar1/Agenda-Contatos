const form = document.getElementById('form-atividade');
const contactList = document.getElementById('contact-list');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const nomeContato = document.getElementById('Nome-Contato').value;
    const numeroContato = document.getElementById('Numero-Contato').value;

    // Cria uma nova linha na tabela com os dados do contato
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${nomeContato}</td>
        <td>${numeroContato}</td>
    `;
    contactList.appendChild(newRow);

    // Limpa os campos do formulário
    form.reset();
});