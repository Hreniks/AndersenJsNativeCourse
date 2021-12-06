function makeObjectDeepCopy(obj) {

    if (obj.constructor != Object && obj.constructor != Array) return obj;
    
    let copy = {};
    
    if (obj.constructor == Date || obj.constructor == RegExp || obj.constructor == Function ||
        obj.constructor == String || obj.constructor == Number || obj.constructor == Boolean)
        return new obj.constructor(obj);

    for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] != null) copy[key] = makeObjectDeepCopy(obj[key]);
        else copy[key] = obj[key];

    }
    return Array.isArray(obj) ? (copy.length = obj.length) && Array.from(copy) : copy;
}
// var obj = [new Date(), new RegExp(/aaa/i), [1, [2,3]], { a: 1, b: 2 }];

// var obj =
// {
//     date: new Date(),
//     func: function (q) { return 1 + q; },
//     num: 123,
//     text: "asdasd",
//     array: [1, "asd"],
//     regex: new RegExp(/aaa/i),
//     subobj:
//     {
//         num: new Date(),
//         text: "asdsaD"
//     }
// };

// const testObject = {
//     one: 1,
//     func: function() { return 'func'},
//     first: 'first',
//     arr: [1, 'second', {1: 1.1, 2: 2.2}],
//     two: 2,
//     "2": 'TWO',
//     "1": 'ONE',
//     obj: {
//       a: 'a',
//       b: 'b',
//       three: 3,
//       o: {
//         I: 'one',
//         II: 'two',
//         III: 'three'
//       }
//     },
//     truth: true,
//   }

const copyObject = makeObjectDeepCopy(obj);
console.log(obj);
console.log(copyObject);