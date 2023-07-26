
const images = ["image1", "image2", "image3", "image4", "image5"];
let deck = [];
SetUpDeck();

function SetUpDeck(){
  const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  const ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
  
  for (let suitIndex = 0; suitIndex < suits.length; suitIndex++) {
    for (let rankIndex = 0; rankIndex < ranks.length; rankIndex++) {
      let card = ranks[rankIndex] + "_of_" + suits[suitIndex];
      deck.push(card);
    }
  }
  document.getElementById("displayText").innerHTML = deck;
  ShowCardImage();
}

function ShowCardImage(){
  for(let i = 0; i < 5; i++){
    document.getElementById(images[i]).src=`Cards/${deck[i]}.png`;
  }
}


function ShuffleDeck(){
  const shuffledArray = deck.sort((a, b) => 0.5 - Math.random());
  document.getElementById("displayText").innerHTML = shuffledArray;
  ShowCardImage();
}
