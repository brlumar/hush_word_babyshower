const incorrectBTN = document.getElementById('xmark'); //variable that gives access to x mark 
const correctBTN = document.getElementById('checkmark'); //varible that give access to checkmark
const guessWordEl = document.querySelector('.guess-this');
const buzzWord1El = document.querySelector('.buzzword1');
const buzzWord2El = document.querySelector('.buzzword2');
const buzzWord3El = document.querySelector('.buzzword3');
const buzzWord4El = document.querySelector('.buzzword4');
const timeElement = document.getElementById('time'); //variable that gives access to the clock in the DOM 
// const startOne = document.getElementById('team-one-button'); //points to team one start button
// const startTwo = document.getElementById('team-two-button'); //points to team two start button
const audioElBuzzer = document.getElementById('buzzer');
const audioEltimer = document.getElementById('end-turn');
const audioElCorrect = document.getElementById('correct');
const audioElTimerEnd = document.getElementById('timer-running');
const audioElAww = document.getElementById('aww');
const playarea = document.getElementById('playarea');
const startBtn = document.getElementById('start-btn'); //points to the button that starts the game

const howToBtn = document.getElementById('howToBtn'); //points to the how to play button on the DOM
const howTo = document.getElementById('howTo'); //points to the section of the dom that shows the how to play modal
const hideHowToBtn = document.getElementById('hide-how-to');//points to "back to game" btn
const wordListBtn = document.getElementById('wordListBtn'); //points to the section of the dom that shows the how to play modal


const answerButtons = document.getElementById('answer-buttons');
const answerButtons2 = document.getElementById('answer-buttons2');


let index = 0;

let scoreOneDisplay = document.querySelector('.team-one-score'); //points to team one display in the DOM
let scoreTwoDisplay = document.querySelector('.team-two-score'); //points to team two display in the DOM


let randomIndex = Math.floor(Math.random() * cardData.length);

let currentCardIndex = Math.floor(Math.random() * cardData.length); //index that indicates which card is currently being displayed
let time = 0; //seconds allowed per turn
let timerInterval; //variable for the clock interval
let teamScoreOne = 0; //holds the score for team one
let teamScoreTwo = 0; //holds the score for team two
let whoseTurn = 1;

let cardModal = document.getElementById('card-modal');
''

let team1words = [];

// let team1words = [{
//     word: "airplane",
//     correctness: true
// },
// {
//     word: "cereal",
//     correctness: true
// }];

// let newword = {
//     word: "shoebox",
//     correctness: false
// }

// team1words.push(newword);
// console.log(team1words);

// team1words.forEach(word => {
//     console.log("this is ", team1words[index].word);
// }
// );

function toggleCorrectness() {
    console.log("correctness changed");
}

team1words.forEach(word => {

    const button = document.createElement('button'); //creates a button
    button.innerText = team1words[index].word; //changes the inner text of the button
    index++;
    console.log('index is :', index);
    button.classList.add('btn');
    button.classList.add('list-group-item');

    button.addEventListener('click', toggleCorrectness);
    answerButtons.appendChild(button);
});




function startTurn() {
    if (whoseTurn == 1) {
        if (time == 0) {
            clearCard();
            updateCard();
            startTimer();
            hideWordList();

            time = 60; //resets the timer to 60 seconds
            clearInterval(timerInterval); //temperarily keeps the timer interval from doubling up. disabling the button while time is running with fix the issue permantantly
            showCard();
            timerInterval = setInterval(updateTimer, 1000);

            // whoseTurn = 1;
            console.log("It's team ", whoseTurn, " turn.");
            print();
        } else {
            playTimerRunning();

        }
    } else {
        if (time == 0) {
            clearCard();
            updateCard();
            startTimer();
            hideWordList();

            time = 60; //resets the time to 60 seconds 
            clearInterval(timerInterval); //temperarily keeps the timer interval from doubling up. disabling the button while time is running with fix the issue permantantly
            showCard();
            timerInterval = setInterval(updateTimer, 1000);
            // whoseTurn = 2;
            console.log("It's team ", whoseTurn, " turn.");
            print();
        } else {
            playTimerRunning();
        }


    }
}

// function startTurnOne() {
//     if (time == 0) {
//         clearCard();
//         updateCard();
//         startTimer();
//         time = 60; //resets the timer to 60 seconds
//         clearInterval(timerInterval); //temperarily keeps the timer interval from doubling up. disabling the button while time is running with fix the issue permantantly

//         timerInterval = setInterval(updateTimer, 1000);

//         whoseTurn = 1;
//         console.log("It's team ", whoseTurn, " turn.");
//         print();
//     } else {
//         playTimerRunning();

//     }
// }

// function startTurnTwo() {
//     if (time == 0) {

//         clearCard();
//         updateCard();
//         startTimer();
//         time = 60; //resets the time to 60 seconds 
//         clearInterval(timerInterval); //temperarily keeps the timer interval from doubling up. disabling the button while time is running with fix the issue permantantly

//         timerInterval = setInterval(updateTimer, 1000);
//         whoseTurn = 2;
//         console.log("It's team ", whoseTurn, " turn.");
//         print();
//     } else {
//         playTimerRunning();
//     }
// }

function print() { //used just to make sure the whoseTurn varible is changing outside of the function. TO BE DELETED
    console.log("It's team ", whoseTurn, " turn outside of the function.");
}

//fuction that updates the time and subtract and extra second afer wrong answer
function updateTimer() {
    timeElement.innerText = time;
    if (time <= 0) {
        clearInterval(timerInterval);
        writeToWordListPass();
        hideCard();
        playBuzzer();
        playEndTurn();
        
        showWordList();
        if (whoseTurn == 1) {
            whoseTurn++;
        } else if (whoseTurn == 2) {
            whoseTurn--;
        }

    } else {
        time--;
    }
}

function startTimer() {

}


function writeToWordList() {
    const currentWord = cardData[currentCardIndex]; //stores the current questions into a const for easier, cleaner use in function
    team1words.push(currentWord.guessWord);
    const button = document.createElement('li'); //creates a list item to later be made clickable
    button.innerText = currentWord.guessWord; //changes the inner text of the button
    // index++;
    // console.log('index is :', index);
    button.classList.add('btn');
    button.classList.add('list-group-item');
    button.classList.add('text-bg-success');


    button.addEventListener('click', toggleCorrectness);
    if (whoseTurn == 1) {
        answerButtons.appendChild(button);
    } else {
        answerButtons2.appendChild(button);

    }
}

function writeToWordListPass() { //adds passed words to wordlist
    const currentWord = cardData[currentCardIndex]; //stores the current questions into a const for easier, cleaner use in function
    team1words.push(currentWord.guessWord);
    const button = document.createElement('li'); //creates a list item to later be made clickable
    button.innerText = currentWord.guessWord; //changes the inner text of the button
    // index++;
    // console.log('index is :', index);
    button.classList.add('btn');
    button.classList.add('list-group-item');
    button.classList.add('text-decoration-line-through');
    button.classList.add('fw-lighter');
    // button.classList.add('text-bg-warning');



    button.addEventListener('click', toggleCorrectness);
    if (whoseTurn == 1) {
    answerButtons.appendChild(button);
    }else{
        answerButtons2.appendChild(button);

    }
}


function addToScore() {
    if (time >= 0) {
        writeToWordList();
        // const currentWord = cardData[currentCardIndex]; //stores the current questions into a const for easier, cleaner use in function
        // team1words.push(currentWord.guessWord);
        // const button = document.createElement('button'); //creates a button
        // button.innerText = currentWord.guessWord; //changes the inner text of the button
        // // index++;
        // // console.log('index is :', index);
        // button.classList.add('btn');
        // button.classList.add('list-group-item');

        // button.addEventListener('click', toggleCorrectness);
        // answerButtons.appendChild(button);
        writeScore();


        console.log('score one is: ', teamScoreOne, 'score two is: ', teamScoreTwo);
        clearCard();
        currentCardIndex = Math.floor(Math.random() * cardData.length);

        updateCard();

    }
}

function pass() {
    writeToWordListPass();
    clearCard();
    currentCardIndex = randomIndex = Math.floor(Math.random() * cardData.length);

    updateCard();

    playAww();
}

function writeScore() {
    if (whoseTurn == 1) {
        teamScoreOne++;
        scoreOneDisplay.innerText = teamScoreOne;
        console.log("It's team ", whoseTurn, " turn in writeScore func.");
        playCorrect();
    } else {
        teamScoreTwo++;
        scoreTwoDisplay.innerText = teamScoreTwo;
        console.log("It's team ", whoseTurn, " turn in writeScore func.");
        playCorrect();

    }
}


function gotItRight() {


}


function showCard() {

    playarea.style.display = 'flex';

}

function hideCard() {
    playarea.style.display = 'none';
}

function showWordList() {
    wordlistContainer.style.display = 'flex'

}
function hideWordList() {
    wordlistContainer.style.display = 'none'

}



// showCard();

function clearCard() {
    guessWordEl.innerText = '';
    buzzWord1El.innerHTML = '';
    buzzWord2El.innerHTML = '';
    buzzWord3El.innerHTML = '';
    buzzWord4El.innerHTML = '';
}

function updateCard() { //Function that updates the card information
    clearCard(); //function that clears previous question from the contatiner if it exist
    const word = cardData[currentCardIndex]; //stores the current questions into a const for easier, cleaner use in function
    guessWordEl.innerText = word.guessWord; //moves question to the display text
    buzzWord1El.innerText = word.tabooWords[0].buzzword;
    buzzWord2El.innerText = word.tabooWords[1].buzzword;
    buzzWord3El.innerText = word.tabooWords[2].buzzword;
    buzzWord4El.innerText = word.tabooWords[3].buzzword;


}

function playBuzzer() {
    audioElBuzzer.play();
}

function playEndTurn() {
    audioEltimer.play();
}
function playCorrect() {
    audioElCorrect.play();
}

function playTimerRunning() {
    audioElTimerEnd.play();
}
function playAww() {
    audioElAww.play();
}

function showHowTo() { //shows the instructions when "How To Play" is clicked
    howTo.style.display = 'block';
    hideWordList();

}
function hideHowTo() { //shows the instructions when "How To Play" is clicked
    howTo.style.display = 'none';


}


// startOne.addEventListener('click', startTurnOne); //starts team one when Go button is pressed
// startTwo.addEventListener('click', startTurnTwo); //starts team two when Go button is pressed


correctBTN.addEventListener('click', addToScore);
incorrectBTN.addEventListener('click', pass);
startBtn.addEventListener('click', startTurn);
howToBtn.addEventListener('click', showHowTo);
hideHowToBtn.addEventListener('click', hideHowTo);
wordListBtn.addEventListener('click', showWordList);