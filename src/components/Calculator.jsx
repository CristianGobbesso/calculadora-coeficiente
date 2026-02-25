import { useState, useEffect } from "react";
import { calculateCoefficient } from "../utils/calculateCoefficient";
import "./Calculator.css";

export default function Calculator() {

  const [percentage, setPercentage] = useState(() => {
    return localStorage.getItem("percentage") || "";
  });

  const [result, setResult] = useState(() => {
    const saved = localStorage.getItem("result");
    return saved ? Number(saved) : null;
  });

  const [error, setError] = useState("");

  // Guardar percentage
  useEffect(() => {
    localStorage.setItem("percentage", percentage);
  }, [percentage]);

  // Guardar result
  useEffect(() => {
    if (result !== null) {
      localStorage.setItem("result", result);
    }
  }, [result]);

  const handleCalculate = () => {
    const normalized = percentage.trim().replace(",", ".");
    const value = calculateCoefficient(normalized);

    if (value === null) {
      setError("Ingrese un Derecho de exportación válido");
      setResult(null);
      return;
    }

    setError("");
    setResult(value);
  };

  return (
    <div className="calculator">
      <h2 className="calculator__title">
        Calculadora de
        <span> Coeficiente de Exportación</span>
      </h2>

      <form
        className="calculator__form"
        onSubmit={(e) => {
          e.preventDefault();
          handleCalculate();
        }}
      >
        <input
          type="text"
          placeholder="Ingrese el derecho de Expo"
          value={percentage}
          onChange={(e) => {
            setPercentage(e.target.value);
            setError("");
          }}
        />

        <button type="submit">Calcular</button>
      </form>

      {error && <p className="calculator__error">{error}</p>}

      {result !== null && (
        <p className="calculator__result">
          Coeficiente de Exportación: {result}
        </p>
      )}
    </div>
  );
}