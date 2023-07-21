const morseCodeTable ={
  "A": ".-",
  "B": "-...",
  "C": "-.-.",
  "D": "-..",
  "E": ".",
  "F": "..-.",
  "G": "--.",
  "H": "....",
  "I": "..",
  "J": ".---",
  "K": "-.-",
  "L": ".-..",
  "M": "--",
  "N": "-.",
  "O": "---",
  "P": ".--.",
  "Q": "--.-",
  "R": ".-.",
  "S": "...",
  "T": "-",
  "U": "..-",
  "V": "...-",
  "W": ".--",
  "X": "-..-",
  "Y": "-.--",
  "Z": "--..",
  " ": "/",
  ".":"/... - --- .--."
}

function Translate()
{
  const inputText = document.getElementById("textToTranslate").value.toUpperCase();
  
  let outputText = "";
  for(let i = 0; i < inputText.length; i++)
  {
    outputText += morseCodeTable[inputText[i]] + " ";
  }

  document.getElementById("Output").innerHTML=outputText;
  console.log(outputText);
  GenerateAudio(outputText);
}

function GenerateAudio(outputText)
{
  const timeTable = {
    
  }
}


function PlayAudio()
{
  var context = new (window.AudioContext || window.webkitAudioContext)();
  var osc = context.createOscillator(); // instantiate an oscillator
  osc.type = 'sine'; // this is the default - also square, sawtooth, triangle
  osc.frequency.value = 550; // Hz
  osc.connect(context.destination); // connect it to the destination
  osc.start(); // start the oscillator
  osc.stop(context.currentTime + 2); // stop 2 seconds after the current time
}