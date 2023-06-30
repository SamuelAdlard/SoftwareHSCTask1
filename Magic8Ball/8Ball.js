function GenerateAnswer()
{
    //array containing all possible responses
    const responses = [" It is certain."," It is decidedly so.","Without a doubt.","You may rely on it.", "As I see it, yes.","Most likely.","Outlook good."," Yes.","Signs point to yes.",
                        "Reply hazy, try again."," Ask again later."," Better not tell you now.","Cannot predict now."," Concentrate and ask again.", "Don't count on it.", "My reply is no."
                        ," My sources say no.","Outlook not so good.","Very doubtful."];
    //Sets the text of the answer box to a random response
    document.getElementById("ResponseBox").innerHTML= responses[GenerateRandomNumber(responses.length)];    
}

//Function for generating random numbers
function GenerateRandomNumber(numberOfPossibleAnswers)
{
    //returns a random number between the first and last indexes of an array
    return Math.round(Math.random() * numberOfPossibleAnswers - 1);
}