import {evaluate } from 'mathjs';

export function calculate(expression) {
try {
    const res = evaluate(expression);
    return res.toString();
} catch  {
    return 'Invalid expression'
}
}