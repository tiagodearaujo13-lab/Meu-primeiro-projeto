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