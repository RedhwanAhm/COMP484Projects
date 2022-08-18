
const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");

// Split the originText into characters so I can do individual checks on each letter as it's entered into the input element.
const originText = document.querySelector("#origin-text .quote").innerHTML.split('');
const quoteValue = document.querySelector("#origin-text .quote").innerHTML;
const resetButton = document.querySelector("#reset");

const theTimer = document.querySelector(".timer");
// created individual spans to change timer numbers:
const timerMM = document.querySelector(".mm"); // minutes
const timerSS = document.querySelector(".ss"); // seconds
const timerHS = document.querySelector(".hs"); // hundreds
var hundreds = 0;
var seconds = 0;
var minutes = 0;
var timerOn = false;
var intervalID;

// Clear the HTML of the quote element and fill it with spans of each character.
// Documentation for JS For Each https://www.w3schools.com/jsref/jsref_forEach.asp
var quoteText = document.querySelector(".quote");
quoteText.innerHTML = "";
originText.forEach(character => {
    const makeSpan = document.createElement('span');
    makeSpan.innerText = character;
    quoteText.appendChild(makeSpan);
})

// This is used to calculate the WPM. The value is divided by 1000 (the time it takes for a second)
var internalCount = 0;
var charTyped = 0;
var wpmSelector = document.querySelector(".wpm");
wpmSelector.innerHTML = 0;

// Winning
const congrats = document.querySelector(".congrats").children[0];

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(num) {
    return "0"+num;
}

// Run a standard minute/second/hundredths timer:
function timer() {
    // The setInterval function is set to make sure there is a restriction to how the values in it are updating. A while loop in this case would be detrimental to the page loading.
    intervalID = setInterval(() => {
        // Simple counter with a bunch of conditionals that affect the display of time.
        // Leading zeros are also added in here for aesthetic purposes through a call to a method above.
        // Hundreds incremented and then manipulated on the DOM.
        hundreds++;
        internalCount++;
        wpmCalc(charTyped, internalCount);
         // Done so it can count by the second
        if (hundreds < 10) 
            timerHS.innerHTML = leadingZero(hundreds);
        
        if (hundreds >= 10 && hundreds < 100) 
            timerHS.innerHTML = hundreds;

        // If hundreds are greater than or equal to 100, reset the hundreds place back to 0 and up the seconds count by 1.
        if (hundreds >= 100) {
            seconds++;
            timerSS.innerHTML = leadingZero(seconds);
            hundreds = 0;
            timerHS.innerHTML = leadingZero(hundreds);
        }

        if (seconds > 9) {
            timerSS.innerHTML = seconds;
        }
        
        // If seconds are greater than or equal to 60, reset the seconds place back to 0 and up the minutes count by 1.
        if (seconds >= 60) {
            minutes++;
            timerMM.innerHTML = leadingZero(minutes);
            seconds = 0;
            timerSS.innerHTML = leadingZero(seconds)
            // start = true; FOR DEBUGGING PURPOSES
        }

        if (minutes > 9) {
            timerMM.innerHTML = minutes;
        }
    } ,10)
}

// Match the text entered with the provided text on the page:

// Start the timer:
function started() {
    timerOn = true;
    timer();
}


// Reset everything:
function reset() {
    hundreds = 0;
    seconds = 0;
    minutes = 0;
    internalCount = 0;
    charTyped = 0;
    timerOn = false;
    clearInterval(intervalID);
    timerHS.innerHTML = '00';
    timerSS.innerHTML = '00';
    timerMM.innerHTML = '00';
    wpmSelector.innerHTML = "0";
    testArea.value = '';
    quoteText.querySelectorAll("span").forEach((span, i) => {
        span.classList.remove("correct");
        span.classList.remove("incorrect");
    })
    testArea.disabled = false;
    testWrapper.style = ("border: 10px solid grey; border-radius: 10px;");
    theTimer.style = "color: black;";
    wpmSelector.style = "color: black;";
    congrats.innerHTML="";
    congrats.style="color: black;";

}

// Calculate WPM:
function wpmCalc() {
    //console.log(charTyped, timeElapsed)
    var wpm = parseInt(((charTyped / 6) / (internalCount/6000)));
    wpmSelector.innerHTML = wpm;
    
}

// Win the game:
function win() {
    timerOn = false;
    testArea.disabled = true;
    clearInterval(intervalID);
    testWrapper.style = ("border: 10px solid rgb(0, 132, 0); border-radius: 10px;");
    theTimer.style = "color: rgb(0, 132, 0)";
    wpmSelector.style = "color: rgb(0, 132, 0)";
    congrats.innerHTML="Typing Test Done!";
    congrats.style="color: rgb(0, 132, 0)";
}


// Event listeners for keyboard input and the reset button:
testArea.addEventListener("input", (event) => {
    
    if(event.inputType !== "deleteContentBackward" && !testArea.disabled)
        charTyped++;
    
    //console.log(charTyped);
    if (timerOn !== true)
        started();
    // First we need to obtain all the information for the comparison.
    // We get an array of all the spans inside of the <p> element which contains our quote.
    const quoteCharArray = quoteText.querySelectorAll("span");
    //console.dir(quoteCharArray); //FOR DEBUGGING PURPOSES

    // Since the value inside of a TestArea is a full string, we need to split it to match what we already have inside of our quoteCharArray.
    const quoteInputArray = testArea.value.split('');
    //console.dir(quoteInputArray);
    // Now we want to make the letter-by-letter comparison of the typing test.
    quoteCharArray.forEach((theSpan, i) => {
        const character = quoteInputArray[i];
        if (character == null) {
            theSpan.classList.remove("correct");
            theSpan.classList.remove("incorrect");
        } else if (character === theSpan.innerText) {
            theSpan.classList.add("correct");
            theSpan.classList.remove("incorrect");
        } else {
            theSpan.classList.remove("correct");
            theSpan.classList.add("incorrect");
        }
        
    })

    //Checks if the quote and the input value match for a win.
    if(quoteValue === testArea.value)
        win();
});


resetButton.addEventListener("click", () => {
    reset();
    console.log("Starting over!")
})