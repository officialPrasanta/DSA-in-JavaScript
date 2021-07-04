/***array implementation of stack***/

// 1. create an empty stack
function createStack() {
    return new Array();
}

// 2. insert items to the stack
function insertItem(stack, item) {
    stack.push(item);
    console.log("Item Pushed!");
}

// 3. remove (pop) items from the stack
function popItem(stack) {
    if (stack.length == 0) {
        throw new Error('Empty Stack');
    }

    let poppedItem = stack.pop();
    return poppedItem;
}

// 4. peek of the stack
function peekElement(stack) {
    if (stack.length == 0) {
        throw new Error('Empty Stack');
    }
    let peekPos = stack.length - 1;
    return stack[peekPos];
}

// 5. clear whole stack
function clearStack(stack) {
    stack.length = 0;
    console.log("Stack is Clear!!");
}


// empty stack
let stack = createStack();

// insertion
insertItem(stack, 19);
insertItem(stack, 12);
insertItem(stack, 23);
insertItem(stack, 21);

// show stack elements
console.log('Stack: ', stack);

// pop item
lastItem = popItem(stack);
console.log("Popped Item: ", lastItem);

// peek
peekItem = peekElement(stack);
console.log('Top Element:', peekItem);

// clear stack
clearStack(stack);

// show empty stack
console.log('Stack: ', stack);