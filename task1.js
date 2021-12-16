function concatStrings(string, separator = '') {
    let result = string;
    let isMutable = true;
    let validSeparator = typeof (separator) === "string" ? separator : '';
    
    function next(nextString) {
        
        if (typeof nextString === 'string' && isMutable === true && nextString !== undefined) result += validSeparator + nextString;
        else isMutable = false;
        
        return next;
    }

    
    next.toString = () => {
        return result;
    };

    
    return next;
    
}

console.log(concatStrings('first')('second')('third')([])(123)().toString());
console.log(concatStrings('first', null)('second')()('third').toString());
console.log(concatStrings('first', '123')('second')('third')().toString());
//let newString = concatStrings('first')('second')('third')();
//console.log(newString);