import  { useState } from 'react'
import { calculateCoefficient } from '../utils/calculateCoefficient';

export default function Calculator(){
    const [percentage, setPercentage]= useState("");
    const [result, setResult]=useState(null);

    const handleCalculate = ()=>{
        const value = calculateCoefficient(percentage)
        setResult(value)
    }
    return (
        <div>
            <h1>Calculadora de Coeficiente de Exportacion</h1>
            <input type="number"
            placeholder='Ingrese el derecho de exportacion'
            value={percentage}
            onChange={(e)=>setPercentage(e.target.value)} />

            <button onClick={handleCalculate}>Calcular</button>

            {result !== null && (
                <p>Coeficiente de Exportacion: {result}</p>
            ) }

        </div>
    );

}