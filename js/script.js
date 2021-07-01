// Collect user info
var userAge = parseInt(prompt("Inserisci la tua èta"));
console.log("userAge: ", userAge);

var kilometers = parseInt(prompt("Inserisci i chilometri da percorrere"));
console.log("kilometers: ", kilometers);

var discount = 1;
var ticketPrice = kilometers * 0.21

// Discount calc
if (userAge < 18) {
    discount  =  20 / 100;
} else if (userAge > 65) {
    discount = 40 / 100;
}
console.log("ticketPrice: ", ticketPrice)
console.log("discount: ", discount)

// Ticket price calc
ticketPrice = ticketPrice - (ticketPrice * discount);
console.log("ticketPrice: ", ticketPrice);