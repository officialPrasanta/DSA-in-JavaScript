let arr = [10, 19, 14, 2, 8, 11];

function linearSearch(sortedArray, val) {
    let len = sortedArray.length;
    let i = 0;
    while (i < len) {
        if (sortedArray[i] === val) {
            return i;
        }
        i++;
    }
    return -1;
}

let val = 11;
arr = arr.sort((i, j) => i - j);
console.log(`Sorted Array: [ ${arr} ]`);
console.log('Value to be found: ' + val);


let pos = linearSearch(arr, val);
pos !== -1 ? console.log('Value found at: ', pos) : console.log("Value not found");