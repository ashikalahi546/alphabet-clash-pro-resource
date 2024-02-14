function hidenElementById (elementId){
    const hiddenElement = document.getElementById(elementId);
    hiddenElement.classList.add('hidden')
}

function showElementById(elementId){
const showElement = document.getElementById(elementId);
showElement.classList.remove('hidden')
}

// function getARandomAlphabet(){

// // get or create a alphabet
//     const alphabetString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const alphabets = alphabetString.split('');
//     // console.log(alphabets);

//     // get a random index
//     const randoms = Math.random() * 25;
//     const rounds = Math.round(randoms);


//     const alphabet = alphabets[rounds];
// //   console.log(alphabet,rounds);
//   return alphabet


// }

// function setBackgroundColor(elementId){
// const element = document.getElementById(elementId);
// element.classList.add('bg-orange-500');
// }

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500', 'text-white')
}


function getAlphabetRandom(){
    const alphabetString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
       const lowerCase = alphabetString.toLowerCase();
    const alphabets = lowerCase.split('');

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet  = alphabets[index];
    return alphabet;
}