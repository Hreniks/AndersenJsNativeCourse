class Stack{

    constructor(n = 10) {
        if (!Number.isInteger(n)) throw new Error('argument is not a number');
        this.n = n;
        this.stack = [];

    }


    push(elem) {
        if (this.stack.length > 10) throw new Error('maximum stack size');
        else this.stack.push(elem);
    }

    pop(){
        if (this.stack.length === 0) throw new Error('stack is empty'); 
        else this.stack.pop();
    }

    peek() {
        if (this.stack.length === 0) return null;
        else return this.stack[this.stack.length - 1]; 
    }

    isEmpty() {
        return (this.stack.length === 0) ? true : false;
    }

    toArray() {
        return [...this.stack];
    }

    static fromIterable(iterable){
        if (typeof iterable[Symbol.iterator] !== 'function') throw new Error('not iterable argument');
        let newStack = new Stack(iterable.length);
        for (const i of iterable) {
            newStack.push(i);
        }
        return newStack;
    }
}


let stack = new Stack(8);
stack.push(23);
stack.push(24);
stack.push(28);
stack.pop(23);
console.log(stack.peek());
console.log('stack.toArray();: ', stack.toArray());
console.log(Stack.fromIterable([1,2]));