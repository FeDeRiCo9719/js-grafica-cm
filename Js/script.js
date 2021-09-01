/* Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.
Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.
Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso. */

// 1. Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco
// 2. Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga
// 3. Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso

// DICHIARARE LA FUNZIONE DI DISEGNO CELLE
// a. creazione programma disegno celle => numero celle = numero dato dall'utente => ciclo definito
function CreateCell(num) {
    
    for ( var i = 1; i <= num; i++  ) {
        // selezionare l'elemento tramite id e inserire al suo interno del codice html
        var cell = document.getElementById("Campo").innerHTML += `<div class="cella">${i}</div>`
    }

    return cell
}

// 1. Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco
var NumCelle = parseInt(prompt("Inserisci un numero da 1 a 100"));
// verifica numero
while ( NumCelle<1 || NumCelle>100 || isNaN(NumCelle) ) {
    alert("Ops.. Riprova");
    NumCelle = parseInt(prompt("Inserisci un numero da 1 a 100"));
}

// 2. Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga
// a. Richiamo funzione
var Cells = CreateCell(NumCelle);

// 3. Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso
