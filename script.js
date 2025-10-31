console.log("O ficheiro script.js foi carregado com sucesso!");

const nomeReceita ="Arroz de Pato á Moda Antiga";

const tempoPreparoMinutos = 90;
const numeroIngredientes = 7;

const eReceitaDeDomingo = true;
const eDificilDeFazer = false;

const listaIngredientes = [
    "1 pato grande", 
    "2 Chávina de arroz", 
    "1 cebola", 
    "2 dentes de alho", 
    "Chouriço", 
    "Bacon",
    "sal"
];

const receitaCompleta = {
    nome: nomeReceita, 
    tempo: tempoPreparoMinutos, 
    listaIngredientes: listaIngredientes,
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
