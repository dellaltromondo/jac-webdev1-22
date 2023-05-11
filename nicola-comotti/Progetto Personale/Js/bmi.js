async function calcolaBMI() {

    const tabellaBmi = await (await fetch ('Utils/bmi.json')).json()
    console.log(tabellaBmi)

    const sesso = document.getElementById('sesso').value;
    const eta = document.getElementById('eta').value;
    const altezza = document.getElementById('altezza').value;
    const peso = document.getElementById('peso').value;

    if (sesso == 'none') {
        errorPopup("Inserisci il tuo SESSO per il calcolo del BMI");
        return;
    }

    if (eta == 0) {
        errorPopup("Inserisci la tua ETÀ per il calcolo del BMI");
        return;
    }

    if (altezza == 0) {
        errorPopup("Inserisci la tua ALTEZZA per il calcolo del BMI");
        return;
    }

    if (peso == 0) {
        errorPopup("Inserisci il tuo PESO per il calcolo del BMI");
        return;
    }

    const bmi = peso / ((altezza / 100) * (altezza / 100));
    let condizione = "";
    let pesoMax = 0;
    let pesoMin = 0;

    if (eta < 18) {
        if (sesso === "maschio") {
            document.getElementById('bmi-m-u18').style.display = 'inline-block';
            pesoMax = 25 * ((altezza / 100) * (altezza / 100));
            pesoMin = 18.5 * ((altezza / 100) * (altezza / 100));
            if (bmi < 16.5) {
                condizione = "Grave sottopeso";
            } else if (bmi >= 16.5 && bmi < 18.5) {
                condizione = "Sottopeso";
            } else if (bmi >= 18.5 && bmi < 25) {
                condizione = "Normopeso";
            } else if (bmi >= 25 && bmi < 30) {
                condizione = "Sovrappeso";
            } else if (bmi >= 30 && bmi < 35) {
                condizione = "Obeso di primo grado";
            } else if (bmi >= 35 && bmi < 40) {
                condizione = "Obeso di secondo grado";
            } else {
                condizione = "Obeso di terzo grado";
            }
        } else if (sesso === "femmina") {
            document.getElementById('bmi-f-u18').style.display = 'inline-block';
            pesoMax = 23 * ((altezza / 100) * (altezza / 100));
            pesoMin = 17 * ((altezza / 100) * (altezza / 100));
            if (bmi < 16) {
                condizione = "Grave Sottopeso";
            } else if (bmi >= 16 && bmi < 17) {
                condizione = "Sottopeso";
            } else if (bmi >= 17 && bmi < 23) {
                condizione = "Normopeso";
            } else if (bmi >= 23 && bmi < 27) {
                condizione = "Sovrappeso";
            } else if (bmi >= 27 && bmi < 32) {
                condizione = "Obesa di primo grado";
            } else if (bmi >= 32 && bmi < 37) {
                condizione = "Obesa di secondo grado";
            } else {
                condizione = "Obesa di terzo grado";
            }
        }
    } else {
        if (sesso === "maschio") {
            document.getElementById('bmi-m-ad').style.display = 'inline-block';
            pesoMax = 25 * ((altezza / 100) * (altezza / 100));
            pesoMin = 18.5 * ((altezza / 100) * (altezza / 100));
            if (bmi < 16) {
                condizione = "Grave Sottopeso";
            } else if (bmi >= 16 && bmi < 18.5) {
                condizione = "Sottopeso";
            } else if (bmi >= 18.5 && bmi < 25) {
                condizione = "Normopeso";
            } else if (bmi >= 25 && bmi < 30) {
                condizione = "Sovrappeso";
            } else if (bmi >= 30 && bmi < 35) {
                condizione = "Obeso di primo grado";
            } else if (bmi >= 35 && bmi < 40) {
                condizione = "Obeso di secondo grado";
            } else {
                condizione = "Obeso di terzo grado";
            }
        } else if (sesso === "femmina") {
            document.getElementById('bmi-f-ad').style.display = 'inline-block';
            pesoMax = 25 * ((altezza / 100) * (altezza / 100));
            pesoMin = 18.5 * ((altezza / 100) * (altezza / 100));
            if (bmi < 16) {
                condizione = "Grave Sottopeso";
            } else if (bmi >= 16 && bmi < 18.5) {
                condizione = "Sottopeso";
            } else if (bmi >= 18.5 && bmi < 25) {
                condizione = "Normopeso";
            } else if (bmi >= 25 && bmi < 30) {
                condizione = "Sovrappeso";
            } else if (bmi >= 30 && bmi < 35) {
                condizione = "Obesa di primo grado";
            } else if (bmi >= 35 && bmi < 40) {
                condizione = "Obesa di secondo grado";
            } else {
                condizione = "Obesa di terzo grado";
            }
        }
    }

    document.getElementById('bmi').innerText = (Math.round(bmi * 100) / 100).toString();
    document.getElementById('condizione').innerText = condizione;

    document.getElementById('pesoMin').innerText = (Math.round(pesoMin * 100) / 100).toString();
    document.getElementById('pesoMax').innerText = (Math.round(pesoMax * 100) / 100).toString();

}