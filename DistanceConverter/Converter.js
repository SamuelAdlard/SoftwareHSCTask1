function ConvertUnits()
{
    const convertingFromUnit = document.getElementById("convertingFromUnit").value;
    const convertingToUnit = document.getElementById("convertingToUnit").value;
    const quantityOfUnit = document.getElementById("quantityInputBox").value;
    const unitInMetres = quantityOfUnit / convertingFromUnit;
    const finalResult = unitInMetres * convertingToUnit;

    document.getElementById("answerText").innerHTML="Answer: " + finalResult;
}