// Collect user info
var userAge = parseInt(prompt("Inserisci la tua èta"));
console.log("userAge: ", userAge);

var kilometers = parseFloat(prompt("Inserisci i chilometri da percorrere"));
console.log("kilometers: ", kilometers);

// Data validation

if ((userAge <= 0) || (kilometers <= 0)) {
    alert("ERRORE: Hai inserito dei valori negativi o uguali a zero")
    window.location.reload()
}

var discount;
var ticketPrice;

// Discount calc

if (userAge >= 18 && userAge <= 65) {
    discount = 1  
} else if (userAge < 18) {
    discount = 0.8;
} else {
    discount = 0.6
}


console.log("discount: ", discount)

// Ticket price calc
ticketPrice = kilometers * 0.21
ticketPrice = ticketPrice * discount
console.log("ticketPrice: ", ticketPrice);

var price = document.getElementById("price");
price.innerHTML = ticketPrice.toFixed(2);