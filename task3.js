let myIterable = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
        if ((this.to < this.from) || typeof this.from !== 'number' || typeof this.to !== 'number'){
            throw new Error('Ошибка!');
        }
        
        this.current = this.from;
        return this;
    },
    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        }
        else return { done: true };
    }
};



for (const item of myIterable) {
    console.log(item);
}