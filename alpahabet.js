// function playButton() {
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");
//   const playGroundSection = document.getElementById("play-ground");
//   playGroundSection.classList.remove("hidden");
// }


function handleKeyboardButtonPress(event){
 const pressed = event.key;
 console.log('played presed',pressed);

 
 if(pressed === 'Escape'){
gameOver();
 }

 //get the expected to press
 const randomAlphabetElement = document.getElementById('random-alphabet');
const randomAlphabet = randomAlphabetElement.innerText;
console.log(pressed,randomAlphabet)


//check matched or not
if(pressed === randomAlphabet){
    console.log('get a point');

const currentScore = getTextElementValueById('current-score');
const newScore = currentScore + 1;

setTextElementValueById('current-score', newScore)
// console.log(currentScore)
// return newScore




// const currentScoreElement = document.getElementById('current-score');
// const currentScoreText = currentScoreElement.innerText;
//     const currentScore =  parseInt(currentScoreText);
//     console.log(currentScore)
//     const newScore = currentScore + 1;
    
//  currentScoreElement.innerText = newScore

    removeBackgroundColorById(randomAlphabet)
    continueGame();
}else{
   console.log('you missed');

const currentLife = getTextElementValueById('current-life');
const newLife = currentLife - 1;
setTextElementValueById('current-life', newLife)

if(newLife === 0){
  gameOver();
}
//     //step-1: get the current
//     const currentLifeScore = document.getElementById('current-life');
//     const correntLifeText = currentLifeScore.innerText;
//    const currentLife = parseInt(correntLifeText);
// //    2.incase the score by 1 
//    const newLife= currentLife - 1;
// // show the update score
//    currentLifeScore.innerText = newLife;
}

 
}
//capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress)



function continueGame(){
// const alphabet = getARandomAlphabet();
// console.log(alphabet)
const alphabet = getAlphabetRandom();
// console.log(alphabet);


const currentAlphabetElement = document.getElementById('random-alphabet');
currentAlphabetElement.innerText = alphabet;
setBackgroundColorById(alphabet)

}
function playButton(){
    hidenElementById ('home-screen');
    hidenElementById('final-score')
    showElementById('play-ground');
    setTextElementValueById('current-life' ,5)
    setTextElementValueById('current-score',0)
    continueGame();

}

function gameOver(){
    hidenElementById('play-ground');
    showElementById('final-score');

    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);
    

    const currentAlphabet = getsElementById('random-alphabet')
    removeBackgroundColorById(currentAlphabet)

}