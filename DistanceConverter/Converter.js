function ConvertUnits()
{
    //Gets the value of the selected unit in metres
    const convertingFromUnit = document.getElementById("convertingFromUnit").value;
    //Gets the value of the selected unit to convert to in metres
    const convertingToUnit = document.getElementById("convertingToUnit").value;
    //Gets the quantity of the chosen unit the player wants to convert
    const quantityOfUnit = document.getElementById("quantityInputBox").value;
    //converts the unit entered to metres
    const unitInMetres = quantityOfUnit / convertingFromUnit;
    //Converts the quantity of the given unit in metres into the unit chosen by the user
    const finalResult = unitInMetres * convertingToUnit;
    //displays the answer
    document.getElementById("answerText").innerHTML="Answer: " + finalResult;
}