// return the inout as euro currency

function makeEuro(price) {
    return "\u20AC" + price + ",-";
}

export default makeEuro;