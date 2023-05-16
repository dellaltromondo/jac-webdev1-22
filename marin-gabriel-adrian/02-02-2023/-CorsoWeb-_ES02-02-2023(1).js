const checkcommit=document.getElementById('checkcommit');
checkcommit.addEventListener("click",function(){
    const GetUL = document.getElementById("expanded-menu");
    if(GetUL.style.display != "block"){
        GetUL.style.display = "block";
    }
    else{
        GetUL.style.display = "none";
    }
});