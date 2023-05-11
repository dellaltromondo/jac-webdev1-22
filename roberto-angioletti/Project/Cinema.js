window.addEventListener('load', function() 
{
  const dude = document.querySelector('#Dude');
  const loginContainer = document.querySelector('.login-container');

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



  const MostraFilm =document.getElementById('MostraFilm');
  const Tony = document.getElementById('Tony');
  const MostraSerie = document.getElementById('MostraSerie');
  const Beth = document.getElementById('Beth');


  MostraFilm.addEventListener('click', function() 
  {
      
      if (Tony.style.display === 'none') 
      {
          Tony.style.display = 'block';
          Beth.style.display = 'none';
      } 
      else 
      {
          Beth.style.display = 'none';
          Tony.style.display = 'block';
      }
  }
  );

  MostraSerie.addEventListener('click', function() 
  {
      if (Beth.style.display === 'none') 
      {
          Beth.style.display = 'block';
          Tony.style.display = 'none';
      } 
      else 
      {
          Tony.style.display = 'none';
          Beth.style.display = 'block';
      }
  });
});

const Tony = document.querySelector('.image-container img');
const TonyZ = document.querySelector('.image-container .zoomed-image');

Tony.addEventListener('click', function() 
{
  TonyZ.style.visibility = 'visible';
  TonyZ.style.left = '0';
}
);

TonyZ.addEventListener('click', function() 
{
  TonyZ.style.visibility = 'hidden';
  TonyZ.style.left = '100%';
}
);
