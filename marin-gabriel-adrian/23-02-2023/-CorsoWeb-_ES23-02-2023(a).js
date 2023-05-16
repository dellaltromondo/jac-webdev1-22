const promise = await fetch("http://localhost:8080/EsercizioAPI/api");
const respone = await promise.json();
console.log(respone);
respone.Products.forEach(product => {
    const e = document.createElement("li");
    document.getElementById("products").append(e);
    e.innerText = product;
})

async function provaLogin() {
    const userInsert = document.getElementById("user").value;
    const passwInsert = document.getElementById("psw").value;
    const requestObject={"username":userInsert, "password":passwInsert};
    const login = await fetch("http://localhost:8080/EsercizioAPI/login",{
        method: "POST",
        body: JSON.stringify(requestObject)
    });
    if(await login.json()){
        console.log("Correctly logged");
    }else{
        console.log("Error");
    }
}