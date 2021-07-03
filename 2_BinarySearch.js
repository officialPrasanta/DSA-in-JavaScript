let arr = [10, -3, 17, 5, 0, 1, 8, 7, 6, 1];

function binarySearchIterative(sortedArray, val) {
    let len = sortedArray.length;
    let low, high, mid;
    low = 0;
    high = len;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (sortedArray[mid] === val) {
            return mid;
        }
        else if (sortedArray[mid] > val) {
            high = mid - 1;
        }
        else if (sortedArray[mid] < val) {
            low = mid + 1;
        }
    }
    return -1;
}

val = 10;
arr = arr.sort((i, j) => i - j);
console.log(`Sorted Array: [ ${arr} ]`);
console.log('Value to be found: ', val);


pos = binarySearchIterative(arr, val);
pos !== -1 ? console.log('Value found at: ', pos) : console.log("Value not found");