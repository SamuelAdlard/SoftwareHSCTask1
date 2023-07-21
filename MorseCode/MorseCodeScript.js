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
  "T": "- ",
  "U": "..-",
  "V": "...-",
  "W": ".--",
  "X": "-..-",
  "Y": "-.--",
  "Z": "--..",
  " ": "/"
}

function Translate()
{
  const inputText = document.getElementById("textToTranslate").value;
  alert(inputText);
  let outputText = "";
  for(let i = 0; i < inputText.length; i++)
  {
    outputText += morseCodeTable[inputText[i]] + " ";
  }

  console.log(outputText);
}