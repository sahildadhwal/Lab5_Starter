// explore.js

// Code strongly resembles the link provided to us: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis 
window.addEventListener('DOMContentLoaded', init);

// const speechSynthesis = window.speechSynthesis;

function init() {
  const speechSynthesis = window.speechSynthesis;
  // TODO

  // On page load, all of the available voices that you can use for your 
  // SpeechSynthesizer should be loaded and populate the “Select Voice” dropdown. 
  // (These are browser specific, so you might get different ones browser to browser).
  
  const voiceSelect = document.querySelector('select');
  const inputTxt = document.querySelector('textarea');
  
  let voices = [];
  function populateVoiceList() {
  voices = speechSynthesis.getVoices();
    
    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // When you click the “Press to Talk” button, the following should happen:
    // The text that you have typed into the “Text to speak here” textarea
    // should be spoken out loud using the voice that you have selected.
  
  // const button = document.querySelector('button');
  const button = document.getElementsByTagName('button');   // NOTE from TA: If there is one button, it might be better to use Tag since there is only 1 button
    
  // BUTTON CLICK EVENT
  button[0].addEventListener('click', (event) => {
    event.preventDefault();

// document.querySelector("h2").innerHTML = 'ButtonClicked!'; // lets you know button clicked was registered!

    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);    
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    // synth.speak(utterThis);  // Note: synth, only works if I define it above as a const

// Only while the synthesizer is speaking, the face should swap to being open mouthed (included in the images folder). So, if btn clicked, smile. after speak, close mouth
    speechSynthesis.speak(utterThis);
    let currImage = document.querySelector('#explore img');  // it will choose the first "img" under id:explore 

    // if button pushed, smile only if there is text inputted!
    if(inputTxt.value.length > 0){
      currImage.src = 'assets/images/smiling-open.png';
    }

    // end vs ended: addEventListener("end", myFunction); https://www.w3schools.com/jsref/event_onended.asp https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onended_addeventlistener
    utterThis.addEventListener("end", myFunction);

    function myFunction() {
      currImage.src = 'assets/images/smiling.png';
    }

  });

}