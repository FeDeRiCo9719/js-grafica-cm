/* Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.
Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.
Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso. */


// DICHIARARE LA FUNZIONE DI DISEGNO CELLE

// 1. Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco
// var NumCelle = parseInt(prompt("Inserisci un numero da 1 a 100"));
// // verifica numero
// while ( NumCelle<1 || NumCelle>100 || isNaN(NumCelle) ) {
//     alert("Ops.. Riprova");
//     NumCelle = parseInt(prompt("Inserisci un numero da 1 a 100"));
// }

// 2. Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga
// a. creazione programma disegno celle => numero celle = numero dato dall'utente => ciclo definito
for ( var i = 1; i <= 100; i++  ) {
    // selezionare l'elemento tramite id e inserire al suo interno del codice html
    document.getElementById("Campo").innerHTML += `<div class="uno"></div>`
    console.log(i);
}

// 3. Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso
