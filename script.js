function escolhaCaminho(caminho) {
    if (caminho == 'esquerda'){
        document.getElementById('story').innerHTML = `
        <p>Seguindo pela esquerda você encontra o tesouro do Socialismo, camarada!</p>
        <button onclick="restart()">Reiniciar</button>
        `;
    } else if (caminho == 'direita'){
        document.getElementById('story').innerHTML = `
        <p>Seguindo pela direita você trabalha de forma miserável e precária enquanto seus donos prosperam, vivem bem, e estimulam seu ódio!</p>
        <button onclick="restart()">Reiniciar</button>
        `;

    }
}

function restart(){
    document.getElementById('story').innerHTML = `
    <p>Você está numa encruzilhada. Que caminho toma?</p>
    <button onclick="escolhaCaminho('esquerda')">Segue pela esquerda</button>
    <button onclick="escolhaCaminho('direita')">Segue pela direita</button>
    `;
}

function toggleModal(){
    var modal = document.getElementById('myModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}