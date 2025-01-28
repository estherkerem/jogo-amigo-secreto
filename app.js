// Lista para armazenar os nomes dos amigos//
let amigos = [];
let nomesSorteados = [];

// Função para adicionar um amigo//
function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nome = inputAmigo.value.trim();

    // Regras://
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    if (!isNaN(nome)) {
        alert("Nomes não podem ser números!");
        return;
    }
    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado.");
        return;
    }

    // Adiciona o nome à lista e limpa o campo de entrada//
    amigos.push(nome);
    inputAmigo.value = "";

    // Exibe lista de amigos na tela//
    atualizarLista();
}

// Função para atualizar a lista de amigos na interface//
function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // Cria um elemento <li>
        li.textContent = amigos[i]; // Adiciona o texto do nome no <li>
        listaAmigos.appendChild(li); // Insere o <li> na <ul>
    }
}

// Função para sortear um amigo//
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos na lista para sortear.");
        return;
    }

    // Sorteio aleatório de amigos//
    let indexSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indexSorteado];

    // Exibe o amigo sorteado na tela//
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpa o resultado//

    let li = document.createElement("li");
    li.textContent = `O amigo sorteado é: ${amigoSorteado}`;
    resultado.appendChild(li);

    // Remove o nome sorteado da lista de amigos para evitar repetições//
    amigos.splice(indexSorteado, 1);
    //Remove nome sorteado na tela//
    atualizarLista();
}