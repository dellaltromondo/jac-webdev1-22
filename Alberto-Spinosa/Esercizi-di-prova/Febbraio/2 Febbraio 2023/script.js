function mostraMenu() {

    const espandiElementoMenu = document.getElementById("espandi-menu");

    // console.log(espandiElementoMenu); "stringa vuota"

    if (espandiElementoMenu.style.display != "block")
        espandiElementoMenu.style.display = "block";
    else
        espandiElementoMenu.style.display = "none";
    
}