import * as alt1 from "@alt1/base";
import { ImgRef } from "@alt1/base"; // Import the image reference class

// Check if Alt1 is available
if (window.alt1) {
  alt1.events.alt1pressed.listen(() => {
    // This code runs when Alt+1 is pressed
    let button = document.getElementById("myButton");
    button.textContent = "Alt+1 Pressed!"; //Change the button text
  });

    alt1.events.alt1released.listen(() => {
    // This code runs when Alt+1 is released
    let button = document.getElementById("myButton");
    button.textContent = "Click Me!"; //Change the button text back
  });
} else {
  console.log("Alt1 not detected!"); // For debugging
}

let testImg = new ImgRef("./test_image.png"); // Create an image reference


if (window.alt1) {

    //find the image
    alt1.events.alt1pressed.listen(() => {

        let results = alt1.findImage(testImg); //this searches the screen

        if(results.length > 0){
            //image found
            let button = document.getElementById("myButton");
            button.textContent = "Image Found!"; //Change the button text
        } else {
            let button = document.getElementById("myButton");
            button.textContent = "Image NOT Found!"; //Change the button text
        }

    });


    alt1.events.alt1released.listen(() => {
        // This code runs when Alt+1 is released
        let button = document.getElementById("myButton");
        button.textContent = "Click Me!"; //Change the button text back
    });

} // ... (rest of the code)