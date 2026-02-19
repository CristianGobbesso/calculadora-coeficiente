import  { useState } from 'react'
import { calculateCoefficient } from '../utils/calculateCoefficient';
import "./Calculator.css";

export default function Calculator(){
    const [percentage, setPercentage]= useState("");
    const [result, setResult]=useState(null);
    const [error, setError]=useState("")

    const handleCalculate = ()=>{
        const normalized = percentage
        .trim()
        .replace(",", ".");
        const value = calculateCoefficient(normalized)
       if(value === null){
        setError("Ingrese un Derecho de exportacion valido");
        setResult(null)
       }
       else{
        setError("");
        setResult(value);
       };
    }
    return (
  <div className="calculator">
    <h1 className="calculator__title">
      Calculadora de
  <span> Coeficiente de Exportación</span>
    </h1>

    <div className="calculator__form">
      <input
        type="number"
        placeholder="Ingrese el derecho de Expo"
        value={percentage}
        onChange={(e) => {
          setPercentage(e.target.value);
          setError("");
          
        }}
      />

      <button onClick={handleCalculate}>
        Calcular
      </button>
    </div>

    {error && <p className="calculator__error">{error}</p>}

    {result !== null && (
      <p className="calculator__result">
        Coeficiente de Exportación: {result.toFixed(5)}
      </p>
    )}
  </div>
);


}