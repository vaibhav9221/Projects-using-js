function isAge(){
    var n= prompt("Enter you age of year");
    var days=(2021-n)*365;
    var h1=document.createElement("h1");
    var textAnswer=document.createTextNode("Your age is "+ days+" days.");
    h1.setAttribute('id','Age')
    h1.appendChild(textAnswer);
    document.getElementById("flex-box").appendChild(h1);
    console.log(days)
}

function reset(){
    document.getElementById('Age').remove();
}

function GenerateCat(){
   
    var dav=document.getElementById("flex-cat-gen");
    var image=document.createElement("img");
    image.src="company.png";
    dav.appendChild(image);
}

// challenge 3

let allbuttons=document.getElementsByTagName("button");
let copybuttons=[];
for (i=0; i<allbuttons.length ;i++){
    copybuttons.push(allbuttons[i].classList[1]);
}
console.log(copybuttons);

function buttoncolorChange(buttonthing){
    if (buttonthing.value==="red") {
        redCalled();
    } else if(buttonthing==="green") {
        greenCalled();

    } else if(buttonthing==="Reset") {
        resetCalled();
    } else if(buttonthing==="Random") {
        randomCalled();
    }
}
function redCalled(){
    for (let i=0 ;i<allbuttons.length;i++);
    allbuttons[i].classList.remove(allbuttons[i].classList);
    console.log(removed);
    allbuttons[i].classList.add("btn-danger")

 }