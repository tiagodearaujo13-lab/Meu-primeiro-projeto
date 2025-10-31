console.log("O ficheiro script.js foi carregado com sucesso!");




const nomeReceita = "Arroz de Pato à Moda Antiga";


const tempoPreparoMinutos = 90;
const numeroIngredientes = 7;


const eReceitaDeDomingo = true;
const eDificilDeFazer = false;


const listaIngredientes = [
    "1 pato grande",
    "2 Chávinas de arroz",
    "1 cebola",
    "2 dentes de alho",
    "Chouriço",
    "Bacon",
    "Sal"
];


const receitaCompleta = {
    nome: nomeReceita,
    tempo: tempoPreparoMinutos,
    ingredientes: listaIngredientes,
    eDeDomingo: eReceitaDeDomingo
};


console.log("--- Ficha Técnica da Receita ---");

console.log("Nome da Receita:");
console.log(nomeReceita);

console.log("É uma receita de Domingo?");
console.log(eReceitaDeDomingo);

console.log("O terceiro ingrediente da lista é:");
console.log(listaIngredientes[2]); 

console.log("A receita completa (objeto):");
console.log(receitaCompleta);



function avaliarTempoDePreparo(tempo) {
    
    console.log("A avaliar uma receita com " + tempo + " minutos.");


    if (tempo < 30) {
        return "Receita Rápida";
    } else if (tempo <= 60) {
        return "Receita com tempo médio";
    } else {
        return "Receita Demorada (prepare-se!)";
    }
}


const resultadoDaNossaReceita = avaliarTempoDePreparo(tempoPreparoMinutos);

console.log("--- Avaliação da Receita ---");

console.log(resultadoDaNossaReceita); 


const resultadoReceitaFacil = avaliarTempoDePreparo(20);
console.log("Resultado para 20 min:"); 
console.log(resultadoReceitaFacil);

console.log("--- Imprimindo a Lista de Ingredientes ---");

for (let i = 0; i < listaIngredientes.length; i++) {
    console.log("Item " + (i + 1) + ": " + listaIngredientes[i]);
}

console.log("--- Fim da Lista ---");











console.log("--- Teste para ver o Js ---");

function calcularIdade(anoDeNascimento) {
    const anoAtual = 2025;
    let idade = anoAtual - anoDeNascimento;
    return idade;
}

const idadeDoTiago = calcularIdade(1990);
const idadeDANayma = calcularIdade(1991);

console.log("A idade do Tiago é:");
console.log(idadeDoTiago);

console.log("A idade Da Nayma é:");
console.log(idadeDANayma);


console.log("--- Aula 10 Começou ---");

const elementoTitulo = document.querySelector('#titulo-da-receita');

console.log("Elemento que o Js agarrou");
console.log(elementoTitulo);


console.log("O titulo NÃO foi mudado automaticamente.");

console.log("--- Aula 11 Começou! ---");

const elementoBotao = document.querySelector('#botao-mudar');

function oQueFazerQuandoClicar() {
    console.log("Foi Clicado")

    elementoTitulo.textContent = "Este Título foi MUDADO PELO JS!";
    elementoBotao.textContent = "Obrigado por clicar!";
}

elementoBotao.addEventListener('click', oQueFazerQuandoClicar);

