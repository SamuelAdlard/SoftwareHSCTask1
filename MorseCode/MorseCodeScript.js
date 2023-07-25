const morseCodeTable ={ //Table that contains all the morse code character values
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




function Translate()
{
  //gets the input of the user
  const inputText = document.getElementById("textToTranslate").value.toUpperCase();
  //clears the output string to allow more values to be added
  let outputText = "";
  for(let i = 0; i < inputText.length; i++)
  {
    //loops through all the characters entered in the normal alphabet and translates them to morse code
    outputText += morseCodeTable[inputText[i]] + " "; //adds a space onto the end 
  }

  //Displays the translated text on screen
  document.getElementById("Output").innerHTML=outputText;
  console.log(outputText);
  
  //Loops through the output and plays the appropriate sound
  for(let i = 0; i < outputText.length; i++)
  {
    setTimeout(() =>{
    
      GenerateAudio(outputText,i);//Calls the function that plays the current morse code character
    }, 1000 * i) //Waits before playing each sound
  }

  
  
  
  
}

function GenerateAudio(outputText, index)
{
  //gets the character that is being worked on
  const character = outputText[index];
  //creates a new audio context
  const audioContext = new AudioContext();
  //creates a new oscillator
  const oscillator = audioContext.createOscillator();
  //sets the oscillator type to sine
  oscillator.type = 'sine';
  //connects the oscillator to the speakers 
  oscillator.connect(audioContext.destination);
  
  
  //Doesn't play a sound if the character is a / or a space
  if(character != "/" && character != " "){
    //starts playing a sound
    oscillator.start();
    console.log(`Started! ${index} Character playing ${character}`);
  }
  else if(character == "/"){ //Waits a certain time to return between words
    setTimeout(() => {
      return;
    }, 1400);
  }
  
  //Stops the sound at the right time to make it a dit
  if(character == ".")
  {
    setTimeout(() => {
      oscillator.stop();
      console.log(`Ended! ${index} Character playing ${character}`);
    }, 200);
  }
  //Stops the sound at the right time to make it a dah
  else if(character == "-")
  {
    setTimeout(() => {
      oscillator.stop();
      console.log("Ended");
    }, 600);
  }
}

