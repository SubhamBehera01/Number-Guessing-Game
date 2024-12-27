//first create a random number.
let randomNum = parseInt(Math.random() * 100 + 1);

//access all the element.
const submit = document.querySelector('.submitBtn');
const userInput = document.querySelector('.GuessField');
const preGuesses = document.querySelector('.guesses');
const remainGuesses  = document.querySelector('.lastresult');
const lowOrhigh = document.querySelector('.lowOrhi');
const showing = document.querySelector('.resultpara');

//creataing a new element for useing new game button.
const p = document.createElement('p');

//initial value.
let prevGuess = [];
let numGuess = 1;
let playGame = true;

//start click event.
if (playGame) {
    submit.addEventListener('click', (g) => {
        g.preventDefault();
        const userGuess = parseInt(userInput.value);
        validateGuess(userGuess)
    });
};

//check validation.
const validateGuess = (userGuess) => {
    if (isNaN(userGuess)) {
        alert('Please Enter a valid Number.');
        userInput.value = '';
    }else if (userGuess < 1) {
        alert('Please Enter a Number More than 1.');
        userInput.value = '';
    }else if (userGuess > 100) {
        alert('Please Enter a Number Less than 100.');
        userInput.value = '';
    }else {
        prevGuess.push(userGuess);
        if (numGuess === 10) {
            displayGuess(userGuess);
            displayMessage(`Game Over. Random Number was ${randomNum}`);
            endGame();
        }else {
            displayGuess(userGuess);
            checkGuess(userGuess);
        };
    };
};

//check guesses.
const checkGuess = (userGuess) => {
    if (userGuess === randomNum) {
        displayMessage(`You guessed it Right Number`);
        endGame();
    }else if (userGuess < randomNum) {
        displayMessage(`Number is TOO Low.`);
    }else if (userGuess > randomNum) {
        displayMessage(`Number is TOO  High.`)
    }
};

//showing user guesses and user remainings.
const displayGuess = (userGuess) => {
    userInput.value = '';
    preGuesses.innerHTML += `${userGuess}, `;
    numGuess++;
    remainGuesses.innerHTML = `${11 - numGuess}`;
};

//showig user possibility.
const displayMessage = (message) => {
    lowOrhigh.innerHTML = `<h3>${message}</h3>`
};

//end game.
const endGame = () => {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h4 id="newGame">Start New Game</h3>`;
    showing.appendChild(p);
    playGame = false;
    newGame();
};

//new game.
const newGame = () => {
    const newGameBtn = document.querySelector('#newGame');
    newGameBtn.addEventListener('click', () => {
        randomNum = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        preGuesses.innerHTML = '';
        remainGuesses.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        showing.removeChild(p);
        lowOrhigh.innerHTML = '';
        playGame = true;
    })
};