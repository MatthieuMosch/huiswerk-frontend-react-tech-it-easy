// count how many tvs there are on the original stock

import {inventory} from "../constants/inventory.js";

function countOriginalStock() {
    let count = 0;
    for (let i = 0; i < inventory.length; i++) {
        count += inventory[i].originalStock;
    }
    return count;
}

export default countOriginalStock;