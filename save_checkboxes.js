const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const encodingAlphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-"; //must be length 2^6 = 64

function encode(booleans) {
    const bits = booleans.map(Number).join('')
        .padEnd(Math.ceil(booleans.length / 6.0) * 6, "0"); // pad with 0's make sure the length is a multiple of 6
    const bitGroups = Array.from(bits.matchAll(/[01]{6}/g)); // groups of 6 bits
    const indexes = bitGroups.map(sixBits => parseInt(sixBits, 2)); // parse each 6 bits to a number (used as index)
    const letters = indexes.map(index => encodingAlphabet[index]); // get the letter corresponding to each index
    return letters.join('');
}

function decode(string) {
    const letters = string.split('');
    const indexes = letters.map(letter => encodingAlphabet.indexOf(letter));
    const bitGroups = indexes.map(index => index.toString(2).padStart(6, "0"));
    const bits = bitGroups.join('');
    const booleans = bits.split('').map(b => b == '1');
    return booleans;
}

const workingSaveId = "__working__";

function saveCheckboxes(name) {
    let toSave = encode(Array.from(checkboxes, c => c.checked));
    if (!name) parent.location.hash = toSave;
    localStorage.setItem(name || workingSaveId, toSave);
}

function loadCheckboxes(name) {
    let encodedBooleans;
    if (!name) {
        // try hash first, then local storage
        encodedBooleans = parent.location.hash.substr(1) || localStorage.getItem(workingSaveId);
    }
    else {
        encodedBooleans = localStorage.getItem(name);
    }

    if (encodedBooleans != null) {
        let booleans = decode(encodedBooleans);

        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = booleans[i];
            checkboxes[i].dispatchEvent(new Event("change"));
        }
    }
}

// listen to any changes
const onCheckboxChanged = debounce(() => saveCheckboxes(), 50);
for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", onCheckboxChanged);
}

loadCheckboxes();
