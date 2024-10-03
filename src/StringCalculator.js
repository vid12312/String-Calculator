class StringCalculator {
    static add = (numbers) => {
        if (numbers === "") return 0;

        const numberArray = this.splitNumbers(numbers);
        this.checkForNegatives(numberArray);

        return numberArray
            .filter(num => num <= 1000) 
            .reduce((sum, num) => sum + num, 0);
    };

    static splitNumbers = (numbers) => {
        const delimiters = /[,\n]/; 
        return numbers.split(delimiters).map(Number);
    };

    static checkForNegatives = (numbers) => {
        const negatives = numbers.filter(num => num < 0);
        if (negatives.length > 0) {
            throw new Error("Negatives not allowed: " + negatives.join(", "));
        }
    };
}

export default StringCalculator;
