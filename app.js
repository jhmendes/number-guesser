/*
 GAME RULES
 - Player must guess a number between a min and a mx
 - Player gets a certain amount of guesses
 - Notify player of guesses remaining
 - Notify the player of the correct answer if they lose
 - Let the player choose to play again
 */


 //Hide Rocky
const rockyBalboa = document.querySelector('.rocky');
rockyBalboa.style.display = 'none';

 //Game values 


 let min = 1,
     max = 10, 
     winningNum = 2, 
     guessesLeft = 3;


//UI Elements

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'), 
      maxNum = document.querySelector('.max-num'), 
      guessBtn = document.querySelector('#guess-btn'), 
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');


//Assign UI Min and max

minNum.textContent = min;
maxNum.textContent = max;


//Listen for guess

guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);
  console.log(guess);
  //Validate input 

  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  } 

  //Check if winning number

  if(guess === winningNum) {
    //disable input
    guessInput.disabled = true;
    //Change color of input border to indicate win
    guessInput.style.border = '3px solid green';
    //Let user know they won
    rockyBalboa.style.display = 'block';
    setMessage(`${winningNum} is correct!  YOU WIN.`, 'green');
  } else {

  }
});


//Set Message

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}