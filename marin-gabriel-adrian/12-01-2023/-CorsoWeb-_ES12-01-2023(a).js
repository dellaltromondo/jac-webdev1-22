const estrapoloinput=document.getElementsByClassName("TestoInput").value;
const button=document.getElementById("SovrascrivoTitolo");
button.addEventListener("click", function(){
    if(estrapoloinput!=null){
        const scelta=prompt("Che input desideri prendere?","1,2,3");
        const a=document.getElementsByClassName("TestoInput").value;
        const elementotitolo=document.getElementById("titolo");
        if(scelta=="1"){
            elementotitolo.innerText="Ciao "+a[0];
        }
        else if(scelta=="2"){
            elementotitolo.innerText="Ciao "+a[1];
        }
        else{
            elementotitolo.innerText="Ciao "+a[2];
        }
    }
    else{
        alert("Please write at least one input");
        location.reload();
    }
})