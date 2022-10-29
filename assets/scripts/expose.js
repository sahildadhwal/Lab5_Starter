// expose.js

window.addEventListener('DOMContentLoaded', init);

const jsConfetti = new JSConfetti()

//jsConfetti.addConfetti()
// ... 
//jsConfetti.clearCanvas()

function chooseHorn(e) {
  // The correct image should display
  // The correct audio sound file should be set
  let currImage = document.querySelector('#expose img');  // it will choose the first "img" under id:expose 
  let currAudio = document.querySelector('audio');        // there is only 1 audio // note: TA mentioned hidden class.
  
  if(e.target.value.length == 8){
    if(e.target.value == "air-horn" ){
      currImage.src = "assets/images/air-horn.svg";
      currAudio.src = "assets/audio/air-horn.mp3";
    }
    else{
      currImage.src = "assets/images/car-horn.svg";
      currAudio.src = "assets/audio/car-horn.mp3";   
    }
  }
  else if(e.target.value.length == 10){
    currImage.src = "assets/images/party-horn.svg";
    currAudio.src = "assets/audio/party-horn.mp3";
  }

}

function changeVol(e) {
  let volLength = document.querySelector("#volume-controls img") // it will choose the first "img" under id:volume-controls 

  // At zero volume, the mute icon (level 0) should be displayed
  if(e.target.value == 0){
    volLength.src = "assets/icons/volume-level-0.svg";
  }
  // From 1 to < 33 volume the first volume level should be displayed
  else if(e.target.value < 33){
    volLength.src = "assets/icons/volume-level-1.svg";
  }
  // From 33 to < 67 volume the second volume level should be displayed
  else if(e.target.value < 67 ){
    volLength.src = "assets/icons/volume-level-2.svg";
  }
  // From 67 and up the third volume level should be displayed
  else if(e.target.value >= 67 ){
    volLength.src = "assets/icons/volume-level-3.svg";
  }

  // The correct volume icon should be set
  // The corresponding volume should be set for the audio element (note: this element’s volume is not out of 100)
  let currAudio = document.querySelector('audio');        // there is only 1 audio // note: TA mentioned hidden class.     
  currAudio.volume = e.target.value / 100;
}

function buttonClicked() {
  // The corresponding sound for the horn selected should play out loud at the specified volume
  let currAudio = document.querySelector('audio');        // there is only 1 audio // note: TA mentioned hidden class.     
  // If the Party Horn is selected, confetti should shoot out out, as shown in the video
  const hornType = document.querySelector('select');
  if(hornType.value == "party-horn"){
    jsConfetti.addConfetti();
  }

  currAudio.play()
  
  // A library has been included for you to accomplish this, more on how to use it here https://github.com/loonywizard/js-confettiLinks to an external site.
  // Do not run the installation steps, or include the import statement as we have already installed and imported the confetti library for you 
 
}

function init() {
  // TODO
  // 1) When you select a horn from the drop down menu, the following should occur:
    const hornType = document.querySelector('select');
    hornType.addEventListener('change', chooseHorn);

  // 2) When you change the volume on the slider, the following should occur:
    const volLength = document.getElementById('volume'); // for id:volume, value changes bar length.
    volLength.addEventListener('change', changeVol);

  // 3) When you click the “Play Sound” button the following should occur:
  const button = document.querySelector('button');
  button.addEventListener('click', buttonClicked);
  
}
