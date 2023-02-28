// objeto, entre chaves uma variavel com varias variaveis   
var rafa = {nome: "Rafa", vitorias:0,  empates:0, derrotas:0, pontos:0 };
var paulo = {nome: "Paulo", vitorias:0,  empates:0, derrotas:0, pontos:0 };
var vitor = {nome: "Vitor", vitorias:0,  empates:0, derrotas:0, pontos:0 };
var mauricio = {nome: "Maue Miau", vitorias:0,  empates:0, derrotas:0, pontos:0 };


rafa.pontos = calculaPontos(rafa);

paulo.pontos = calculaPontos(paulo); 
vitor.pontos = calculaPontos(vitor); 
mauricio.pontos = calculaPontos(mauricio); 

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates;
   return pontos;
}

// lista de jogadores 
    var jogadores = [rafa, paulo, vitor, mauricio]

function exibirJogadoresNaTela(jogadores) {
    var elemento = "" // variavél string sem valor definido pra definir abaixo
    for (var i = 0; i < jogadores.length ; i++) {
elemento += "<tr><td>" + jogadores[i].nome + "</td>"
elemento += "<td>" + jogadores[i].vitorias + "</td>"
elemento += "<td>" + jogadores[i].empates +  "</td>"
elemento += "<td>" + jogadores[i].derrotas +  "</td>"
elemento += "<td>" + jogadores[i].pontos + "</td>"
elemento += "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>"
elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
elemento += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td>"
elemento +=  "</tr>"
    }
var tabelaJogadores = document.getElementById("tabelaJogadores");
tabelaJogadores.innerHTML = elemento;
}

exibirJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
var jogador = jogadores[i];
jogador.vitorias++;
jogador.pontos = calculaPontos(jogador)
exibirJogadoresNaTela(jogadores)

}

function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
    var jogador = jogadores[i]
    jogador.derrotas++;
    exibirJogadoresNaTela(jogadores)
}