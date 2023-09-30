let progresso = 0;

const historia = [
    {
        texto: "Você está no início da jornada. Escolha um caminho:",
        escolhas: [
            { texto: "Caminho da Esquerda", caminho: 1 },
            { texto: "Caminho da Direita", caminho: 2 }
        ]
    },
    {
        texto: "O caminho se mostra vívido e cheio de cores. Um cheiro de café da manhã inunda seus sentidos. Você...",
        escolhas: [
            { texto: "Segue o cheiro", caminho: 3 },
            { texto: "Resolve não se aproximar e seguir seu caminho", caminho: 4 }
        ]
    },
    {
        texto: "Ao olhar para trás você não vê a divisão dos caminhos, parece que só existia este caminho. E você caminha, seguro de que está na direção certa. Até que...",
        escolhas: [
            { texto: "Tem a atenção atraída por um sapo que pula num riacho ao lado, o qual você, misteriosamente, não havia percebido?", caminho: 5 },
            { texto: "Percebe que não está mais sozinho em seu caminho!", caminho: 6 }
        ]
    },
    // Adicione mais passos da história conforme necessário...
];

function mostrarPasso(progresso) {
    const passoAtual = historia[progresso];
    let botoesEscolha = passoAtual.escolhas.map(escolha => `
        <button class="btnEscolha" onclick="escolhaCaminho(${escolha.caminho})">${escolha.texto}</button>
    `).join('');

    let botaoReiniciar = '';
    if (progresso > 0) {
        botaoReiniciar = '<button class="btnReiniciar" onclick="restart()">Reiniciar</button>';
    }
    document.getElementById('story').innerHTML = `
        <p>${passoAtual.texto}</p>
        ${botoesEscolha}
        ${botaoReiniciar}
    `;
}

function escolhaCaminho(caminho) {
    progresso = caminho;
    mostrarPasso(progresso);
}

function restart() {
    progresso = 0;
    mostrarPasso(progresso);
}

// Iniciar a história
document.addEventListener('DOMContentLoaded', function() {
    mostrarPasso(progresso);
});


// Modal
function toggleModal(){
    var modal = document.getElementById('myModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}
