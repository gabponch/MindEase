document.addEventListener("DOMContentLoaded", function () {
    const especialidadeSelect = document.getElementById('especialidade');
    const abordagemSelect = document.getElementById('abordagem');

    // Adicionar opções de especialidades e abordagens
    const opcoesEspecialidade = [
        'Psicologia Clínica',
        'Psicologia Organizacional',
        'Neuropsicologia',
        'Psicologia Social'
    ];

    const opcoesAbordagem = [
        'Terapia Cognitivo-Comportamental (TCC)',
        'Psicanalítica',
        'Humanista',
        'Sistêmica',
        'Existencial',
        'Terapia Gestalt',
    ];

    opcoesEspecialidade.forEach(function (especialidade) {
        const option = document.createElement('option');
        option.value = especialidade;
        option.textContent = especialidade;
        especialidadeSelect.appendChild(option);
    });

    opcoesAbordagem.forEach(function (abordagem) {
        const option = document.createElement('option');
        option.value = abordagem;
        option.textContent = abordagem;
        abordagemSelect.appendChild(option);
    });

    




    function openChat(name, status) {
        document.getElementById("chat-window").style.display = "flex";
        document.getElementById("chat-name").innerText = name;
        document.getElementById("chat-status").innerText = status;
      }
      
      function sendMessage() {
        const input = document.getElementById("chat-input");
        const message = input.value.trim();
        if (message) {
          const chatMessages = document.getElementById("chat-messages");
          const messageElement = document.createElement("div");
          messageElement.classList.add("message", "sent");
          messageElement.textContent = message;
          chatMessages.appendChild(messageElement);
          input.value = "";
          chatMessages.scrollTop = chatMessages.scrollHeight;
        }
      }







      const gradeCalendario = document.getElementById("grade-calendario");
const mesAno = document.getElementById("mes-ano");
const btnAnterior = document.getElementById("btn-anterior");
const btnProximo = document.getElementById("btn-proximo");

let dataAtual = new Date();

function gerarCalendario(data) {
    // Configurar título
    const nomeMes = data.toLocaleString("pt-br", { month: "long" });
    const ano = data.getFullYear();
    mesAno.textContent = `${nomeMes.charAt(0).toUpperCase() + nomeMes.slice(1)} ${ano}`;

    // Limpar calendário
    gradeCalendario.innerHTML = `
        <div class="dia">Dom</div>
        <div class="dia">Seg</div>
        <div class="dia">Ter</div>
        <div class="dia">Qua</div>
        <div class="dia">Qui</div>
        <div class="dia">Sex</div>
        <div class="dia">Sab</div>
    `;

    // Calcular dias
    const primeiroDia = new Date(data.getFullYear(), data.getMonth(), 1).getDay();
    const ultimoDia = new Date(data.getFullYear(), data.getMonth() + 1, 0).getDate();

    // Preencher dias vazios no início
    for (let i = 0; i < primeiroDia; i++) {
        const vazio = document.createElement("div");
        vazio.classList.add("vazio");
        gradeCalendario.appendChild(vazio);
    }

    // Preencher dias do mês
    for (let dia = 1; dia <= ultimoDia; dia++) {
        const diaElemento = document.createElement("div");
        diaElemento.classList.add("dia-mes");
        diaElemento.textContent = dia;

        // Adicionar classes de exemplo (personalize aqui)
        if (dia === 4 || dia === 5 || dia === 6) diaElemento.classList.add("verde");
        if (dia === 12 || dia === 14) diaElemento.classList.add("vermelho");
        if (dia === 18) diaElemento.classList.add("amarelo");

        gradeCalendario.appendChild(diaElemento);
    }
}

// Navegar entre os meses
btnAnterior.addEventListener("click", () => {
    dataAtual.setMonth(dataAtual.getMonth() - 1);
    gerarCalendario(dataAtual);
});

btnProximo.addEventListener("click", () => {
    dataAtual.setMonth(dataAtual.getMonth() + 1);
    gerarCalendario(dataAtual);
});

// Inicializar
gerarCalendario(dataAtual);





});
