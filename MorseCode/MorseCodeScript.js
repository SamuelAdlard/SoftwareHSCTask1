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
  ".":"/... - --- .--.",
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----."
}

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const oscillator = audioContext.createOscillator();
oscillator.connect(audioContext.destination);
oscillator.frequency.value = 440; // 440 Hz is the frequency of the note A
oscillator.type = 'sine';



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
  
  for(let i = 1; i <= outputText.length; i++)
  {
    setTimeout(() =>{
    
      GenerateAudio(".",0);
    }, 1000 * i) //put this in a for loop and multiply the time by the index
  }

  
  
  
  
}

function GenerateAudio(outputText, index)
{
  
  const character = outputText[index];
  const audioContext = new AudioContext();
  const oscillator = audioContext.createOscillator();
  oscillator.type = 'sine';
  oscillator.connect(audioContext.destination);
  oscillator.start();

  
  if(character == ".")
  {
    setTimeout(() => {
      oscillator.stop();
    }, 200);
  }
  else if(character == "-")
  {
    setTimeout(() => {
      oscillator.stop();
    }, 400);
  }
  
  

  

}

