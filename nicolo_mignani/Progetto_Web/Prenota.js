

function initMap() {
 const map = new google.maps.Map(document.getElementById("map"), {
   center: { lat: 40.749933, lng: -73.98633 },
   zoom: 13,
   mapTypeControl: false,
 });
 const card = document.getElementById("pac-card");
 const input = document.getElementById("pac-input");
 const biasInputElement = document.getElementById("use-location-bias");
 const strictBoundsInputElement =
   document.getElementById("use-strict-bounds");
 const options = {
   fields: ["formatted_address", "geometry", "name"],
   strictBounds: false,
   types: ["establishment"],
 };

 map.controls[google.maps.ControlPosition.TOP_LEFT].push(card);

 const autocomplete = new google.maps.places.Autocomplete(
   input,
   options
 );

 // Bind the map's bounds (viewport) property to the autocomplete object,
 // so that the autocomplete requests use the current map bounds for the
 // bounds option in the request.
 autocomplete.bindTo("bounds", map);

 const infowindow = new google.maps.InfoWindow();
 const infowindowContent = document.getElementById("infowindow-content");

 infowindow.setContent(infowindowContent);

 const marker = new google.maps.Marker({
   map,
   anchorPoint: new google.maps.Point(0, -29),
 });

 autocomplete.addListener("place_changed", () => {
   infowindow.close();
   marker.setVisible(false);

   const place = autocomplete.getPlace();

   if (!place.geometry || !place.geometry.location) {
     // User entered the name of a Place that was not suggested and
     // pressed the Enter key, or the Place Details request failed.
     window.alert(
       "No details available for input: '" + place.name + "'"
     );
     return;
   }

   // If the place has a geometry, then present it on a map.
   if (place.geometry.viewport) {
     map.fitBounds(place.geometry.viewport);
   } else {
     map.setCenter(place.geometry.location);
     map.setZoom(17);
   }

   marker.setPosition(place.geometry.location);
   marker.setVisible(true);
   infowindowContent.children["place-name"].textContent = place.name;
   infowindowContent.children["place-address"].textContent =
     place.formatted_address;
   infowindow.open(map, marker);
 });

 // Sets a listener on a radio button to change the filter type on Places
 // Autocomplete.
 function setupClickListener(id, types) {
   const radioButton = document.getElementById(id);

   radioButton.addEventListener("click", () => {
     autocomplete.setTypes(types);
     input.value = "";
   });
 }

 setupClickListener("changetype-all", []);
 setupClickListener("changetype-address", ["address"]);
 setupClickListener("changetype-establishment", ["establishment"]);
 setupClickListener("changetype-geocode", ["geocode"]);
 setupClickListener("changetype-cities", ["(cities)"]);
 setupClickListener("changetype-regions", ["(regions)"]);
 biasInputElement.addEventListener("change", () => {
   if (biasInputElement.checked) {
     autocomplete.bindTo("bounds", map);
   } else {
     // User wants to turn off location bias, so three things need to happen:
     // 1. Unbind from map
     // 2. Reset the bounds to whole world
     // 3. Uncheck the strict bounds checkbox UI (which also disables strict bounds)
     autocomplete.unbind("bounds");
     autocomplete.setBounds({
       east: 180,
       west: -180,
       north: 90,
       south: -90,
     });
     strictBoundsInputElement.checked = biasInputElement.checked;
   }

   input.value = "";
 });
 strictBoundsInputElement.addEventListener("change", () => {
   autocomplete.setOptions({
     strictBounds: strictBoundsInputElement.checked,
   });
   if (strictBoundsInputElement.checked) {
     biasInputElement.checked = strictBoundsInputElement.checked;
     autocomplete.bindTo("bounds", map);
   }

   input.value = "";
 });
}

window.initMap = initMap;


let con=0;

function contatore(){
  
  con++


}

const b = document.getElementById("invio");

b.addEventListener('click',function(){

contatore();


})





function AggiungiTabella(){ 


      const pacc = document.getElementById("pacchetto");
      const ag = document.getElementById("agenzia");
      const dat = document.getElementById("data");
     
      if(dat.value==""){

       alert("inserire la data delle partenza");
       return;
      }
      
      const datri = document.getElementById("datari");
      
      if(datri.value==""){

         alert("inserire la data di rientro");
         return;
       } 

       if(datri.value<dat.value){
         
         alert("inserire una data che sia superiore a quella d'inizio");
         return;
       }
      
       const email = document.getElementById("email");
     
       if(email.value==""){
        
         alert("inserire l'indirizzo email")
         return;
       }
  
      const tel = document.getElementById("telefono");
      if(tel.value==""){
        
        alert("inserire il numero di telefono")
        return;
     }

     const m=document.getElementById("pac-input");
     if(m.value==""){

       alert("inserire la destinazione")
       return;
     }

     


      const section= document.createElement("section");
      const p= document.createElement("p");
      const p2 = document.createElement("p");
      const p3 = document.createElement("p");
      const p4 = document.createElement("p");
      const p5 = document.createElement("p");
      const p6 = document.createElement("p");
      const p7 = document.createElement("p");
      const bot = document.createElement("button");

      p.innerText= "Pacchetto: "+pacc.value;
      p2.innerText= "Compagnia aerea: "+ag.value;
      p3.innerText= "Data Partenza: "+dat.value;
      p4.innerText= "Data Rientro: "+datri.value;
      p5.innerText= "Email: "+email.value;
      p6.innerText= "Telefono: "+tel.value;
      p7.innerText= "Destinazione: "+m.value;
      bot.innerHTML= "Rimuovi";

      bot.setAttribute("onclick","removeSection('lista" + con + "')");

      const sec= document.getElementById("liste");
  
     
      sec.appendChild(section);
      section.appendChild(p);
      section.appendChild(p2);
      section.appendChild(p3);
      section.appendChild(p4);
      section.appendChild(p5);
      section.appendChild(p6);
      section.appendChild(p7);
      section.appendChild(bot);
      section.setAttribute('id','lista' + con);
      section.setAttribute('class','lista');


   
   
   }

   function removeSection(idDaCancellare) {
        const elem = document.getElementById(idDaCancellare);
        elem.parentNode.removeChild(elem);
         return false;
    }
  

