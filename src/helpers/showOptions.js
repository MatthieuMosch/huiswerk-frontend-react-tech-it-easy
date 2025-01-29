// show the options of the input tv

function showOptions(tv) {
    let options = "";
    for (let i = 0; i < tv.options.length; i++) {
        options += (tv.options[i].applicable ?
            "[check-icon] " :
            "[not-icon] ") +
            tv.options[i].name + " ";
    }
    return options;
}

export default showOptions;