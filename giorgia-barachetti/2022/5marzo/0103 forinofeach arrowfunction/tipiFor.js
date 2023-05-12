/*
array  = insieme di variabili
	
	 const lista=['primo', 'secondo', 'terzo'];
	            const primoEl = lista[0]; //--> 'primo'
	
per prenderli tutti usiamo ciclo for 

for(let i =0; i<lista.length; i++)
                                //la length in java ha ()
        {
            const currentElement = lista[i];
            console.log (currentElement);
        }


FOR IN
uno itera sulle chiavi--> indici 
0,1,2 indici -->negli array gli indici sono string
// array sono utili pk garantiscono un ordine

for(let index in lista)
        {
            const currentElement = lista[i];
            console.log (currentElement);
        

uno itera sui valori

for(let currentElement of lista)
        {
            const currentElement = lista[i];
            console.log (currentElement);
        }

//FUNZIONSNO CON ARRAY E MAPPE
// comunque questa sotto è ugfuale al for each
cpme ciclare sugli array in modo duverso? itero sulla lista 
//sostituto del for of se devo ciclare solo sui valori
//qua definisco una function e gliela passo
lista.forEach(printArray); 
// --> diventa cosi un metodo della classe array
//   --> lista.è di tipo array
        //forEach accetta una funzione come parametro
        function printArray(currentElement)
	   {
		console.log(currentElement);
		}

//qua ho una funzione anonima 
//si puo scrivere anche 
lista.forEach(function(el){
	consol.log(el);
	});


//si puo scrivere anche 
//arrowfunctions --> funzioni freccia
//el è un paramwtro
lista.forEach(el=>console.log(el));

//sintassi
(...parameters….) => {
	…instructions…
	return …value…;
}
 se cè un solo paramentro posso evtare le tonde
parameter => {
	…instructions…
	return …value…;
}

se cè una solko istruzione posso togliere graffe
parameter => instruction; 



ex  due parametri	(numUno, numDue) => {	
	        const somma =  numUno + numDue;
	        return somma ;
	}
ex un parametro	numUno => {	
	        const arrotondaNum = Math.round(numUno);
	        return arrotondaNum ;
	}
ex  una istruzione	numUno => {return numUno + 10};	
	si trasforma in
	numUno => numUno + 10;

funziona anche c on gli oggettiu ma 
const object =
	          {
	// chiave/indice : valore --> negli ogetti LE CHIAVI sono string
	// gli oggetti non garantiscono ordine

			'nome' : 'paolo',
              'cognome' : 'mangini',
              'eta' : 2 ,
               };


	 object[nome];
      object.nome;
        
        object['sesso'] = 'M';
        object['indirizzo'] = 'Via Aldo Moro';

//negli oggetti possono stare delle funzioni

//MAPPA
//ESISTE LA CLASSE MAP IN Cui ci sono solo valori non function
//funziona bene il FOR OF 
//CI SERVE quanfo abbiamo un nome utente mi da la sua mail

const map = new Map();
// due metodi: set e get

//               chiave ,  valore 
 map.set('prossi', 'paolorossi@gmail.com');
 map.et('s.manzoni', 'saramanzo.sm@gmail.com');


devono essere sempre stringhe o int 
acnhe per la mappa vanno for in e for of 


differenza 
  //MAPPE --> indici stringa
  //array indici numerici


___________________________________________________________________________
 const object =
            {
            'nome' : 'paolo',
            'cognome' : 'mangini',
            'eta' : 2 ,
            };
            

FOR IN 
for k in object  => nome, cognome

FOR OF
for v in object => paolo, mangini

FOR EACH



const array=['primo', 'secondo', 'terzo'];

FOR IN 
for k in array=> 0,1,2

FOR OF
for v of array=> primo, secondo, terzo


const map = new Map();
        map.set('prossi', 'paolorossi@gmail.com');
        map.set('s.manzoni', 'saramanzo.sm@gmail.com');


FOR IN
for k in map 

FOR OF 
for v of map => paolorossi@gmail.com, saramanzo.sm@gmail.com

FOR EACH
accetta una funzione con 1 argomento

array/map.forEach(function)
	per function intendeìo
	--> nome funzione
	--> variabile che contiene funzione
	--> funzioni anonime  che possono essere (usate quando possono essere usate una sola volta nel codice)
		--> standard --> come definizione di una funzione ma senza nome  --> function nome () =>
		--> freccia --> come sopra ma al posto di scrivere function metto la freccia --> function nome () =>

	function f () {
	console.log("ciao");
	}
	
	//definisco una const per la funzione
	const f2 = f;
	
	//richiamo l'esecuzione della funzione
	f2();
	
	funzioni simili al for each che accettano 	.map	.sort	.every	.filter
	come argomento altre funzioni da eseguire --> 

*/
