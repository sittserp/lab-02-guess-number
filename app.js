// import functions and grab DOM elements
import { compareNumbers } from './compare-numbers.js';

const userInput = document.getElementById('user-input');
const button = document.getElementById('button');
const message = document.getElementById('message');
const counter = document.getElementById('counter');

// initialize state

let correctNumber = Math.floor(Math.random() * 20 + 1);
let numberOfTries = 4;
console.log(correctNumber);

// set event listeners to update state and DOM

button.addEventListener('click', () => {
    const guess = Number(userInput.value);              
    const evaluation = compareNumbers(guess, correctNumber);
        if (evaluation === 0) {
            numberOfTries = 5;
            message.textContent = `Congratulations! ${correctNumber} is the right number!  Edit and click Submit to guess a new number! `;
            correctNumber = Math.floor(Math.random() * 20 + 1);
            console.log(correctNumber);
            }
        if (evaluation === 1) {
            message.textContent = `${guess} is too high.`;
            }
        if (evaluation === -1) {
            message.textContent = `${guess} is too low.`;
            }
        
        numberOfTries--;

    if (numberOfTries === 1) {
        counter.textContent = `You have 1 try left.`
        }
    if (numberOfTries !== 1) { 
        counter.textContent = `You have ${numberOfTries} tries left.`
        console.log(numberOfTries);
        }
    if (numberOfTries === 0) {
        message.textContent = `Sorry, you\'re all out of tries. ${correctNumber} was the correct number. Click Submit to try again!`
        }
    if (numberOfTries === -1) {
        message.textContent = '';
        counter.textContent = 'You have 4 tries left.';
        numberOfTries = 4;
        correctNumber = Math.floor(Math.random() * 20 + 1);
        console.log(correctNumber);
        }
});
