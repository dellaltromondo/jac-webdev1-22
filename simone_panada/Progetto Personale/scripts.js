//crea la sezione della lista con al suo interno i tiri
function CreateNewRollSection(finalResult) {
   const ul = document.getElementById("DiceRolls");
   const li = document.createElement("li");
   const writtenName = document.createElement("p");
   const dices = document.createElement("p");
   const result = document.createElement("p");
   const sum = document.createElement("p");
   ul.appendChild(li);
   li.appendChild(writtenName);
   li.appendChild(dices);
   li.appendChild(result);
   li.appendChild(sum);
   const name = document.getElementById("inpName");
   const diceRolled = document.getElementById("inpDice").value;
   const diceNumber = document.getElementById("inpDicesNumber");
   writtenName.innerText = "Player: " + name.value;
   dices.innerText = "Dices Rolled: " + diceNumber.value + "D"+ diceRolled;
   result.innerHTML = "Result: " + finalResult[0].join(", ");
   sum.innerHTML = "Sum: " + finalResult[1];
}
//genera il lancio
function generateRoll(diceRolled, diceNumber) 
{
   let results = [];
   for (let i=0; i < diceNumber; i++) 
    {
    let randomNumber = Math.floor(Math.random() * diceRolled) + 1;
    results.push(randomNumber);
    }
   let sum = results.reduce((a, b) => a + b, 0);
   return [results, sum];
}

//interazioni con la pagina
const buttonRoll = document.getElementById("RollIt");
var maxinput = document.getElementById("inpDicesNumber");

//avvia il lancio dei dadi quando si preme il bottone e controlla che il numero di dadi massimo sia nei limiti consentiti
RollIt.addEventListener("click", function(buttonRoll) 
{
   buttonRoll.preventDefault();
   if (maxinput.value > 25) 
            {
               window.alert("Max Value Allowed is 25");
               return;
            }
   const playerName = document.getElementById("inpName");
   const diceRolled = document.getElementById("inpDice").value;
   const diceNumber = document.getElementById("inpDicesNumber").value;
   let finalResult = generateRoll(diceRolled, diceNumber);
   CreateNewRollSection(finalResult);
});


//refresh page
const buttonRefresh = document.getElementById("Refresh");
buttonRefresh.addEventListener("click",function(e)
{
   location.reload();
});




