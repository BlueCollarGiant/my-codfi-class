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