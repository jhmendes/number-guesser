/*
 GAME RULES
 - Player must guess a number between a min and a mx
 - Player gets a certain amount of guesses
 - Notify player of guesses remaining
 - Notify the player of the correct answer if they lose
 - Let the player choose to play again
 */


 //Hide Rocky and Bueller
const rockyBalboa = document.querySelector('.rocky');
const bueller = document.querySelector('.bueller');
rockyBalboa.style.display = 'none';
bueller.style.display = 'none';


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
    //GAME IS OVER - WON

   let winmessage = `${winningNum} is correct!  YOU WIN.`;
    gameOver(true, winmessage);
    rockyBalboa.style.display = 'block';

  } else {


    //WRONG NUMBER
    guessesLeft -= 1;

    if(guessesLeft === 0 ) {
      //GAME OVER - LOST

      let losemessage = `WRONG AGAIN.  You lost!  The correct number was ${winningNum}`;
      gameOver(false, losemessage);
      bueller.style.display = 'block';

    } else {
      //Game Continues - answer is wrong

      //Tell user its the wrong number, inform them the number of guesses left
      setMessage(`${guessInput.value} is not correct, try again! ${guessesLeft} guesses left.`, 'red');
      //Clear the input
      guessInput.value = '';
    }

  }
});




//Game over 

function gameOver(won, msg) {
   
    let color;
    won === true ? color = 'green' : 'red';
    
  
  //disable input
    guessInput.disabled = true;
  //Change color of input border to indicate win
    guessInput.style.color = color;
  
    //Let user know they won
    setMessage(msg, color);

}





//Set Message

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

