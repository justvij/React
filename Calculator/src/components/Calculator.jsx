import { useState } from 'react';
import { evaluate } from 'mathjs';

const buttons = [
    '7', '8', '9', '/', 'sin',
    '4', '5', '6', '*', 'cos',
    '1', '2', '3', '-', 'tan',
    '0', '.', '=', '+', '√'
];

const Calculator = () => {
    const [input, setInput] = useState('');

    const handleClick = (value) => {
        if (value === '=') {
            try {
                setInput(String(evaluate(input)));
            } catch (error) {
                setInput('Error');
            }
        } else if (value === '√') {
            setInput(String(evaluate(`sqrt(${input})`)));
        } else if (['sin', 'cos', 'tan'].includes(value)) {
            setInput(String(evaluate(`${value}(${input})`)));
        } else {
            setInput(input + value);
        }
    };

    return (
        <>

            <div className="max-w-xl mx-auto mt-10 px-10 py-10  bg-orange-300">
                <h6 className=''>Calculator</h6>
                <div className="bg-gray-800 text-white text-3xl p-4 rounded-lg mb-4">
                    {input || '0'}
                </div>
                <div className="grid grid-cols-5 gap-4">
                    {buttons.map((button, index) => (
                        <button
                            key={index}
                            className="rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-blue-400 "
                            onClick={() => handleClick(button)}
                        >
                            {button}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Calculator;
