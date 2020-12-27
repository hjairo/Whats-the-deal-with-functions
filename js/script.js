/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * What's the Deal with Functions - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";


/* Variables to store buttons */
const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');
const btn4 = document.querySelector('#btn-4');

const element1 = document.querySelectorAll('.item')[0];
const element2 = document.querySelectorAll('.item')[1];
const element3 = document.querySelectorAll('.item')[2];
const element4 = document.querySelectorAll('.item')[3];


// Helpful log statements
console.log(element1);
console.log(element2);
console.log(element3);
console.log(element4);


/* Variables to use as `arguments` when invoking your functions */
const value1 = 42;
const value2 = 'Treehouse Rocks!';
const value3 = btn3.tagName;
const value4 = [value1, value2, value3]

const setContent1 = (number) => {
  element1.style.color = 'green';
  element1.innerHTML = number;
};

const setContent2 = (string) => {
  element2.style.color = 'blue';
  element2.innerHTML = string;
};

const setContent3 = (element) => {olor = 'red';
  element3.innerHTML = element;
};

const setContent4 = (array) => {
  element4.style.color = 'black';
  var printedValue = '';
  for (let i = 0; i < array.length; i++) {
    printedValue = printedValue.concat(array[i]);
  };
  element4.innerHTML = printedValue;
};

/* btn1 listener */
btn1.addEventListener('click', () => {

setContent1(value1);
  // Helpful log statement to test function
  console.log('First button is functional!');
});


/* btn2 listener */
btn2.addEventListener('click', () => {

  setContent2(value2);
  // Helpful log statement to test function
  console.log('Second button is functional!');
});


/* btn3 listener */
btn3.addEventListener('click', () => {

setContent3(value3);
  // Helpful log statement to test function
  console.log('Third button is functional!');
});


/* btn4 listener */
btn4.addEventListener('click', () => {

setContent4(value4);
  // Helpful log statement to test function
  console.log('Fourth button is functional!');
});
