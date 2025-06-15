import React, { useRef } from 'react';
import CustomInput, { CustomInputHandle } from '../CustomInputs';

const UseImperativeHandleCard: React.FC = () => {
  // Creamos la ref que usaremos para controlar el input
  const inputRef = useRef<CustomInputHandle>(null);

  // Funciones para demostrar el uso de los métodos expuestos
  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleClear = () => {
    inputRef.current?.clear();
  };

  const handleGetValue = () => {
    const value = inputRef.current?.getValue();
    alert(`Valor actual: ${value}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        useImperative Hook Example
      </h2>
      
      <div className="space-y-4">
        {/* Explicación del ejemplo */}
        <p className="text-sm text-gray-600">
          Este ejemplo muestra cómo exponer métodos específicos de un componente hijo
          al componente padre de forma controlada.
        </p>

        {/* Input personalizado */}
        <CustomInput
          ref={inputRef}
          label="Input Personalizado"
          placeholder="Escribe algo aquí..."
        />

        {/* Botones de control */}
        <div className="flex gap-3">
          <button
            onClick={handleFocus}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Enfocar
          </button>
          <button
            onClick={handleClear}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Limpiar
          </button>
          <button
            onClick={handleGetValue}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Obtener Valor
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseImperativeHandleCard;