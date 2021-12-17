class Calculator {
    constructor(x,y){
        if (!Number.isInteger(x) || !Number.isInteger(y)) throw new Error('One of argument is not a number');
        this.x = x;
        this.y = y;
        this.setX = this.setX.bind(this);
        this.setY = this.setX.bind(this);
        this.logSum = this.logSum.bind(this);
        this.logMul= this.logMul.bind(this);
        this.logSub = this.logSub.bind(this);
        this.logDiv = this.logDiv.bind(this);
    }

    

    setX(num){
        if (num === undefined) throw new Error('argument is undefined');
        if (!Number.isInteger(num)) throw new Error('argument is not a number');
        this.x = num;
    }

    setY(num){
        if (num === undefined) throw new Error('argument is undefined');
        if (!Number.isInteger(num)) throw new Error('argument is not a number');
        this.y = num; 
    }

    logSum(){
        return console.log(this.x + this.y);
    }

    logMul(){
        return console.log(this.x * this.y);
    }

    logSub(){
        return console.log(this.x - this.y);
    }

    logDiv() {
        if (this.y === 0) throw new Error('the second argument is 0');
        return console.log(this.x / this.y);
    }
}

const calculator = new Calculator(12, 3);
calculator.logSum(); // 15
calculator.logDiv(); // 4
calculator.setX(15);
calculator.logDiv(); // 5
const logCalculatorDiv = calculator.logDiv;
logCalculatorDiv(); // 5
calculator.setY(444n); //