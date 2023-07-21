
//variable that keeps track of the whole song
let lyrics = "";


//The function that generates the lyrics
function GenerateLyrics(i)
{
    //makes sure the song doesn't go below 0
    if(i <= 0)
    {
        return;
    }

    //Creates the text that is shown on screen
    CreateTextObject(i);
    
    //Speaks the lyrics
    TextToSpeech(i);
    
}


//Creates the text object
function CreateTextObject(i){
    //creates a paragraph text element
    const para = document.createElement("p");
    
    let node = "Hello";
    //creates a text block with the approapriate line of the song
    node = document.createTextNode(GenerateText(i));
    //puts the text object in another existing object
    para.appendChild(node);
    const element = document.getElementById("div1");
    element.appendChild(para);
}

function GenerateText(i)
{
    //generates the lines for the song depending on whether there are one or beers left
    if(i > 1)
    {
        //with plurals
        lyrics += ` ${i} bottles of beer on the wall ${i} bottles of beer. Take one down pass it around ${i-1} bottles of beer on the wall!`;
        return `${i} bottles of beer on the wall ${i} bottles of beer. Take one down pass it around ${i-1} bottles of beer on the wall!`;
    }
    else{
        //without plurals
        lyrics += ` ${i} bottle of beer on the wall ${i} bottle of beer. Take one down pass it around ${i-1} bottle of beer on the wall!`;
        return `${i} bottle of beer on the wall ${i} bottle of beer. Take one down pass it around ${i-1} bottles of beer on the wall!`;
    }
}



function TextToSpeech(i)
{
    //sends a request to the API
    let oHttp = new XMLHttpRequest();
    oHttp.open("POST", "https://api.elevenlabs.io/v1/text-to-speech/AZnzlk1XvdvUeBnXmlld");
    oHttp.setRequestHeader("Accept", "audio/mpeg");
    oHttp.setRequestHeader("Content-Type", "application/json");
    oHttp.setRequestHeader("xi-api-key", "445f80c1fe08a68ffc5a6ee07ce8827b");

    oHttp.onload = function () {
        if (oHttp.readyState === 4) {

           

            var oBlob = new Blob([this.response], { "type": "audio/mpeg" });
            var audioURL = window.URL.createObjectURL(oBlob);
            var audio = new Audio();
            //Plays the audio file that was sent back by the server
            audio.src = audioURL;
            audio.play();
            //waits for the audio to finish playing before calling the original function again
            audio.addEventListener("ended", function() 
            {      
                GenerateLyrics(i-1)
            });
        }
    }; 

    var data = {
        text: GenerateText(i),
        voice_settings: { stability: 0.5, similarity_boost: 0.5 }
    };

    oHttp.responseType = "arraybuffer";
    oHttp.send(JSON.stringify(data));

}