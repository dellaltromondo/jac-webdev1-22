function Principal() {
    document.write("<h1>Esercizio su JS</h1>");
    const date = new Date();
    let AnnoCorrente=date.getFullYear();
    function MoltiplicaMille() {
        const Numero = 10;
        document.write(Numero * 1000 + "<br>");
    };
    MoltiplicaMille();

    function NomeCompleto() {
        const Nome = 'Gabriel Adrian';
        const Cognome = 'Marin';
        document.write(Nome + " " + Cognome + "<br>");
    };
    NomeCompleto();

    function StampaEta(AnnoCorrente) {
        const AnnoNascita = 2003;
        let eta=AnnoCorrente-AnnoNascita;
        if (eta < 18) {
            let AppoggioFasciaEta = 'Young';
        }
        else if (eta>= 18 && eta<= 65) {
            AppoggioFasciaEta = 'Adult';
        }
        else {
            AppoggioFasciaEta = 'Old';
        }
        document.write(AppoggioFasciaEta + "<br>");
    };
    StampaEta(AnnoCorrente);

    function ArrayNascite(AnnoCorrente) {
        const DateNascite = [2005, 2003, 2009, 2010, 1990, 1998, 2007];
        let DateNasciteAppoggio = [];
        let eta;
        for (let i = 0; i < DateNascite.length; i++) {
            eta=AnnoCorrente-DateNascite[i];
            if (eta < 18) {
                DateNasciteAppoggio[i] = DateNascite[i];
                document.write(DateNasciteAppoggio[i] + "<br>");
            }
        }
    };
    ArrayNascite(AnnoCorrente);

    function ArrayPersone(AnnoCorrente) {
        const ArrayPersoneNascite = [{ Nome: "Marta", Cognome: "Martini", AnnoNascita: 2002 },
        { Nome: "Matteo", Cognome: "Matteotti", AnnoNascita: 2012 },
        { Nome: "Matilde", Cognome: "Mendoni", AnnoNascita: 2004 },
        { Nome: "Gennaro", Cognome: "Sebastiani", AnnoNascita: 1999 },
        { Nome: "Paola", Cognome: "Carloni", AnnoNascita: 2003 },
        { Nome: "Sandra", Cognome: "Sabatini", AnnoNascita: 1997 },
        { Nome: "Cassandra", Cognome: "Frolenti", AnnoNascita: 2008 }];
        let Appoggio = [];
        let eta;
        for (let i = 0; i < ArrayPersoneNascite.length; i++) {
            eta=AnnoCorrente-ArrayPersoneNascite[i].AnnoNascita;
            if (eta < 18) {
                Appoggio[i] = ArrayPersoneNascite[i];
                document.write("Nome: " + Appoggio[i].Nome + "<br>Cognome: " + Appoggio[i].Cognome + "<br>Anno Nascita: " + Appoggio[i].AnnoNascita + "<br>");
            }
        }
    };
    ArrayPersone(AnnoCorrente);
};

