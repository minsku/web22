
const min = 1;
const max = 100;

let randomNumber = Math.floor(Math.random() * max - min) + min;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

const maxGuessCount = 10;

let guessCount = 1;
let resetButton;

 const checkGuess = () => {

  const userGuess = Number(guessField.value);
  if (guessCount <= 1) {
      guesses.textContent = 'Previous guesses: ';
      startTime = Date.now();
      console.log('start time: ', startTime);
  }

  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
      lastResult.textContent = 'Congratulations! You got it right!';
      lastResult.style.backgroundColor = 'green';
      lowOrHi.textContent = '';

      const endTime = Date.now();
      let timeUsed = Math.floor((endTime - startTime) / 1000);
      document.getElementById("timeUsed").innerHTML = 'Total time used: ' + timeUsed + ' seconds'+ '<br />' + 'Total amount of guesses: ' + guessCount;
      console.log('end time: ', endTime, 'total time: ', (endTime - startTime) / 1000);

      setGameOver();

  } else if (guessCount === maxGuessCount) {
      lastResult.textContent = '!!!GAME OVER!!!';
      lowOrHi.textContent = '';

      const endTime = Date.now();
      let timeUsed = Math.floor((endTime - startTime) / 1000);
      document.getElementById("timeUsed").innerHTML = 'Total time used: ' + timeUsed + ' seconds' + '<br />' + ' Total amount of guesses: ' + guessCount;
      console.log('end time: ', endTime, 'total time: ', (endTime - startTime) / 1000);

      setGameOver();

  } else {
      lastResult.textContent = 'Wrong! Guess again.';
      lastResult.style.backgroundColor = 'red';
      if (userGuess < randomNumber) {
          lowOrHi.textContent = 'Last guess was too low!';
      } else if (userGuess > randomNumber) {
          lowOrHi.textContent = 'Last guess was too high!';
      }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();

};

guessSubmit.addEventListener('click', checkGuess);

const setGameOver = () => {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
};

const resetGame = () => {
  guessCount = 1;
  const resetParas = document.querySelectorAll('.resultParas p');
  for (const resetPara of resetParas) {
      resetPara.textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * max - min) + min;
};

/*NUMBER GUESSING ALGORITHM: Perusidea on ottaa numero suurimman ja pienimmän luvun välistä.
Ensin siis lukujen 1 ja 100 välistä. Sen jälkeen ottaa taas lukujen puolivälistä (75, jos 50-100 tai 25, jos 1-50)
riippuen onko luku pienempi vai suurempi kuin 50. Min ja max lukujen väli siis pienenee joka arvauksella,
jolloin arvaukseen on koko ajan suurempi mahdollisuus  */

const numberArray = [];
for (let i = 0; i <= max; i++) {
    numberArray.push(i);
}

const numberGuess = () => {
  let start = 0;
  let end = numberArray.length - 1;

  while (start <= end && guessCount <= maxGuessCount) {

      let middle = Math.ceil((start + end) / 2); //lukujen puoliväli

      if (randomNumber === numberArray[middle]) { //tasan puoliväli
          guessField.value = middle;
          checkGuess();
          return console.log();
      }

      if (randomNumber > numberArray[middle]) { //suurempi kuin puoliväli
          start = middle + 1;
          guessField.value = middle;
          checkGuess();
      }

      if (randomNumber < numberArray[middle]) { //pienempi kuin puoliväli
          end = middle - 1;
          guessField.value = middle;
          checkGuess();
      }
  }
};

numberGuess();

