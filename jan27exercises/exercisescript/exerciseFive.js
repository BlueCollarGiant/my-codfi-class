/*window.onload = function() {
    alert("welcome to my page!");
};*/

let isChanged = false;


function changeText() {
    const paragraph = document.getElementById("target-text");

    if (isChanged) {
        paragraph.innerText = "This will be changed";
        isChanged = false;
    } else {
        paragraph.innerText = " You changed me" ;
        isChanged = true;
    }
} 
// fell down rabbit hole on changing paragraph back to original message on click

// Preload images
const image1 = new Image(); // new Image() basically creates a placeholder in js and preloads the image so my blasted swap dosnt lag when i hit button
image1.src = "exercisestyle/cssassets/shifaaz-shamoon-okVXy9tG3KY-unsplash.jpg";

const image2 = new Image(); // preload
image2.src = "exercisestyle/cssassets/donnie-rosie-O7L3MrlSAHA-unsplash.jpg";

const image3 = new Image(); //preload
image3.src = "exercisestyle/cssassets/mark-tegethoff-NMLv5HQZnK4-unsplash.jpg";

const image4 = new Image(); //preload
image4.src = "exercisestyle/cssassets/michael-krahn-eGD69I3ODC4-unsplash.jpg";


function changeImageOne() {
    const imagechanger = document.getElementById("image-target-one");

    if (isChanged) {
        imagechanger.src = image1.src //link to const image1 to preload
        isChanged = false;
    } else {
        imagechanger.src = image2.src; //link to image2 for preload
        isChanged = true;
    }
}


function changeImageTwo() {
    const imagechanger = document.getElementById("image-target-two");

    if (isChanged) {
        imagechanger.src = image3.src // link to image3 for preload
        isChanged = false;
    } else {
        imagechanger.src = image4.src; // link to image4 for preload
        isChanged = true;
    }
}

const userinput = document.getElementById("form-input")
const useroutput = document.getElementById("form-output");

// this clears the input field when someone clicks the input again to type
userinput.addEventListener("focus", () => {
    userinput.value = ""; // clear the form text field on click
    useroutput.innerText = ""; // this is to clear the display output
    isChanged = false; // this is here to keep make sure the clear happened
})

function transferData() {
    event.preventDefault(); // says depreciated but still works. this stops the form from reseting when submit is clicked

    if (isChanged) {
        useroutput.innerText = "";
        isChanged = false;
    } else {
        useroutput.innerText = userinput.value; // .value for displaying the users text they entered
        isChanged = true;
    }

    
}
// im not counting exercise 5 complete even with it working see thought below
let timer;
let timeLeft = 10;
let isRunning = false; // check if the timer is running


function startstop() {
    const timerDisplay = document.getElementById("timer-display");
    const timerButton = document.getElementById("timer-button");

    if(isRunning) {
        clearInterval(timer);
        timerButton.textContent = "start"; //change button text to start
        isRunning = false;
    } else {
        timerButton.textContent = "stop"; // change button text to stop
        isRunning = true;

        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--; //decrease the time left
                timerDisplay.textContent = `00:${timeLeft.toString().padStart(2,'0')}`;
            } else {
                clearInterval(timer);
                timerButton.textContent = "start" //reset button text
                alert("Times up!"); // simple alert
                timeLeft = 10 // reset timer
                timerDisplay.textContent = "00:10" // reset display

            }
        }, 1000);
    }
}

// program runs and is successful but i refuse to claim complete 
// reason being i hit the wall on this exercise and had to resort to ai to finish planning it out
// im not in this to waste my time so instead im going to keep the finished project
// and im going to disect it for learning instead 
// current thoughts frustrated i hit a wall but im glad ive reached a point i can see where i need improvement.
// lots of new information for me to absorb in this exercise ive never worked with time before
// theres a few js methods ive never heard of i may start reading the documentation i kinda feel i should have know these.
// if anyone reads this exercise good god why are you here? either way hope you get a laugh or learn something.