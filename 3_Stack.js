class Stack {
    // private variable
    #stack;

    constructor(slots) {
        this.top = -1;
        this.slots = slots;

        // create empty stack
        this.#stack = new Array(this.slots);
        if (Object.seal) {
            this.#stack.fill(undefined);
        }
        Object.seal(this.#stack);
    }

    // get stack
    getStack() {
        return this.#stack;
    }

    // insert items to the stack
    pushItem(...args) {
        try {
            for (let i = 0; i < args.length; i++) {
                this.top++;
                this.#stack[this.top] = args[i];
            }
        }
        catch (err) {
            console.log('Error: ', err.message);
        }

    }

    // remove (pop) items from the stack
    popItem() {
        if (this.top === -1) {
            throw new Error('Empty Stack');
        }

        let poppedItem = Symbol('poppedItem');  // local variable
        poppedItem = this.#stack[this.top];
        this.#stack[this.top] = undefined;
        this.top--;
        return poppedItem;
    }
    // peek of the stack
    peekElement() {
        if (this.top === -1) {
            throw new Error('Empty Stack');
        }
        return this.#stack[this.top];
    }

    // clear whole stack
    clearStack() {
        // local variables
        let lowIndex = Symbol('lowIndex');
        let highIndex = Symbol('highIndex');

        lowIndex = 0;
        highIndex = this.top;
        while (lowIndex <= highIndex) {
            this.#stack[lowIndex] = undefined;
            this.top--;
            lowIndex++;
        }

        console.log("Stack is Clear!!");
    }
}


// create stack
let stackObj = new Stack(5);

console.log('stack created...\n');
let stack = stackObj.getStack();
console.log('stack: ', stack);
console.log('stack\'s top: ', stackObj.top);


// insert items
console.log('\n\ninsert item...\n');
stackObj.pushItem(1);
stackObj.pushItem(10, 9);   //push two item sequentially
console.log('stack: ', stack);
console.log('stack\'s top: ', stackObj.top);


// remove item
console.log('\n\npop item...\n\n');
let poppedItem = stackObj.popItem();
console.log('popped item: ', poppedItem);
console.log('stack: ', stack);
console.log('stack\'s top: ', stackObj.top);


// peek element
console.log('\n\npeek element...\n\n');
let peekPos = stackObj.peekElement();
console.log('peek element: ', peekPos);
console.log('stack\'s top: ', stackObj.top);

// clear stack
console.log('\n\nclear stack...\n\n');
stackObj.clearStack();
console.log('stack: ', stack);
console.log('stack\'s top: ', stackObj.top);