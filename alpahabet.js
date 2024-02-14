// function playButton() {
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");
//   const playGroundSection = document.getElementById("play-ground");
//   playGroundSection.classList.remove("hidden");
// }
function continueGame(){
    
// const alphabet = getARandomAlphabet();
// console.log(alphabet)

const alphabet = getAlphabetRandom();
console.log(alphabet);



const currentAlphabetElement = document.getElementById('random-alphabet');
currentAlphabetElement.innerText = alphabet;

// addBackgroundColor(alphabet)

setBackgroundColorById(alphabet)

}
function playButton(){
    hidenElementById ('home-screen');
    showElementById('play-ground');
    continueGame();
}
