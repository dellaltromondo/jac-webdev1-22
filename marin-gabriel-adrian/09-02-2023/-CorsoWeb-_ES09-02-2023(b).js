//Gestione Mappe
const mappa=new Map();//classe Map di javascript e si istanzia con l'operatore new
//Set valori mappa
mappa.set("p.rossi","paolo.rossi@gmail.com");
mappa.set("s.manzoni","saramanzo2000.sm@gmail.com");

//Get valori della mappa attraverso la chiave
const getMappa=mappa.get("p.rossi");
console.log(getMappa);