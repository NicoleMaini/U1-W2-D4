/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato. (lato * lato)
*/

function area(l1, l2) {
    return l1 * l2;
}
console.log(area(5,3));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(a, b) {
    let result = a + b
    if(a === b){
     result = (a + b) * 3;
    } 
    return result;
}
console.log(crazySum(6, 6));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito 
 come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito 
 sia maggiore di 19.
*/

function crazyDiff(a){
    let result = Math.abs(a - 19);
    if(a > 19){
    result *= 3;
    }
    return result;
}

console.log(crazyDiff(40, 19));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna 
 true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n){
    if(n >= 20 && n <= 100 || n === 400){
        console.log("E' true");
    } else {
        console.log("E' false");
    }
}
boundary(100)


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(abs) {
    if(abs[0] === "Epicode") {
        console.log(abs);
    } else {
        console.log("Epicode", abs);
    }
}

epify("by IFOA")

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(a){
    if(a % 3 === 0){
    result = "Questo numero: " + a + " è un multiplo di 3" ;
    } else if (a % 7 === 0){
        result = "Questo numero: " + a + " è un multiplo di 7" ;
    } else {
        result = "Questo numero: " + a + " non è un multiplo né di 3 né di 7" ;
    }
    return result
}

console.log(check3and7(9));


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come 
 parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(a){
    let newArray = [];
    for(let i = a.length-1; i <= 0; i--){
        newArray = newArray.push(a[i]);
    }
    return newArray;
}
console.log(reverseString("EPICODE"));


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(str){
    let phraseArr =  str.split(" ");
    console.log(phraseArr);
    for(let i = 0; i < phraseArr.length; i++){
        let wordArr = [];
        wordArr.push(phraseArr[i]);
        for (let n = 0; n < wordArr.length; n++) {
            wordArr[0] = wordArr[0].toUpperCase();
        }
        console.log(wordArr);
    }
}

upperFirst("non ci siamo")

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. 
 La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
function cutString(a){
    let b = a.split(" ")
    console.log(b);
}

cutString("non ci siamo")

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(){}
