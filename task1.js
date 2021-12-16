function createDebounceFunction(cb, ms) {
    let timeout;
    const startTime = new Date().getTime();
    return function () {
        
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(cb, ms);
        const time = new Date().getTime() - startTime;
       console.log((time / 1000).toFixed(1));
    };
}

const log100 = () => console.log(100);
const debounceLog100 = createDebounceFunction(log100, 1000);

debounceLog100();

setTimeout(debounceLog100, 200); // так как задержка в 1000мс и новый вызов этой же функции происходит через 200 миллисекунд, то таймер запускается заново
setTimeout(debounceLog100, 400); // снова сбрасываем таймер ещё через 200 миллисекунд
