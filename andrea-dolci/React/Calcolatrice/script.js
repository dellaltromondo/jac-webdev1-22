function calc(operator) {
    const a = document.getElementById('n1');
    const b = document.getElementById('n2');

    const res = document.getElementById('result');
    
    switch(operator) {
        case '+': {
            const c = parseInt(a.value) + parseInt(b.value);
            const paragraph = document.createElement('p');
            paragraph.innerText = 'Il risultato della somma tra ' + a.value + ' e ' + b.value + ' è ' + c;
            res.appendChild(paragraph);
            break;
        }
        case '-': {
            const c = parseInt(a.value) - parseInt(b.value);
            const paragraph = document.createElement('p');
            paragraph.innerText = 'Il risultato della differenza tra ' + a.value + ' e ' + b.value + ' è ' + c;
            res.appendChild(paragraph);
            break;
        }
        case '*': {
            const c = parseInt(a.value) * parseInt(b.value);
            const paragraph = document.createElement('p');
            paragraph.innerText = 'Il risultato del prodotto tra ' + a.value + ' e ' + b.value + ' è ' + c;
            res.appendChild(paragraph);
            break;
        }
        case '/': {
            const c = parseInt(a.value) / parseInt(b.value);
            const paragraph = document.createElement('p');
            paragraph.innerText = 'Il risultato della divisione tra ' + a.value + ' e ' + b.value + ' è ' + c;
            res.appendChild(paragraph);
            break;
        }

    }
}