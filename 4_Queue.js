class Queue {
    // private veriables
    #rear;
    #front;
    #queue;
    #size;
    constructor(size) {
        this.#rear = -1;
        this.#front = -1;
        this.#size = size;

        //create an empty queue
        this.#queue = new Array(this.#size);
        if (Object.seal) {
            this.#queue.fill(undefined);
        }
        Object.seal(this.#queue);
    }

    getQueue() {
        return this.#queue;
    }

    enqueue(val) {
        try {
            if (this.#front === -1 && this.#rear === -1) {
                [this.#front, this.#rear] = [0, 0];
            }
            else {
                this.#rear++;
            }
            this.#queue[this.#rear] = val;
        }
        catch (err) {
            console.log(err.message, ': Queue is full');
        }
    }
    dequeue(val) {
        if (this.#front === -1) {
            throw new Error('Empty Queue');
        }


        let removedItem = Symbol('removedItem');    // local variable
        removedItem = this.#queue[this.#front];
        this.#queue[this.#front] = undefined;
        if (this.#front === this.#rear) {
            [this.#front, this.#front] = [-1, -1];     // initial state
        }
        else {
            this.#front++;
        }
    }
}


let queueObj = new Queue(5);

let queue = queueObj.getQueue();
console.log(queue);

queueObj.enqueue(7);
queueObj.enqueue(8);
queueObj.enqueue(9);
queueObj.enqueue(10);

console.log(queue);

queueObj.dequeue();
console.log(queue);
