
let lyrics = "";



function GenerateLyrics(i)
{
    
    if(i == 0)
    {
        return;
    }

    let currentLine = GenerateText(i);
    
    TextToSpeech(currentLine);
    CreateTextObject(i);

   
    
    
    GenerateLyrics(i - 1);
}



function CreateTextObject(i){
    const para = document.createElement("p");
    let node = "Hello";
    node = document.createTextNode(GenerateText(i));
    
    para.appendChild(node);
    const element = document.getElementById("div1");
    element.appendChild(para);
}

function GenerateText(i)
{
    if(i > 1)
    {
        
        lyrics += ` ${i} bottles of beer on the wall ${i} bottles of beer. Take one down pass it around ${i-1} bottles of beer on the wall!`;
        return `${i} bottles of beer on the wall ${i} bottles of beer. Take one down pass it around ${i-1} bottles of beer on the wall!`;
    }
    else{
        
        lyrics += ` ${i} bottle of beer on the wall ${i} bottle of beer. Take one down pass it around ${i-1} bottle of beer on the wall!`;
        return `${i} bottle of beer on the wall ${i} bottle of beer. Take one down pass it around ${i-1} bottles of beer on the wall!`;
    }
}



function TextToSpeech(i)
{
    let oHttp = new XMLHttpRequest();
    oHttp.open("POST", "https://api.elevenlabs.io/v1/text-to-speech/AZnzlk1XvdvUeBnXmlld");
    oHttp.setRequestHeader("Accept", "audio/mpeg");
    oHttp.setRequestHeader("Content-Type", "application/json");
    oHttp.setRequestHeader("xi-api-key", "4b2cf4739f54a9fa40f8ca17f0fe90fd");

    oHttp.onload = function () {
        if (oHttp.readyState === 4) {

           

            var oBlob = new Blob([this.response], { "type": "audio/mpeg" });
            var audioURL = window.URL.createObjectURL(oBlob);
            var audio = new Audio();
            audio.src = audioURL;
            audio.play();
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




