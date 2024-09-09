# Projects related to DOM

### project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)



# solution code

## project 1   

```javascript
// color Picker
consile.log("himmath")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
      case 'purple':
        body.style.backgroundColor = e.target.id;
        break;
      default:
        body.style.backgroundColor = 'white';
    }
  });
});

```

## Project 2 solution
 
``` javascript
// BMI calculator
const form = document.querySelector('form');
console.log(form);

// This will give you empty value
// const height = parseInt(document.querySelector('height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerText = `Please Give  a Valid Height ${height}`;
  }else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerText = `Please Give  a Valid Weight ${weight}`;
  }else{
      const bmi =  (weight / ((height * height)/10000)).toFixed(2)
      // show results
      results.innerHTML = `<span>${bmi}</span>`
      // print the message of range
  }
 
});

```


## Project 3 solution

```javascript
// Local clock time
const clock = document.getElementById('clock')

setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleString());
    clock.innerHTML = date.toLocaleTimeString()

},1000)

```


## Project 4 Solution

``` javascript
// Guess the Number
let  randomNumber = parseInt(Math.random()*100  +1 )

const submit =  document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')


const p = document.createElement('p')

let prevGuess =[]
let numGuess =1

let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess)
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }else if(guess < 1){
        alert('Please enter a number greater than 1');
    }else if(guess > 100){
        alert('Please enter a number less than 100');
    }else{
        if (numGuess === 10) {
            displayGuess(guess)
            displayMessage(`Game Over , Random number was ${randomNumber}`)
            endGame()
            prevGuess.push(guess)
        }else{
            console.log(numGuess)
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`Number is TOO Low`)
    }else if( guess > randomNumber){
        displayMessage(`Number is TOO High`)
    }
}

function displayGuess(guess){
    userInput.value =''
    guessSlot.innerHTML +=`${guess}, `
    numGuess++;
    remaining.innerHTML =`${11-numGuess}`
}

function displayMessage(message){
    // console.log(message)
    lowOrHigh.innerHTML =`<h2>${message}</h2>`
}


function endGame(){
    userInput.value =''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id ="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e){
        randomNumber = parseInt(Math.random()*100  +1 )
        prevGuess =[]
        numGuess =1
        guessSlot.innerHTML = ''
        remaining.innerHTML =`${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        lowOrHigh.innerHTML =''
        playGame = true

    })
}


```

##Project 5 solution
```javascript
// 
const insert = document.getElementById('insert')
// keycode
window.addEventListener('keydown',(e)=>{
    insert.innerHTML =`
    <div class='color'>
    <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key ===" " ? "space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
    
  </tr>
 
</table>
    </div>
    `
})

```