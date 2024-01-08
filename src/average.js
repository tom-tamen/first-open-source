/**
 * Calculates the average of an array of numbers.
 * @param {number[]} numbers - The array of numbers.
 * @returns {number} The average of the numbers.
 */

export function average(numbers) {

    if (!Array.isArray(numbers)) {
        throw new TypeError('numbers is not an array');
    }

    if (numbers.length === 0) {
        return NaN;
    }

    if (numbers.some(isNaN)) {
        throw new TypeError('numbers contains elements that are not numbers');
    }

    const numbersAverage = numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
    if (!Number.isFinite(numbersAverage)) {
        throw new TypeError('numbers average is not finite');
    }

    return numbersAverage;
}
