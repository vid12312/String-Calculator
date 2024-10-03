// StringCalculator.test.js
import StringCalculator from './StringCalculator';

describe('StringCalculator', () => {
    it('should return 0 for an empty string', () => {
        expect(StringCalculator.add("")).toBe(0);
    });

    it('should return the number itself for a single number', () => {
        expect(StringCalculator.add("5")).toBe(5);
    });

    it('should return the sum for two numbers separated by a comma', () => {
        expect(StringCalculator.add("1,2")).toBe(3);
    });

    it('should return the sum for any amount of numbers separated by commas', () => {
        expect(StringCalculator.add("1,2,3,4")).toBe(10);
    });

    it('should handle new lines as separators', () => {
        expect(StringCalculator.add("1\n2,3")).toBe(6);
    });

    it('should ignore numbers greater than 1000', () => {
        expect(StringCalculator.add("1001,2")).toBe(2);
    });

    it('should throw an error for negative numbers', () => {
        expect(() => StringCalculator.add("-1,2")).toThrow("Negatives not allowed: -1");
    });
});
