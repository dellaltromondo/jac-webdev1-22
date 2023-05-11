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


function checkInfos() {
  const dl = document.getElementById("dl");
  const dt = document.createElement("dt");
  dl.appendChild(dt);
  
  const inputs = ["name", "surname", "address", "mail", "phone"];
  const inputLabels = ["Name", "Surname", "Address", "Email", "Phone number"];
  
  for (let i = 0; i < inputs.length; i++) {
    const dd = document.createElement("dd");
    const label = document.createTextNode(inputLabels[i] + ": ");
    const inputValue = document.getElementById(inputs[i]).value;
    const value = document.createTextNode(inputValue);
    
    dd.appendChild(label);
    dd.appendChild(value);
    dt.appendChild(dd);

  }

  const Ccondiz = document.getElementById("cond");
  let cond = '';
  
  if (Ccondiz.checked) {
    cond = "Terms of Service and Privacy Policy approved.";
  } else {
    cond = "The Terms of Service and the Privacy Policy must be approved to continue!";
  }

  const condizParagraph = document.createElement("p");
  const condizText = document.createTextNode(cond);
  condizParagraph.appendChild(condizText);
  dt.appendChild(condizParagraph);

  //document.getElementById('shopButton')/*.disabled=true*/;

  const buttonContinueWithPayment = document.createElement('buttonX')
  dl.appendChild(buttonContinueWithPayment)
  buttonContinueWithPayment.innerHTML= '<button id="showPaymentMethod" onClick="showPaymentMethods()" type="button">PAY</button>'
  
}

function showPaymentMethods(){
  const payment = document.getElementById('formPayment')
  payment.style.display= 'block';
}
