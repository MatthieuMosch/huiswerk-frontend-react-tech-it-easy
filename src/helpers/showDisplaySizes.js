// return the screen sizes of the input tv

import inchToCm from "./inchToCm.js";

function showDisplaySizes(tv) {
    let displaySizes = tv.availableSizes[0] + " inch (" + Math.round(inchToCm(tv.availableSizes[0])) + " cm)";
    for (let i = 1; i < tv.availableSizes.length; i++) {
        displaySizes += "| " +  tv.availableSizes[i] + " inch (" + Math.round(inchToCm(tv.availableSizes[i])) + " cm)";
    }
    return displaySizes;
}

export default showDisplaySizes;