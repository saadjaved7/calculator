export function add(numbers: number[]): number {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}

export function subtract(numbers: number[]): number {
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result -= numbers[i];
    }
    return result;
}

export function multiply(numbers: number[]): number {
    let result = 1;
    for (let i = 0; i < numbers.length; i++) {
        result *= numbers[i];
    }
    return result;
}

export function divide(dividend: number, divisor: number): number {
    return dividend / divisor;
}
