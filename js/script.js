document.addEventListener("DOMContentLoaded", function() {
    const especialidadeSelect = document.getElementById('especialidade');
    const abordagemSelect = document.getElementById('abordagem');

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

    opcoesEspecialidade.forEach(function(especialidade) {
        const option = document.createElement('option');
        option.value = especialidade;
        option.textContent = especialidade;
        especialidadeSelect.appendChild(option);
    });

    opcoesAbordagem.forEach(function(abordagem) {
        const option = document.createElement('option');
        option.value = abordagem;
        option.textContent = abordagem;
        abordagemSelect.appendChild(option);
    });

});