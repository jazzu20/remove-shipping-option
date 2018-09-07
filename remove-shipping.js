
var steps = document.title;

if(steps === "Payment method - ellanacosmetics-staging - Checkout") {

var str = document.querySelector('.review-block .review-block__content').innerText;
var a = str.search("Store Pickup");

if(a === "Store Pickup") {
document.querySelector('[data-select-gateway="7732396121"]').style.display = "none";
}
}
