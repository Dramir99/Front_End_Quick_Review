//index.js
const formInfo = document.getElementById("formInfo")
const contactFrom = document.getElementById("contactForm")
const experience = document.getElementsByClassName("experience")

function showMessage(message){
    
    formInfo.innerHTML = "<p>" + message + "</p>"
}

contactFrom.addEventListener("submit", function(event){
    event.preventDefault();
    showMessage("Sending your message...")
} )


for (let x = 0; x < experience.length; x++){
    const item = experience[x]
    item.addEventListener("mouseenter", function(event){
        event.target.style = "background-color: #999999;"
    });
    item.addEventListener("mouseleave", function(event){
        event.target.style = ""
    });
}