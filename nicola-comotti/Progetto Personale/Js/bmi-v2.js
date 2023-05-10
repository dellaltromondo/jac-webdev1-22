async function calcolaBMI() {
    const tabellaBmi = await fetch('Utils/bmi-v2.json').then(res => res.json());

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

    const bmi = peso / ((altezza / 100) ** 2);
    const bmiTableKey = `${sesso}_${eta < 18 ? 'u18' : 'ad'}`;
    const { pesoMin: pesoMin, pesoMax: pesoMax } = tabellaBmi[bmiTableKey];
    const condizione = tabellaBmi[bmiTableKey].intervalli.find(({ min, max, label }) => bmi >= min && bmi < max).condizione;
    const idImg = tabellaBmi[bmiTableKey].idImg;

    document.getElementById('bmi').innerText = bmi.toFixed(2);
    document.getElementById('condizione').innerText = condizione;
    document.getElementById('pesoMin').innerText = eval(pesoMin).toFixed(2);
    document.getElementById('pesoMax').innerText = eval(pesoMax).toFixed(2);
    const bmiImgs = document.getElementsByClassName('bmi-img');
    if (bmiImgs.length > 0) {
        for (var i = 0; i < bmiImgs.length; i++) {
            bmiImgs[i].style.display = 'none';
        }
    }
    document.getElementById(idImg).style.display = 'inline-block';
    document.getElementById('bmi').focus();
}