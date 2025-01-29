// count how many tvs are sold

import {inventory} from "../constants/inventory.js";

function countSold() {
    let count = 0;
    for (let i = 0; i < inventory.length; i++) {
        count += inventory[i].sold;
    }
    return count;
}

export default countSold;