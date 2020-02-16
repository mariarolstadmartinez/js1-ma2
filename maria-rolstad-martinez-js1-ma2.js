// question 1

const myFunctionExpression = function() {
    console.log ("Maria Rolstad-Martinez");                                                                                                                
};

myFunctionExpression();

// question 2

const clickButton = document.querySelector("btn");

function afterClick(){
    console.log("I was clicked");
}

clickButton.addEventListener("click", afterClick);

// question 3

const firstName = document.querySelector("#firstName");

function logKeyValue(event) {
    console.dir(event.key);
}

firstName.addEventListener("keydown", logKeyValue);

// question 4

const buttonHover = document.querySelector("button");

function hoverCallback() {
    console.log("button hover");
}

buttonHover.addEventListener("mouseover", buttonHover);

// question 5

const button = document.querySelector("[data-animal='dog']");
button.addEventListener("mouseout", removeClass);

function removeClass(event) {
    event.target.classList.remove("hover");
}

// question 6

const animalList = document.querySelectorAll("li");

for(let i = 0; i < animalList.length; i++){
    animalList[i].addEventListener("mouseover", scanItems);
}

function scanItems(event){
    consolge.log(event.target.dataset.animal);
}

// question 7

const animal = "cow";

switch (animal) {
    case"cat":
    console.log("Meow");
    break;
    
    case"cow":
    console.log("Moo");
    break;

    case"bird":
    console.log("Tweet");
    break;

    default:
    consolge.log("Harrumph");

}

// question 8

const sheep = ["Malcom", "Anders", "Marie"];

function sheepNames (sheep) {
    consolge.log(sheep);
}

sheep.forEach(sheepNames);

// question 9

function logTime(){
    console.log("hello");

    if(counter === 5) {
        clearInterval(interval);
    }

    counter++;
}

let counter = 0;
const intervalId = setInterval(logTime, 500);

// question 10

const placeholderText = document.querySelector("div.container");

function updateText() {
    placeholderText.innerText = "Text updated";
}

setTimeout(updateText, 2000);
