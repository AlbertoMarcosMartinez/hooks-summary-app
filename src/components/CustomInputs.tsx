import React, { forwardRef, useImperativeHandle, useRef } from 'react';

// Definimos la interfaz de métodos que queremos exponer al padre
export interface CustomInputHandle {
  focus: () => void;
  clear: () => void;
  getValue: () => string;
}

interface Props {
  label: string;
  placeholder?: string;
}

// Utilizamos forwardRef para poder recibir la ref del padre
const CustomInput = forwardRef<CustomInputHandle, Props>(
  ({ label, placeholder }, ref) => {
    // Ref interna para el input real
    const inputRef = useRef<HTMLInputElement>(null);

    // Definimos qué métodos exponemos al padre
    useImperativeHandle(ref, () => ({
      // Método para enfocar el input
      focus: () => {
        inputRef.current?.focus();
      },
      // Método para limpiar el input
      clear: () => {
        if (inputRef.current) {
          inputRef.current.value = '';
        }
      },
      // Método para obtener el valor actual
      getValue: () => {
        return inputRef.current?.value || '';
      }
    }));

    return (
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          className="px-3 py-2 border rounded-lg w-full focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  }
);

export default CustomInput;