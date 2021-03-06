/*
# ========================================================
# = Initialization
# ========================================================
*/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

window.onload = init;

function init() {
    const d6Roll = document.querySelector('#d6-roll');
    d6Roll.addEventListener('click', rollD6);

    const doubleD6Roll1 = document.querySelector('#double-d6-roll-1');
    doubleD6Roll1.addEventListener('click', rollDoubleD6);
    const doubleD6Roll2 = document.querySelector('#double-d6-roll-2');
    doubleD6Roll2.addEventListener('click', rollDoubleD6);

    const d12Roll = document.querySelector('#d12-roll');
    d12Roll.addEventListener('click', rollD12);
    
    const d20Roll = document.querySelector('#d20-roll');
    d20Roll.addEventListener('click', rollD20);

    const resetButton = document.querySelector('#reset-button')
    resetButton.addEventListener('click', resetAllRolls);

    setStartingImages();
}

function setStartingImages() {
    const START_DIRECTORY = './images/start'
    const SIX_SIDED_START_IMAGE = `${START_DIRECTORY}/d6.png`;

    const d6Roll = document.querySelector('#d6-roll');
    d6Roll.src = SIX_SIDED_START_IMAGE;

    const doubleD12Roll1 = document.querySelector('#double-d6-roll-1')
    const doubleD12Roll2 = document.querySelector('#double-d6-roll-2');
    doubleD12Roll1.src = SIX_SIDED_START_IMAGE;
    doubleD12Roll2.src = SIX_SIDED_START_IMAGE;

    const d12Roll = document.querySelector('#d12-roll');
    d12Roll.src = `${START_DIRECTORY}/d12.jpeg`;
    
    const d20Roll = document.querySelector('#d20-roll');
    d20Roll.src = `${START_DIRECTORY}/d20.jpg`;
}

/*
# ========================================================
# = Roll Functions
# ========================================================
*/
function rollD6() {
const roll = getRandomRoll(6);
sixes.push(roll);
//get the average from the rolls
const mean = getMean(sixes);
const median = getMedian(sixes);
//get median
getMedian(sixes);
//have the mean reflect on html
const meanSection = document.querySelector('#d6-rolls-mean')
meanSection.innerText = mean;
//have the median reflect on html
const medianSection = document.querySelector('#d6-rolls-median')
medianSection.innerText = median;


// const d6Roll = document.querySelector('#d6-roll');
// d6Roll.src = 'images/d6/' + roll + '.png';
handleImage(roll, '#d6-roll', 'images/d6/');

}

function rollDoubleD6() {
const roll1 = getRandomRoll(6);
const roll2 = getRandomRoll(6);
const roll = roll1 + roll2;
doubleSixes.push(roll);
const mean = getMean(doubleSixes);
const median = getMedian(doubleSixes);
const meanSection = document.querySelector('#double-d6-rolls-mean');
meanSection.innerText = mean;
const medianSection = document.querySelector('#double-d6-rolls-median');
medianSection.innerText = median;

handleImage(roll1, '#double-d6-roll-1', 'images/d6/');
handleImage(roll2, '#double-d6-roll-2', 'images/d6/');


}

function rollD12() {
const roll = getRandomRoll(12);
twelves.push(roll);
const mean = getMean(twelves);
const median = getMedian(twelves);
const meanSection = document.querySelector('#d12-rolls-mean');
meanSection.innerText = mean;
const medianSection = document.querySelector('#d12-rolls-median');
medianSection.innerText = median;
handleImage(roll, '#d12-roll', 'images/numbers/');

}

function rollD20() {
const roll = getRandomRoll(20);
twenties.push(roll);
const mean = getMean(twenties);
const median = getMedian(twenties);
const meanSection = document.querySelector('#d20-rolls-mean');
meanSection.innerText = mean;
const medianSection = document.querySelector('#d20-rolls-median');
medianSection.innerText = median;
handleImage(roll, '#d20-roll', 'images/numbers/');
}

function resetAllRolls(){
    sixes = [];
    doubleSixes = [];
    twelves = [];
    twenties = [];

    setStartingImages();
}
/*
# ========================================================
# = Math Functions
# ========================================================
*/
//this function provides a random number 
//from the max value of the die. 
function getRandomRoll(sides){
    const random = Math.floor(Math.random() * sides) + 1;
    
    return random;
}

function getMean(arr){
let sum = 0;

for(let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
}
    const mean = sum / arr.length;
    
    return mean;
}

function getMedian(arr){
    const sortedNumbers = arr.sort();
    const middleIndex = Math.floor(sortedNumbers.length / 2);
     
    return sortedNumbers[middleIndex];
}




/*
# ========================================================
# = Helper Functions - Stretch Goals!
# ========================================================
*/
function handleImage(roll, selector, directory) {
   const rolled = document.querySelector(selector);
   rolled.src = directory + roll + '.png';
    console.log(`directory: ${directory}`);
    console.log('roll: ' + roll);
    console.log('selector: ' + selector);
}
// images/d6
// images/d6/4.png