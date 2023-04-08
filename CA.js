export function add(numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}
export function subtract(numbers) {
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result -= numbers[i];
    }
    return result;
}
export function multiply(numbers) {
    let result = 1;
    for (let i = 0; i < numbers.length; i++) {
        result *= numbers[i];
    }
    return result;
}
export function divide(dividend, divisor) {
    return dividend / divisor;
}
