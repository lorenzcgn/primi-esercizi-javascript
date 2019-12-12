
let PippoDiv = document.getElementById("pippo")
PippoDiv.style.border = "10px solid red"

let CiaoClassDiv =document.getElementsByClassName("ciao")
console.log(CiaoClassDiv)
for(let i=0; i<CiaoClassDiv.length; i++) {
    CiaoClassDiv[i].style.border ="3px solid green"
}

let PageDivs = document.querySelectorAll("[test]")
console.log(PageDivs)
for(let i=0; i<PageDivs.length; i++){
    PageDivs[i].style.backgroundColor="yellow"
}

const ulTag = document.querySelector("ul")
function ClearList() {
    let liTags = document.querySelectorAll("ul > li")
    console.log(liTags)
    for(let i=0; i<liTags.length; i++){
        ulTag.removeChild(liTags[i])
    }
}

function AppendTolist(text){
    AddToList(text)
}

function PrependToList(text){
    AddToList(text, false)
}

function AddToList(text, append = true){
    let elementToAdd = document.createElement("li")
    elementToAdd.innerHTML=text
    if (append) { 
        ulTag.appendChild(elementToAdd)
    } else {
        ulTag.prepend(elementToAdd)
    }
}

ClearList();
AppendTolist("Prova")
AppendTolist("Prova 2");
PrependToList("Prova 3");


const addTimeBtn =document.getElementById("addTime")
addTimeBtn.onclick = event => {
    AppendTolist(Date.now())
}

PippoDiv.onpointerenter = event => console.log(event.target)

PippoDiv.onpointerenter = event => {
    PrependToList(Date.now())
}