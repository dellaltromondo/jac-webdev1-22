//nascondi e vedi carrello
function showCart(){
    const site = document.getElementById('mainPage')
    const sectionUser = document.getElementById('shoppingCartMenu');
    site.style.display ='none';
    sectionUser.style.display ='block';
}

function showHome(){
    const site = document.getElementById('mainPage')
    const sectionUser = document.getElementById('shoppingCartMenu');
    site.style.display ='block';
    sectionUser.style.display ='none';
}

//nascondi e vedi ABOUT US
function showAboutUs(){
  const site = document.getElementById('mainPage')
  const sectionDescription = document.getElementById('AboutUsParagraph');
  site.style.display ='none';
  sectionDescription.style.display ='block';
}

function showHomeFromAboutUs(){
  const site = document.getElementById('mainPage')
  const sectionDescription = document.getElementById('AboutUsParagraph');
  site.style.display ='block';
  sectionDescription.style.display ='none';
}

function showPaymentMethods(){
  const payment = document.getElementById('formPayment')
  payment.style.display= 'block';
}
function printAndCheckInfos() {
  const nameInput = document.getElementById("name");
  const surnameInput = document.getElementById("surname");
  const addressInput = document.getElementById("addressInput");
  const emailInput = document.getElementById("mail");
  const phoneInput = document.getElementById("phone");

  const name = nameInput.value;
  const surname = surnameInput.value;
  const address = addressInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  
  if(name=='' && surname=='' && address === "" && email === "" && phone === ""){
    return alert('All the inputs need to be completed')
  }
  if (name === "") {
    const setErrorName = nameInput.value = "Insert name"; nameInput.style.color = "red";
    return setErrorName;
  }
  if (surname === "") {
    const setErrorSurname = surnameInput.value = "Insert surname";  surnameInput.style.color = "red";
    return setErrorSurname;
  }
  if (address === "") {
    const setErrorAddress = addressInput.value = "Insert address"; addressInput.style.color = "red";
    return setErrorAddress;
  }
  if (email === "") {
    const setErrorEmail = emailInput.value = "Insert email"; emailInput.style.color = "red";
    return setErrorEmail;
  }
  if (phone === "") {
    const setErrorPhone = phoneInput.value = "Insert phone number"; phoneInput.style.color = "red";
    return setErrorPhone;
  }
  if (isNaN(phone)) {
    const setErrorPhone = phoneInput.value = "Only number accepted";   phoneInput.style.color = "red";
    return setErrorPhone;
  }
  
  
  const dl = document.getElementById("dl");
  dl.innerHTML = `<dt>Name: ${name}</dt>
  <dt>Surname: ${surname}</dt>
  <dt>Address: ${address}</dt>
  <dt>Email: ${email}</dt>
  <dt>Phone number: ${phone}</dt>`;
  
  const Ccondiz = document.getElementById("cond");
  let cond = "";
  
  if (!Ccondiz.checked) {
    return alert('TERMS OF PRIVACY MUST BE APPROVED!')
  } else {
    cond = "Terms of Service and Privacy Policy approved.";
  }

  const condizParagraph = document.createElement("p");
  const condizText = document.createTextNode(cond);
  condizParagraph.appendChild(condizText);
  dl.appendChild(condizParagraph);

  const buttonContinueWithPayment = document.createElement('buttonX')
  dl.appendChild(buttonContinueWithPayment)
  buttonContinueWithPayment.innerHTML = '<button id="showPaymentMethod" onClick="showPaymentMethods()" type="button">PAY</button>'
}

document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("name");
  const surnameInput = document.getElementById("surname");
  const addressInput = document.getElementById("addressInput");
  const emailInput = document.getElementById("mail");
  const phoneInput = document.getElementById("phone");

  nameInput.addEventListener("input", function () {
    if (nameInput.style.color === "red") {
      nameInput.value = "";
      nameInput.style.color = "";
    }
  });

  surnameInput.addEventListener("input", function () {
    if (surnameInput.style.color === "red") {
      surnameInput.value = "";
      surnameInput.style.color = "";
    }
  });

  addressInput.addEventListener("input", function () {
    if (addressInput.style.color === "red") {
      addressInput.value = "";
      addressInput.style.color = "";
    }
  });

  emailInput.addEventListener("input", function () {
    if (emailInput.style.color === "red") {
      emailInput.value = "";
      emailInput.style.color = "";
    }
  });

  phoneInput.addEventListener("input", function () {
    if (phoneInput.style.color === "red") {
      phoneInput.value = "";
      phoneInput.style.color = "";
      }
      });
      });

function enableEdit() {
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const address = document.getElementById("addressInput").value;
  const email = document.getElementById("mail").value;
  const phone = document.getElementById("phone").value;

  name.removeAttribute("readonly");
  surname.removeAttribute("readonly");
  address.removeAttribute("readonly");
  email.removeAttribute("readonly");
  phone.removeAttribute("readonly");

}