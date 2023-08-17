const inputField = document.getElementById("height-input");
const button = document.getElementById("count-button")
inputField.addEventListener("input", function()){
    const inputValue = inputField.value
 
    if (inputValidation(inputValue)){
        console.log("answered")
        button.style.display = "block"

    } else{
        console.log("fail")
        
    }
}

function inputVal(input){
    const intergerRegex = /^-?\+$/;
    return intergerRegex.test(input)

}