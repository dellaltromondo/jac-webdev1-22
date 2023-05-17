function calculator(num1, operatore, num2) 
{
    switch (operatore) 
    {
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            return num1 / num2;
            break;
        default:
            return "Operatore non valido";           
    }
}

function Calcola() 
{
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
        var operatore = document.getElementById("operator").value;
        var result = calculator(num1, operatore, num2);
        document.getElementById("result").innerHTML = result;
}