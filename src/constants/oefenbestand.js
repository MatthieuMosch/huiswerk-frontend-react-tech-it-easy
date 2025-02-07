// oefenbestand.js
// Huiswerk week 2

import {inventory} from "./inventory.js";

function showOutcomeInConsole() {
// Opdracht 1a
    console.log("uitkomst opdracht 1a");
    const tvTypes = inventory.map((tv) => tv.type);
    console.log(tvTypes);

// Opdracht 1b
    console.log("uitkomst opdracht 1b");
    const tvSoldOut = inventory.filter((tv) => tv.originalStock === tv.sold);
    console.log(tvSoldOut);

// Opdracht 1c
    console.log("uitkomst opdracht 1c");
    console.log(inventory.find((tv) => tv.type === "NH3216SMART"));

// Opdracht 1d
    console.log("uitkomst opdracht 1d");
    const tvSport = inventory.map((tv) => {
        return `name: ${tv.brand} ${tv.name}, suitable: ${tv.refreshRate >= 100}`;
    });
    console.log(tvSport);

// Opdracht 1e
    console.log("uitkomst opdracht 1e");
    const tvBigscreen = inventory.filter((tv) => {
        for (let i = 0; i < tv.availableSizes.length; i++) {
            if (tv.availableSizes[i] >= 65) return true; //screensize large enough, no need to check other sizes
        }
        return false; //no large screensize found for this tv
    });
    console.log(tvBigscreen);

    // Opdracht 1f
    console.log("uitkomst opdracht 1f");
    const tvAmbilight = inventory.filter((tv) => {
        for (let i = 0; i < tv.options.length; i++) {
            if (tv.options[i].name === "ambiLight") {
                return tv.options[i].applicable;
            }
        }
        return false; //in case there is no ambilight option defined for this tv
    });
    console.log(tvAmbilight);

    // Opdracht 2a
    console.log("uitkomst opdracht 2a");
    
}

export default showOutcomeInConsole;