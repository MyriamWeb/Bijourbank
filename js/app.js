import { user } from "./user.js";

document.querySelector("#firstname").textContent = user.firstname;


document.querySelector('.envoi').addEventListener('click', function(event){

// Get the value of the transaction
let montant = document.getElementById("montant").value;
// Inspect the sign of the operation (- / +)
let operator = document.getElementById("operation");
// Get the name of the transaction
let typeArgent = document.getElementById("intitule").value;
// Get the total Credit
let totalCredit = document.getElementById("totalCredit");
// Get the total Debit
let totalDebit = document.getElementById("totalDebit");

//
let deviseTotal = document.getElementById("devise");
// Get the Master Total
let masterTotal = document.getElementById("total");
// Recupere liste credit
let ulc = document.getElementById("detailsCredit");
// Recupere liste debit
let uld = document.getElementById("detailsDebit");
// Pourcentage Debit
let percentDeb = document.getElementById("totalDebitPercent");
// Devise 
let devise = " €";

event.preventDefault();
console.log(typeArgent);

if (operator.value === "+"){
    console.log(montant);
    var newLi = document.createElement('li');
    ulc.appendChild(newLi);
    var newSpan = document.createElement('span');
    newSpan.setAttribute("class", "intitule");
    newLi.appendChild(newSpan);
    newSpan.innerHTML = typeArgent;
    var newSpan2 = document.createElement('span');
    newSpan2.setAttribute("class", "montant txt-color-gazoil");
    newLi.appendChild(newSpan2);
    newSpan2.innerHTML = Number(montant)+devise;
    totalCredit.innerHTML = Number(totalCredit.innerHTML) + Number(montant);
    console.log(totalCredit.innerHTML);
}
else{
   console.log(montant);
   var newLi = document.createElement('li');
   uld.appendChild(newLi);
   var newSpan = document.createElement('span');
   newSpan.setAttribute("class", "intitule");
   newLi.appendChild(newSpan);
   newSpan.innerHTML = typeArgent;
   var newSpan2 = document.createElement('span');
   newSpan2.setAttribute("class", "montant txt-color-red");
   newLi.appendChild(newSpan2);
   newSpan2.innerHTML = Number(montant)+devise;
   var newSpan3 = document.createElement('span');
   newSpan3.setAttribute("class", "percent txt-color-red");
   newLi.appendChild(newSpan3);
   newSpan3.innerHTML = ((Number(montant)/Number(totalCredit.innerHTML))*100).toFixed(2) + " %" ;
   totalDebit.innerHTML = Number(totalDebit.innerHTML) + Number(montant) ;
   console.log(totalDebit.innerHTML);
}

masterTotal.innerHTML = (Number(totalCredit.innerHTML) - Number(totalDebit.innerHTML)).toFixed(2);
percentDeb.innerHTML = (Number(totalDebit.innerHTML)/Number(totalCredit.innerHTML)*100).toFixed(2) +" %";

if (Number(masterTotal.innerHTML) < 0){
        masterTotal.style.color ='red';
        deviseTotal.style.color = 'red';
}

else {
    masterTotal.style.color ='white';
    deviseTotal.style.color = 'white';
}

});
