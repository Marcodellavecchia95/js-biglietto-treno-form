// const travelDistance = parseInt(prompt("Quanti km dovrai effettuare?"));
// const userAge = parseInt(prompt("Quanti anni hai?"));
// let outputText;
// console.log(travelDistance, userAge);

// const finalPrice = travelDistance * 0.21;
// let discountUnder18 = (finalPrice * 20) / 100;
// let discountOver65 = (finalPrice * 40) / 100;
// if (userAge < 18) {
//   outputText =
//     "Il biglietto per minorenni costa €" +
//     (finalPrice - discountUnder18).toFixed(2);
// } else if (userAge > 65) {
//   outputText =
//     "Il biglietto per Over 65 costa €" +
//     (finalPrice - discountOver65).toFixed(2);
// } else {
//   outputText = "Il biglietto costa €" + finalPrice.toFixed(2);
// }

// alert(outputText);

const fullNameElement = document.getElementById("full-name");
const distanceElement = document.getElementById("distance");
const ageElement = document.getElementById("age");
const formElement = document.getElementById("user-data");
let outputNameElement = document.getElementById("output-name");
let finalPriceOutputElement = document.getElementById("final-price");
const priceElement = document.querySelector(".price");
const ticketTypeElement = document.getElementById("ticket-type");
let coachNumberElement = document.getElementById("coach-number");
let ticketNumberElement = document.getElementById("ticket-number");
const myTicketElement = document.getElementById("my-ticket");
console.log(myTicketElement);

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = fullNameElement.value;
  const distance = parseInt(distanceElement.value);
  const age = parseInt(ageElement.value);
  const finalPrice = distance * 0.21;
  let priceUnder18 = finalPrice * 0.8;
  let priceOver65 = finalPrice * 0.6;

  if (age < 18) {
    outputNameElement.innerText = name;
    finalPriceOutputElement.innerText = ` ${priceUnder18.toFixed(2)}€`;
    ticketTypeElement.innerText = "Sconto Under 16";
    coachNumberElement.innerHTML = Math.floor(Math.random() * 10) + 1;
    ticketNumberElement.innerHTML = Math.floor(Math.random() * 10000) + 1;
    myTicketElement.classList.remove("d-none");
    // console.log(name);
    // console.log(priceUnder18.toFixed(2));
  } else if (age > 65) {
    outputNameElement.innerText = name;
    finalPriceOutputElement.innerText = ` ${priceUnder18.toFixed(2)}€`;
    ticketTypeElement.innerText = "Sconto Over 65";
    coachNumberElement.innerHTML = Math.floor(Math.random() * 10) + 1;
    ticketNumberElement.innerHTML = Math.floor(Math.random() * 10000) + 1;
    myTicketElement.classList.remove("d-none");
    // console.log(name);
    // console.log(priceOver65.toFixed(2));
  } else {
    outputNameElement.innerText = name;
    finalPriceOutputElement.innerText = ` ${priceUnder18.toFixed(2)}€`;
    ticketTypeElement.innerText = "Biglietto Standard";
    coachNumberElement.innerHTML = Math.floor(Math.random() * 10) + 1;
    ticketNumberElement.innerHTML = Math.floor(Math.random() * 10000) + 1;
    myTicketElement.classList.remove("d-none");
    // console.log(name);
    // console.log(finalPrice);
  }
});
