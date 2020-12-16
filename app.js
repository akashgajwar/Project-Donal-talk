var Translated = document.querySelector("#btn-modify")
var textInput = document.querySelector("#txt-inp")
var output = document.querySelector("#output")

var url = "https://api.funtranslations.com/translate/dolan.json"

function newUrl(text){
    return url+"?"+"text="+text
}

function errorHandler(error){
    console.log("something went wrong", error)
    alert("something went wrong")

}

function clickHandler(){
    var text = textInput.value
    fetch(newUrl(text))
  .then(response => response.json())
  .then(json => {//
    console.log(json)

    if(json.error.code === 429) {
        alert('server is busy')
    }else {
        var transText= json.contents.translation
        output.innerText = transText

    }

})
.catch(errorHandler)
  
    
    
}
Translated.addEventListener("click", clickHandler)
