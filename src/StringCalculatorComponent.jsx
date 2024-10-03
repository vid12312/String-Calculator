// src/StringCalculatorComponent.tsx
import React, { useState } from 'react';
import StringCalculator from './StringCalculator';

const StringCalculatorComponent= () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleAdd = () => {
        try {
            const sum = StringCalculator.add(input);
            setResult(sum.toString());
        } catch (error) {
            setResult(error.message);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleAdd}>ADD</button>
            <div>Result: {result}</div>
        </div>
    );
};

export default StringCalculatorComponent;
