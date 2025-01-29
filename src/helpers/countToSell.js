// count how many tvs have to be sold

import countOriginalStock from "./countOriginalStock.js";
import countSold from "./countSold.js";

function countToSell() {
    return countOriginalStock() - countSold();
}

export default countToSell;