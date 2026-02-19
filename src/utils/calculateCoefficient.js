
export function calculateCoefficient(percentage){
    const value = Number(percentage)
    if(isNaN(value) || value < 0 || value > 100) {
        return null;
    };

    const resul = 1/(value / 100 + 1)
    return Number(resul.toFixed(5))}