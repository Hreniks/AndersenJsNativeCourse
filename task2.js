function selectFromInterval(arr, firstValue = 0, secondValue = 0) {

    if (!Array.isArray(arr) || typeof firstValue != 'number' || typeof secondValue != 'number' || arr.some(item => typeof item !== 'number')) {
        throw new Error('Ошибка!');
    }

    return firstValue <= secondValue ? arr.filter(item => item >= firstValue && item <= secondValue)
    : arr.filter(item => item <= firstValue && item >= secondValue);
}