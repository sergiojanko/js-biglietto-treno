var userAge = parseInt(prompt("Inserisci la tua èta"));
console.log(userAge);

var kilometers = parseInt(prompt("Inserisci i chilometri da percorrere"));
console.log(kilometers);

var discount = 1;

if (userAge < 18) {
    discount  =  20 / 100;
} else if (userAge > 65) {
    discount = 40 / 100;
}
