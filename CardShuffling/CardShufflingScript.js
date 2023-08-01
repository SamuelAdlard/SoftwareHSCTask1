
//array of different img ids
const images = ["image1", "image2", "image3", "image4", "image5"];
//deck array
let deck = [];

SetUpDeck();

function SetUpDeck(){
  //array of suits
  const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  //array of ranks
  const ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
  //generates each card
  for (let suitIndex = 0; suitIndex < suits.length; suitIndex++) {
    for (let rankIndex = 0; rankIndex < ranks.length; rankIndex++) {
      //creates the string of the card and places it in the deck array
      let card = ranks[rankIndex] + "_of_" + suits[suitIndex];
      deck.push(card);
    }
  }
  //calls the function to display the cards nicely
  ShowCardArray(deck);
  //Displays the correct images 
  ShowCardImage();
}

//function to display the images
function ShowCardImage(){
  //Loops through the id array for the images
  for(let i = 0; i < 5; i++){
    //sets the first 5 the array int
    document.getElementById(images[i]).src=`Cards/${deck[i]}.png`;
  }
}


function ShuffleDeck(){
  
  const shuffledArray = deck.sort((a, b) => 0.5 - Math.random());
  
  ShowCardArray(shuffledArray);
  ShowCardImage();
}

function ShowCardArray(array)
{
  let displayText = "";
  for(let i = 0; i < array.length; i++)
  {
    let cardText = "";
    for(let j = 0; j < array[i].length; j++)
    {
      if(array[i][j] == "_"){
        cardText += " ";
      }
      else{
        cardText += array[i][j];
      }
    }
    
    displayText += cardText + ", "
  }
  document.getElementById("displayText").innerHTML = displayText;
}
