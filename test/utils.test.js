// IMPORT MODULES under test here:
import { compareNumbers } from '../compare-numbers.js';
// import { example } from '../example.js';

const test = QUnit.test;

test('I expect that when guessing 10, and correct number is 15, it will return -1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const correctNumber = 15;
    const guess = 10;
    const expected = -1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(guess, correctNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('I expect that when guessing 20, and correct number is 15, it will return 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const correctNumber = 15;
    const guess = 20;
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(guess, correctNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('I expect that when guessing 15, and correct number is 15, it will return 0', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const correctNumber = 15;
    const guess = 15;
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(guess, correctNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
