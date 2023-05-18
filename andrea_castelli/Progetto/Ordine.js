function Asporto()
{
    const col=document.getElementById("colonna1");
    const form=document.getElementById("form");
    const tab=document.getElementById("tab");
    col.appendChild(form);
    form.appendChild(tab);
               

    const Ind=document.createElement("input");
    Ind.setAttribute("id", "indirizzo")
    const n_Civ=document.createElement("input");
    n_Civ.setAttribute("id", "nCivico");
    const n_Tav=document.createElement("input");
    n_Tav.setAttribute("id", "nTavolo");

    const testo1=document.createElement("span");
    testo1.setAttribute("id", "testo1");
    const testo2=document.createElement("span");
    testo2.setAttribute("id", "testo2");


    if(document.getElementById("asporto").checked)
    {
        if(document.contains(document.getElementById("nTavolo")))
        {
            document.getElementById("testo1").remove();
            document.getElementById("nTavolo").remove();

            document.getElementById("th11").remove();
            document.getElementById("th22").remove();

            document.getElementById("tr").remove();
        }

        const tr1=document.createElement("tr");
        tr1.setAttribute("id", "tr1");
        const th1=document.createElement("th");
        th1.setAttribute("id", "th1");
        const th2=document.createElement("th");
        th2.setAttribute("id", "th2");
        tab.appendChild(tr1);
        tr1.appendChild(th1);
        tr1.appendChild(th2);

        testo1.innerText="Indirizzo: ";
        th1.appendChild(testo1);
        th2.appendChild(Ind);
                    
        Ind.setAttribute("type", "text");

        const tr2=document.createElement("tr");
        tr2.setAttribute("id", "tr2");
        const th3=document.createElement("th");
        th3.setAttribute("id", "th3");
        const th4=document.createElement("th");
        th4.setAttribute("id", "th4");
        tab.appendChild(tr2);
        tr2.appendChild(th3);
        tr2.appendChild(th4);

        testo2.innerText="Numero civico: ";
        th3.appendChild(testo2);
        th4.appendChild(n_Civ);

        n_Civ.setAttribute("type", "number");
    }

    else
    {
        if(document.contains(document.getElementById("indirizzo"))||document.contains(document.getElementById("nCivico")))
        {
            document.getElementById("indirizzo").remove();
            document.getElementById("testo1").remove();
            document.getElementById("th1").remove();
            document.getElementById("tr1").remove();
                 
            document.getElementById("testo2").remove();
            document.getElementById("nCivico").remove();
            document.getElementById("th3").remove();
            document.getElementById("th4").remove();
            document.getElementById("tr2").remove();
        }

        const tr=document.createElement("tr");
        tr.setAttribute("id", "tr")
        const th11=document.createElement("th");
        th11.setAttribute("id", "th11");
        const th22=document.createElement("th");
        th22.setAttribute("id", "th22");

        tab.appendChild(tr);
        tr.appendChild(th11);
        tr.appendChild(th22);

        testo1.innerText="Numero tavolo: ";
        th11.appendChild(testo1);
        th22.appendChild(n_Tav);                    
                    
        n_Tav.setAttribute("type", "number");
    }
}


let Nome="";
let Pizza=new Array();
let Indirizzo="";
let nCivico=0;
let nTavolo=0;

function Ordine()
{
    Nome=document.getElementById("nome").value;
    Pizza.push(document.getElementById("pizza").value);

    if(document.contains(document.getElementById("indirizzo"))&&document.contains(document.getElementById("nCivico")))
    {
        Indirizzo=document.getElementById("indirizzo").value;
        nCivico=document.getElementById("nCivico").value;
    }
 
    else
    {
        nTavolo=document.getElementById("nTavolo").value;
    }              
}

function SalvaOrdine()
{
    const col2=document.getElementById("colonna2");

    const sec=document.createElement("section");
    sec.setAttribute("id", "sectionOrdine");
    col2.appendChild(sec);

    if(document.contains(document.getElementById("indirizzo"))&&document.contains(document.getElementById("nCivico")))
    {
        const listaPizze=Pizza.toString();
        sec.innerText="Nome ordine: "+Nome+"\nIndirizzo: "+Indirizzo+"\nNumero civico: "+nCivico+"\nPizze: "+listaPizze;
    }

    else
    {
        const listaPizze=Pizza.toString();
        sec.innerText="Nome ordine: "+Nome+"\nNumero tavolo: "+nTavolo+"\nPizze: "+listaPizze;
    }

    Pizza=[];
}