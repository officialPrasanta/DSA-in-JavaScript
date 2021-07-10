class CircularQueue {
    // private variables
    #rear;
    #front;
    #queue;
    #size;
    constructor(size) {
        this.#front = -1;
        this.#rear = -1;
        this.#size = size;
        this.#queue = new Array(this.#size);
        if (Object.seal) {
            this.#queue.fill(undefined);
        }
        Object.seal(this.#queue);
    }

    getQueue() {
        return this.#queue;
    }

    // enqueue
    enqueue(item) {
        if (this.#front === -1 && this.#rear == -1) {
            // if queue is empty
            this.#front = 0;
            this.#rear = 0;
            this.#queue[this.#rear] = item;
        }
        else {
            // if queue is not empty
            let next = Symbol('next') // local variable
            next = (this.#rear + 1) % this.#size;
            if (next !== this.#front) {
                // if queue is not full yet
                this.#rear = next;
                this.#queue[this.#rear] = item;
            }
            else {
                console.log('Queue is full');
            }
        }
    }

    // dequeue
    dequeue() {
        if (this.#front == -1) {
            // if queue is empty
            throw new Error('Queue is empty...');
        }
        else {
            let poppedItem = Symbol('poppedItem');  // local variable
            poppedItem = this.#queue[this.#front];
            this.#queue[this.#front] = undefined;
            if (this.#front === this.#rear) {
                // if queue had only one element
                [this.#front, this.#rear] = [-1, -1];
            }
            else {
                this.#front = (this.#front + 1) % this.#size;
            }
            return poppedItem;
        }

    }

}

// create empty circular queue
let circularQueueObj = new CircularQueue(3);

console.log('queue created...\n');
let queue = circularQueueObj.getQueue();
console.log('queue:', queue);


// insert items
console.log('\n\ninsert item...\n');
circularQueueObj.enqueue(2);
circularQueueObj.enqueue(3);
circularQueueObj.enqueue(4);

console.log('queue:', queue);


// remove items
console.log('\n\nremove item...\n');
let poppedItem = circularQueueObj.dequeue();
console.log('1st pop: ', poppedItem);
poppedItem = circularQueueObj.dequeue();
console.log('2nd pop: ', poppedItem);

console.log('queue:', queue);


// insert items
console.log('\n\ninsert item...\n');
circularQueueObj.enqueue(8);

console.log('queue:', queue);
