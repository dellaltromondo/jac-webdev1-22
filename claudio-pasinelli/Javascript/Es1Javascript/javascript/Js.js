/* let a=5;
console.log("Il valore di \"a\" e':"+a); */
/* const b="pippo";
console.log("Il valore di \"b\" e': "+b); */
/* b="sas";
console.log("Il valore di \"b\" e': "+b); */
/* let arrayEsempio=["Laini","Labozzetta","Lugarà"];
console.log(arrayEsempio);
arrayEsempio.push("Tecninco IT di cui non si ricorderà mai l'esistenza"); */
/* let studente=
{
    nome:"gian marco",
    cognome:"laini",
    eta:45,
    sesso:"maschio",
    tutor:true,
};
console.log(studente);
studente.push() */
function massimo (a,b)
{
    if(isNaN(a) || isNaN(b))
        return -1;
    else if(a>b)
        return a;
    return b;
}
/* let max=massimo(2,3); */
/* console.log(massimo(2,3)); */
/* function massimoAlternativo(a,b)
{
    /* return (a>b)
        ? a 
        : b */
    /* let risultato = (a>b)
        ? a 
        : b
    return risultato; */
    /* return a>b
        ? a 
        : b
} */
/* function massimoFraQuattroNumeri (a,b,c,d)
{
    let max1=massimo(a,b);
    let max2=massimo(c,d);
    let max3=massimo(max1,max2);

    return max3;
}
console.log(massimoFraQuattroNumeri(4,5,6,2)); */