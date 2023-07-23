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
  const times = {
    ".":1,
    "-":3,
    " ":3,
    "/":7 
  }

  for(let i = 0; i < outputText.length; i++)
  {
    //alert(times[outputText[i]]);
    if(outputText[i] != "/" || outputText[i] != " "){
      PlayAudio(times[outputText[i]], 550);
    }
    else{
      PlayAudio(times[outputText[i]], 1);
    }
  }


}


function PlayAudio(time, frequency)
{
  var context = new (window.AudioContext || window.webkitAudioContext)();
  var osc = context.createOscillator(); // instantiate an oscillator
  osc.type = 'sine'; // this is the default - also square, sawtooth, triangle
  osc.frequency.value = frequency; // Hz
  osc.connect(context.destination); // connect it to the destination
  osc.start(); // start the oscillator
  osc.stop(context.currentTime + time); // stop 2 seconds after the current time
}