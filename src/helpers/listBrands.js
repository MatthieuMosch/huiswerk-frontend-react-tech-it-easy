// list all tv brands from the list

// this does not work
// i cannot use this helper function directly in App()
// but i can use the same code itself directly in App()
// why does this not work as an helper function?
// how do i have to call this in App() to correctly display this list?

import {inventory} from "../constants/inventory.js";

function listBrands() {
    return inventory.map((tv) => <li>{tv.brand}</li>);
}

export default listBrands;