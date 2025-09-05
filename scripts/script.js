/* Stap 1: Selecteer de knop */
let expandButton = document.querySelector('.profile-card-example-button')

/* Stap 2: Wacht tot iemand op die knop klikt */
expandButton?.addEventListener('click', function() {

  /* Stap 3: Verander een class zodra iemand op die knop klikt */
  document.body.classList.toggle('is-expanded')
})
let audio1 = document.querySelector('#myAudio')
 function playAudio() { 
  audio1.play(); 
} 


     
