// let arrayFilmPiccoli = ["image-container"];
// let arrayFilmGrossi = ["zoomed-image"];
 
const arrayFilmPiccoli = document.getElementsByClassName("filmPiccolo");

window.addEventListener('load', function() 
{
  const dude = document.querySelector('#Dude');
  const loginContainer = document.querySelector('.login-container');
  //TODO al carimento della pagina, prendere tutti i film e metterli nell'arrayFilmPiccoli (devi prendere l'elemento HTML che li contiene)
  //devi farti quindi degli oggetti "film" che conterranno tutto ciò che li riguarda
  //RIEMPI SIA L'ARRAY DI FILM PICCOLI CHE QUELLO PER I FILM GRANDI

  // const listaFilmPiccoli = this.document.getElementsByClassName("filmPiccolo");
  const listaFilmGrossi = this.document.getElementsByClassName("filmGrosso");

  // for(let i = 0; i < listaFilmPiccoli.length; i++)
  // {
  //   arrayFilmPiccoli.push(listaFilmPiccoli[i]);
  // }

  // for(let i = 0; i < listaFilmGrossi.length; i++)
  // {
  //   arrayFilmGrossi.push(listaFilmGrossi[i]);
  // }

  dude.addEventListener('click', () =>
  {
      if (loginContainer.classList.contains('show')) 
      {
        loginContainer.classList.remove('show');
      } 
      else 
      {
        loginContainer.classList.add('show');
      }
  });

},

//   const MostraFilm =document.getElementById('MostraFilm');
//   const Tony = document.getElementById('Tony');
//   const MostraSerie = document.getElementById('MostraSerie');
//   const Beth = document.getElementById('Beth');


//   MostraFilm.addEventListener('click', function() 
//   {
      
//       if (Tony.style.display === 'none') 
//       {
//           Tony.style.display = 'block';
//           Beth.style.display = 'none';
//       } 
//       else 
//       {
//           Beth.style.display = 'none';
//           Tony.style.display = 'block';
//       }
//   }
//   );

//   MostraSerie.addEventListener('click', function() 
//   {
//       if (Beth.style.display === 'none') 
//       {
//           Beth.style.display = 'block';
//           Tony.style.display = 'none';
//       } 
//       else 
//       {
//           Tony.style.display = 'none';
//           Beth.style.display = 'block';
//       }
//   });
// });

// const Tony = document.querySelector('.image-container img');
// const TonyZ = document.querySelector('.image-container .zoomed-image-container');

// Tony.addEventListener('click', function() 
// {
//   if (Tony.style.display === 'block') 
//   {
//     Tony.style.display = 'none'
//     TonyZ.style.display = "flex";
//     TonyZ.style.flexDirection = "row";
//     TonyZ.style.justifyContent = "center";

//   } 

// }
// );

// TonyZ.addEventListener('click', function() 
// {
//   TonyZ.style.display = 'none';
  
//   if(Tony.style.display === 'none')
//   {
//     Tony.style.display = 'block';
//   }
// }
// );

function MostraFilm()
{
  const listaFilmPiccoli = this.document.getElementsByClassName("filmPiccolo");
  if(listaFilmPiccoli.style.display=== "none")
  {
    listaFilmPiccoli.style.display = "block";
  }
  else
  {
    listaFilmPiccoli.style.display = "none";
  }
},



function zoomaFilm(id)
{
  // for (const filmArray of arrayFilmPiccoli)
  // {
      const filmPiccolo = document.getElementById("filmPiccolo"+id.toString());
      const filmGrosso = document.getElementById("filmGrosso");
      // if (listaFilmPiccoli.style.display === 'block') 
      // {
        filmGrosso1.src = filmPiccolo.children[0].src;
        listaFilmPiccoli.style.display = 'none'
        filmGrosso.style.display = "flex";
        filmGrosso.style.flexDirection = "row";
        filmGrosso.style.justifyContent = "center";
      // }
  // }
})
