// expose.js

window.addEventListener('DOMContentLoaded', init);


function chooseHorn(e) {
  // The correct image should display
  // The correct audio sound file should be set
  let currImage = document.querySelector('#expose img');  // it will choose the first "img" under id:expose 
  let currAudio = document.querySelector('audio');        // there is only 1 audio
  
  if(e.target.value.length == 8){
    if(e.target.value == "air-horn" ){
      currImage.src = "assets/images/air-horn.svg";
      currAudio.src = "assets/audio/air-horn.mp3"
    }
    else{
      currImage.src = "assets/images/car-horn.svg";
      currAudio.src = "assets/audio/car-horn.mp3"   
    }
  }
  else if(e.target.value.length == 10){
    currImage.src = "assets/images/party-horn.svg";
    currAudio.src = "assets/audio/party-horn.mp3"
  }

}

function init() {
  // TODO
  // 1) When you select a horn from the drop down menu, the following should occur:

    const hornType = document.querySelector('select');
    hornType.addEventListener('change', chooseHorn);
    
  // 2) When you change the volume on the slider, the following should occur:

  // 3) When you click the “Play Sound” button the following should occur:

  
}
