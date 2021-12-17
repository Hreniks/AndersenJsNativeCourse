

Array.prototype.myFilter = function (cb, thisArg) {
    if (this == null) throw new Error('Cant iterate over undefined or null');
    if (typeof cb !== 'function') throw new Error('callback is not a function');
    let context = this;
    let result = [];

    let O = Object(this);
    let length = O.length;


    if (thisArg) {
        context = thisArg;
    }

    
    for (let i = 0; i < length; i++) {
        if (i in O) {
            if (cb.call(context, this[i], i, O)){
                result.push(this[i]);
            }
        }
        
    }
    
    return result;

    // while (i < this.length) {
    //     if (i in this) {
    //         cb.call(context, this[i], i, this);
    //     }
    //     i++;
    // }


};

let arr = [1, 2, 3, 4, 5];

let second = arr.myFilter((item,index,array) => item > 3);
console.log(second);