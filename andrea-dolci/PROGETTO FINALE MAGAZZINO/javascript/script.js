let contAliExpress = 0;
let contAmazon = 0;
let contBarilla = 0;

const arrayObjAliExpress = [
    {
        id: contAliExpress++,
        name: 'CARICATORE WIRELESS PER APPLE WATCH',
        quantity: 124,
        price: 19.74,
        description: 'Orologio originale caricatore rapido magnetico tipo C per Apple Watch Series8 7 6 5 4 3 2 SE USB C cavo di ricarica rapida Wireless cavo Dock',
        date: new Date()
    },
    {
        id: contAliExpress++,
        name: 'HARD DISK ESTERNO',
        quantity: 32,
        price: 40.15,
        description: '128TBUSB 3.0 hard disk esterno drive 2.5 pollici SSD accessori per computer SATA hard disk storage device desktop notebook universale',
        date: new Date()
    },
    {
        id: contAliExpress++,
        name: 'OROLOGIO LIGE UOMO',
        quantity: 89,
        price: 153.06,
        description: 'LIGE uomini orologio Top Brand originale sport quarzo Mens orologi in acciaio pieno orologio da polso cronografo impermeabile da uomo Relogio Masculino',
        date: new Date()
    },
    {
        id: contAliExpress++,
        name: 'CUFFIE BLUETOOTH WIRELESS',
        quantity: 356,
        price: 93.95,
        description: 'COWIN E7 cuffie Bluetooth Wireless con cancellazione attiva del rumore cuffie Bluetooth 5.0 con bassi profondi con microfono 30 ore di riproduzione',
        date: new Date()
    }
    
];

const arrayObjAmazon = [
    {
        id: contAmazon++,
        name: 'SONGMICS VASAGLE LIBRERIA SCAFFALE',
        quantity: 22,
        price: 62.99,
        description: 'Mobiletto Armadietto Mobile in Legno Pannelli di Particelle a 3 Ripiani 6 Scompartimenti Bianco LBC203D, ingegnerizzato, 65,5 x 30 x 97,5 cm',
        date: new Date()
    },
    {
        id: contAmazon++,
        name: 'ASPIRAPOLVERE GREENOTE',
        quantity: 243,
        price: 229.99,
        description: 'Greenote Aspirapolvere Senza Fili, 23000PA Scopa Elettrica Senza Fili Potente 4 in 1, 200W Duale Motore Brushless con LED, 35 minuti di autonomia，Aspirapolvere portatile leggero per la casa',
        date: new Date()
    },
    {
        id: contAmazon++,
        name: 'LAMPADA LED',
        quantity: 178,
        price: 29.99,
        description: 'Lampada da Scrivania LED Protezione Degli Occhi, lampada Touch Control Pieghevole per cameretta,ufficio, con porta di ricarica USB, 10 livelli di luminosità 5 modalità di illuminazione',
        date: new Date()
    },
    {
        id: contAmazon++,
        name: 'MICRO SD 64 GB',
        quantity: 69,
        price: 49.96,
        description: 'MICRO-SDXC 64GB ADATA PREMIER ONE RETAIL, W/ADAPTER, BLACK/GOLD, R/275,WR/155',
        date: new Date()
    }
    
];

const arrayObjBarilla = [
    {
        id: contBarilla++,
        name: 'CASERECCE N°287 GR.500',
        quantity: 104,
        price: 1.39,
        description: 'Le Casarecce Barilla si presentano arrotolate su se stesse e incurvate verso la punta. Grazie alla loro superficie liscia e delicatamente porosa, permettono di raccogliere , esaltandone il sapore al palato.',
        date: new Date()
    },
    {
        id: contBarilla++,
        name: 'GNOCCHETTI SARDI N°60 GR.500',
        quantity: 59,
        price: 1.18,
        description: 'La piccola dimensione degli Gnocchetti Sardi Barilla è studiata per dare una consistenza inimitabile, mentre la superficie rigata permette un perfetto legame con il sugo. Un primo piatto dal gusto inconfondibile e sempre appetitoso.',
        date: new Date()
    },
    {
        id: contBarilla++,
        name: 'MEZZE PENNE RIGATE N°70 GR.500',
        quantity: 300,
        price: 1.19,
        description: 'Il segreto della bontà delle Mezze Penne Barilla? La selezione di grani duri pregiati coltivati in tutta Italia e una forma più corposa, studiata per dare alle Mezze Penne Barilla uno spessore equilibrato e straordinaria consistenza.',
        date: new Date()
    },
    {
        id: contBarilla++,
        name: 'RIGATONI N°89 GR.500',
        quantity: 77,
        price: 1.20,
        description: 'Caratterizzati dalla rigatura sulla superficie esterna e dal diametro importante, i Rigatoni Barilla trattengono perfettamente il condimento su tutta la superficie, esterna ed interna, restituendone ogni sfumatura.',
        date: new Date()
    }
    
];

function toggle(idSection){

    contAliExpress = 0;
    contAmazon = 0;
    contBarilla  = 0;

    const sectionInvisible = document.getElementById(idSection);
    const sectionLogin = document.getElementById('login');
    
    let arrayToIterate = [];
    let tableId;

    switch(idSection){
        case 'aliExpress': {
            arrayToIterate = arrayObjAliExpress;
            tableId = 'aliExpressTab';
            break;
        }

        case 'amazon': {
            arrayToIterate = arrayObjAmazon;
            tableId = 'amazonTab';
            break;
        }

        case 'barilla': {
            arrayToIterate = arrayObjBarilla;
            tableId = 'barillaTab';
            break;
        }
    }
    
    const firstChildTable = document.getElementById(tableId).getElementsByTagName("tr")[0].cloneNode(true);
    const emptyTab = document.getElementById(tableId);
    emptyTab.innerHTML = '';
    emptyTab.appendChild(firstChildTable);


    for(let i = 0; i<arrayToIterate.length; i++) {
        createRow(arrayToIterate, i, tableId);
    }
    
    sectionInvisible.style.display = 'block';
    sectionLogin.style.display = 'none';

}


function createRow(arrayToShow, index, tableId){

    const table = document.getElementById(tableId);
    const row = document.createElement('tr');
    const idRow = document.createElement('td');
    const nameRow = document.createElement('td');
    const quantityRow = document.createElement('td');
    const priceRow = document.createElement('td');
    const descriptionRow = document.createElement('td');
    const dateRow = document.createElement('td');
    const iconRow = document.createElement('td');
    const iconEdit = document.createElement('i');
    iconEdit.setAttribute('class', 'fas fa-edit');
    const iconTrash = document.createElement('i');
    iconTrash.setAttribute('class', 'fas fa-trash-alt');
    idRow.innerText = arrayToShow[index].id;
    nameRow.innerText = arrayToShow[index].name;
    quantityRow.innerText = arrayToShow[index].quantity;
    priceRow.innerText = arrayToShow[index].price;
    descriptionRow.innerText = arrayToShow[index].description;
    dateRow.innerText = arrayToShow[index].date;


    switch(tableId){
        case 'aliExpressTab': {
            iconTrash.setAttribute('data-id', arrayToShow[index].id);
            iconTrash.setAttribute('onclick', `deleteRow(${arrayToShow[index].id}, "${tableId}")`);

            iconEdit.setAttribute('data-id', arrayToShow[index].id);
            iconEdit.setAttribute('onclick', `openEdit(${arrayToShow[index].id}, "${tableId}")`);

            break;
        }
        case 'amazonTab': {
            iconTrash.setAttribute('data-id', arrayToShow[index].id);
            iconTrash.setAttribute('onclick', `deleteRow(${arrayToShow[index].id}, "${tableId}")`);

            iconEdit.setAttribute('data-id', arrayToShow[index].id);
            iconEdit.setAttribute('onclick', `openEdit(${arrayToShow[index].id}, "${tableId}")`);

            break;
        }
        case 'barillaTab': {
            iconTrash.setAttribute('data-id', arrayToShow[index].id);
            iconTrash.setAttribute('onclick', `deleteRow(${arrayToShow[index].id}, "${tableId}")`);

            iconEdit.setAttribute('data-id', arrayToShow[index].id);
            iconEdit.setAttribute('onclick', `openEdit(${arrayToShow[index].id}, "${tableId}")`);
            
            break;
        }
        
    }

    row.appendChild(idRow);
    row.appendChild(nameRow);
    row.appendChild(quantityRow);
    row.appendChild(priceRow);
    row.appendChild(descriptionRow);
    row.appendChild(dateRow);

    iconRow.appendChild(iconEdit);
    iconRow.appendChild(iconTrash);
    
    row.appendChild(iconRow);

    table.appendChild(row);
        
    
}

function home(idSection){

    const sectionToMakeInvisible = document.getElementById(idSection);
    const sectionLogin = document.getElementById('login');
       
    sectionLogin.style.display = 'flex';
    sectionToMakeInvisible.style.display = 'none';

}

function deleteRow(idTrash, tableId){
    let arrayToDeleteFrom=[];
    
    switch(tableId){
        case 'aliExpressTab': {
            arrayToDeleteFrom = arrayObjAliExpress;
            idSection = 'aliExpress';
            break;
        }
        case 'amazonTab': {
            arrayToDeleteFrom = arrayObjAmazon;
            idSection = 'amazon';
            break;
        }
        case 'barillaTab': {
            arrayToDeleteFrom = arrayObjBarilla;
            idSection = 'barilla';
            break;
        }
    }

    const rowToDelete = arrayToDeleteFrom.findIndex(e => e.id === parseInt(idTrash));
    if(rowToDelete != -1)
        arrayToDeleteFrom.splice(rowToDelete, 1);
    // for(let i = 0; i < arrayToDeleteFrom.length; i++){
    //     if(arrayToDeleteFrom[i].id === parseInt(idTrash)){
    //         arrayToDeleteFrom.splice(i, 1);
            
    //     }
    // }
    toggle(idSection);

}

//per avere i parametri da passare alla funzione editRow
let idEditParameter;
let tableIdParameter;
let formParameter;

function openEdit(idEdit, tableId){
    idEditParameter = idEdit;
    tableIdParameter = tableId;

    let arrayToEditFrom=[];
    let form;

    //modifico titolo e bottone
    switch(tableId){
        case 'aliExpressTab': {
            document.getElementById('insertButtonAliExpress').style.display = "none";
            modalAliExpress.style.display = "block";
            document.getElementById('h1AliExpress').innerText = "Modifica prodotto";
            document.getElementById('editButtonAliExpress').style.display = "block";
            arrayToEditFrom = arrayObjAliExpress; 
            form = document.getElementsByClassName('modal-form')[0]; 
            break;
        }
        case 'amazonTab': {
            document.getElementById('insertButtonAmazon').style.display = "none";
            modalAmazon.style.display = "block";
            document.getElementById('h1Amazon').innerText = "Modifica prodotto"; 
            document.getElementById('editButtonAmazon').style.display = "block";
            arrayToEditFrom = arrayObjAmazon; 
            form = document.getElementsByClassName('modal-form')[1]; 
            break;
        }
        case 'barillaTab': {
            document.getElementById('insertButtonBarilla').style.display = "none";
            modalBarilla.style.display = "block";
            document.getElementById('h1Barilla').innerText = "Modifica prodotto";
            document.getElementById('editButtonBarilla').style.display = "block";
            arrayToEditFrom = arrayObjBarilla; 
            form = document.getElementsByClassName('modal-form')[2]; 
            break;
        }
        
    }

    let product = arrayToEditFrom[idEdit].name;
    let quantity = arrayToEditFrom[idEdit].quantity;
    let price = arrayToEditFrom[idEdit].price;
    let description = arrayToEditFrom[idEdit].description;

    //logica per aprire il form con dentro i dati
    switch(tableId){
        case 'aliExpressTab': {
            document.getElementById('productAliExpress').value = product;
            document.getElementById('quantityAliExpress').value = quantity;
            document.getElementById('priceAliExpress').value = price;
            document.getElementById('descriptionAliExpress').value = description;
            break;
        }
        case 'amazonTab': {
            document.getElementById('productAmazon').value = product;
            document.getElementById('quantityAmazon').value = quantity;
            document.getElementById('priceAmazon').value = price;
            document.getElementById('descriptionAmazon').value = description;
            break;
        }
        case 'barillaTab': {
            document.getElementById('productBarilla').value = product;
            document.getElementById('quantityBarilla').value = quantity;
            document.getElementById('priceBarilla').value = price;
            document.getElementById('descriptionBarilla').value = description;
            break;
        }
        
    }

    formParameter = form;
}

function editRow(){
    let idEdit=idEditParameter;
    let tableId=tableIdParameter;
    let form = formParameter;


    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    let idSection;
    //dopo aver validato i dati, li modifico nell'array
    switch(tableId){
        case 'aliExpressTab': {
            //cambio i dati nell'array
            arrayObjAliExpress[idEdit].name = document.getElementById('productAliExpress').value;
            arrayObjAliExpress[idEdit].quantity = document.getElementById('quantityAliExpress').value;
            arrayObjAliExpress[idEdit].price = document.getElementById('priceAliExpress').value;
            arrayObjAliExpress[idEdit].description = document.getElementById('descriptionAliExpress').value;
            idSection = 'aliExpress';
            modalAliExpress.style.display = "none";
            break;
        }
        case 'amazonTab': {
            arrayObjAmazon[idEdit].name = document.getElementById('productAmazon').value;
            arrayObjAmazon[idEdit].quantity = document.getElementById('quantityAmazon').value;
            arrayObjAmazon[idEdit].price = document.getElementById('priceAmazon').value;
            arrayObjAmazon[idEdit].description = document.getElementById('descriptionAmazon').value;
            idSection = 'amazon';
            modalAmazon.style.display = "none";
            break;
        }
        case 'barillaTab': {
            arrayObjBarilla[idEdit].name = document.getElementById('productBarilla').value;
            arrayObjBarilla[idEdit].quantity = document.getElementById('quantityBarilla').value;
            arrayObjBarilla[idEdit].price = document.getElementById('priceBarilla').value;
            arrayObjBarilla[idEdit].description = document.getElementById('descriptionBarilla').value;
            idSection = 'barilla';
            modalBarilla.style.display = "none";
            break;
        }
        
    }
    
    toggle(idSection);
    
}


const modalAliExpress = document.getElementById("myModalAliExpress");

const modalAmazon = document.getElementById("myModalAmazon");

const modalBarilla = document.getElementById("myModalBarilla");

const btnAliExpress = document.getElementById("newAliExpress");

const btnAmazon = document.getElementById("newAmazon");

const btnBarilla = document.getElementById("newBarilla");

const span1 = document.getElementsByClassName("modal-close")[0];

const span2 = document.getElementsByClassName("modal-close")[1];

const span3 = document.getElementsByClassName("modal-close")[2];


btnAliExpress.onclick = () => {
    modalAliExpress.style.display = "block";
    document.getElementById('h1AliExpress').innerText = "Inserisci nuovo prodotto"; 
    document.getElementById('insertButtonAliExpress').style.display = "block";
    document.getElementById('editButtonAliExpress').style.display = "none";
    cleanAliExpress();
}

btnAmazon.onclick = () => {
  modalAmazon.style.display = "block";
  document.getElementById('h1Amazon').innerText = "Inserisci nuovo prodotto"; 
  document.getElementById('insertButtonAmazon').style.display = "block";
  document.getElementById('editButtonAmazon').style.display = "none";
  cleanAmazon();
}

btnBarilla.onclick = () => {
  modalBarilla.style.display = "block";
  document.getElementById('h1Barilla').innerText = "Inserisci nuovo prodotto";
  document.getElementById('insertButtonBarilla').style.display = "block";
  document.getElementById('editButtonBarilla').style.display = "none";
  cleanBarilla();
}

span1.onclick = () => {
    modalAliExpress.style.display = "none";
}

span2.onclick = () => {
    modalAmazon.style.display = "none";
}

span3.onclick = () => {
    modalBarilla.style.display = "none";
}

//per chiudere il modale se si clicca in un qualsiasi punto dello schermo
window.onclick = (event) => {
  if (event.target == modalAliExpress) {
    modalAliExpress.style.display = "none";
  }

  if (event.target == modalAmazon) {
    modalAmazon.style.display = "none";
  }

  if (event.target == modalBarilla) {
    modalBarilla.style.display = "none";
  }
}

function cleanAliExpress(){
    document.getElementById('productAliExpress').value = '';
    document.getElementById('quantityAliExpress').value = '';
    document.getElementById('priceAliExpress').value = '';
    document.getElementById('descriptionAliExpress').value = '';
}

function cleanAmazon(){
    document.getElementById('productAmazon').value = '';
    document.getElementById('quantityAmazon').value = '';
    document.getElementById('priceAmazon').value = '';
    document.getElementById('descriptionAmazon').value = '';
}

function cleanBarilla(){
    document.getElementById('productBarilla').value = '';
    document.getElementById('quantityBarilla').value = '';
    document.getElementById('priceBarilla').value = '';
    document.getElementById('descriptionBarilla').value = '';
}

function insertNew(id){
    let whereToAdd = [];
    let form;
    switch(id){
        case 'aliExpress': {
            whereToAdd = arrayObjAliExpress; 
            form = document.getElementsByClassName('modal-form')[0]; 
            break;
        }
        case 'amazon': {
            whereToAdd = arrayObjAmazon; 
            form = document.getElementsByClassName('modal-form')[1]; 
            break;
        }
        case 'barilla': {
            whereToAdd = arrayObjBarilla; 
            form = document.getElementsByClassName('modal-form')[2]; 
            break;
        }
    }

    
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    //come id vado a recuperare l'id dell'ultimo elemento dell'array e lo incremento
    let idNewItem = whereToAdd[whereToAdd.length -1].id;
    

    switch(id){
        case 'aliExpress': {
            const newItemAliExpress = {
                id: ++idNewItem,
                name: document.getElementById('productAliExpress').value,
                quantity: document.getElementById('quantityAliExpress').value,
                price: document.getElementById('priceAliExpress').value,
                description: document.getElementById('descriptionAliExpress').value,
                date: new Date()
            }; 

            arrayObjAliExpress.push(newItemAliExpress);
            modalAliExpress.style.display = "none";

            break;
        }

        case 'amazon': {
            const newItemAmazon = {
                id: ++idNewItem,
                name: document.getElementById('productAmazon').value,
                quantity: document.getElementById('quantityAmazon').value,
                price: document.getElementById('priceAmazon').value,
                description: document.getElementById('descriptionAmazon').value,
                date: new Date()
            }; 

            arrayObjAmazon.push(newItemAmazon); 
            modalAmazon.style.display = "none";

            break;
        }

        case 'barilla': {
            const newItemBarilla = {
                id: ++idNewItem,
                name: document.getElementById('productBarilla').value,
                quantity: document.getElementById('quantityBarilla').value,
                price: document.getElementById('priceBarilla').value,
                description: document.getElementById('descriptionBarilla').value,
                date: new Date()
            }; 

            arrayObjBarilla.push(newItemBarilla); 
            modalBarilla.style.display = "none";

            break;
        }
    }
    
    toggle(id);

}

//modifico tutti i messaggi di errore con un messaggio a mio piacimento

/* Messaggi di errore ALIEXPRESS */

/*------------------------------------------------------------------*/

//NOME  
const productInputAliExpress = document.getElementById('productAliExpress');

//setto l'errore
productInputAliExpress.addEventListener('invalid', () => {
  productInputAliExpress.setCustomValidity('Campo obbligatorio!');
});

//"annullo l'errore" se il campo è valido
productInputAliExpress.addEventListener('input', () => {
  productInputAliExpress.setCustomValidity('');
});

/*------------------------------------------------------------------*/

//QUANTITÀ 
const quantityInputAliExpress = document.getElementById('quantityAliExpress');

//setto l'errore
quantityInputAliExpress.addEventListener('invalid', () => {
  quantityInputAliExpress.setCustomValidity('Campo obbligatorio!');
});

//"annullo l'errore" se il campo è valido
quantityInputAliExpress.addEventListener('input', () => {
  quantityInputAliExpress.setCustomValidity('');
});

/*------------------------------------------------------------------*/

//PREZZO 
const priceInputAliExpress = document.getElementById('priceAliExpress');

//setto l'errore
// priceInputAliExpress.addEventListener('invalid', () => {
//   priceInputAliExpress.setCustomValidity('Campo obbligatorio!');
// });

//"annullo l'errore" se il campo è valido

//setto l'errore
priceInputAliExpress.addEventListener('invalid', () => {
  priceInputAliExpress.setCustomValidity('Campo obbligatorio!');
});

//"annullo l'errore" se il campo è valido
priceInputAliExpress.addEventListener('input', () => {
  priceInputAliExpress.setCustomValidity('');
});

/*------------------------------------------------------------------*/

//DESCRIZIONE 
const descriptionInputAliExpress = document.getElementById('descriptionAliExpress');

//setto l'errore
descriptionInputAliExpress.addEventListener('invalid', () => {
  descriptionInputAliExpress.setCustomValidity('Campo obbligatorio!');
});

//"annullo l'errore" se il campo è valido
descriptionInputAliExpress.addEventListener('input', () => {
  descriptionInputAliExpress.setCustomValidity('');
});

/*-----------------------------------------------------------------------------------------------------------------------------------------*/

/* Messaggi di errore AMAZON */

/*------------------------------------------------------------------*/

//NOME  
const productInputAmazon = document.getElementById('productAmazon');

//setto l'errore
productInputAmazon.addEventListener('invalid', () => {
    productInputAmazon.setCustomValidity('Campo obbligatorio!');
});

//"annullo l'errore" se il campo è valido
productInputAmazon.addEventListener('input', () => {
    productInputAmazon.setCustomValidity('');
});

/*------------------------------------------------------------------*/

//QUANTITÀ 
const quantityInputAmazon = document.getElementById('quantityAmazon');

//setto l'errore
quantityInputAmazon.addEventListener('invalid', () => {
  quantityInputAmazon.setCustomValidity('Campo obbligatorio!');
});

//"annullo l'errore" se il campo è valido
quantityInputAmazon.addEventListener('input', () => {
  quantityInputAmazon.setCustomValidity('');
});

/*------------------------------------------------------------------*/

//PREZZO 
const priceInputAmazon = document.getElementById('priceAmazon');

//setto l'errore
priceInputAmazon.addEventListener('invalid', () => {
  priceInputAmazon.setCustomValidity('Campo obbligatorio!');
});

//"annullo l'errore" se il campo è valido
priceInputAmazon.addEventListener('input', () => {
  priceInputAmazon.setCustomValidity('');
});

/*------------------------------------------------------------------*/

//DESCRIZIONE 
const descriptionInputAmazon = document.getElementById('descriptionAmazon');

//setto l'errore
descriptionInputAmazon.addEventListener('invalid', () => {
  descriptionInputAmazon.setCustomValidity('Campo obbligatorio!');
});

//"annullo l'errore" se il campo è valido
descriptionInputAmazon.addEventListener('input', () => {
  descriptionInputAmazon.setCustomValidity('');
});

/*-----------------------------------------------------------------------------------------------------------------------------------------*/

/* Messaggi di errore BARILLA */

/*------------------------------------------------------------------*/

//NOME  
const productInputBarilla = document.getElementById('productBarilla');

//setto l'errore
productInputBarilla.addEventListener('invalid', () => {
    productInputBarilla.setCustomValidity('Campo obbligatorio!');
});

//"annullo l'errore" se il campo è valido
productInputBarilla.addEventListener('input', () => {
    productInputBarilla.setCustomValidity('');
});

/*------------------------------------------------------------------*/

//QUANTITÀ 
const quantityInputBarilla = document.getElementById('quantityBarilla');

//setto l'errore
quantityInputBarilla.addEventListener('invalid', () => {
  quantityInputBarilla.setCustomValidity('Campo obbligatorio!');
});

//"annullo l'errore" se il campo è valido
quantityInputBarilla.addEventListener('input', () => {
  quantityInputBarilla.setCustomValidity('');
});

/*------------------------------------------------------------------*/

//PREZZO 
const priceInputBarilla = document.getElementById('priceBarilla');

//setto l'errore
priceInputBarilla.addEventListener('invalid', () => {
  priceInputBarilla.setCustomValidity('Campo obbligatorio!');
});

//"annullo l'errore" se il campo è valido
priceInputBarilla.addEventListener('input', () => {
  priceInputBarilla.setCustomValidity('');
});

/*------------------------------------------------------------------*/

//DESCRIZIONE 
const descriptionInputBarilla = document.getElementById('descriptionBarilla');

//setto l'errore
descriptionInputBarilla.addEventListener('invalid', () => {
  descriptionInputBarilla.setCustomValidity('Campo obbligatorio!');
});

//"annullo l'errore" se il campo è valido
descriptionInputBarilla.addEventListener('input', () => {
  descriptionInputBarilla.setCustomValidity('');
});

// console.log(arrayObjAliExpress);
// console.log(arrayObjAmazon);
// console.log(arrayObjBarilla);