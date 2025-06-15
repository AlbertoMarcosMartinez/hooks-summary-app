import React, { useId } from 'react';

const UseIdCard: React.FC = () => {
  // Generamos IDs únicos para cada elemento
  const nameId = useId();
  const emailId = useId();
  const descriptionId = useId();

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        useId Hook Example
      </h2>

      <div className="space-y-6">
        {/* Explicación */}
        <p className="text-sm text-gray-600">
          useId genera IDs únicos y consistentes, perfectos para accesibilidad
          y vincular elementos HTML.
        </p>

        {/* Formulario de ejemplo */}
        <form className="space-y-4">
          <div>
            <label 
              htmlFor={nameId}
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nombre
            </label>
            <input
              id={nameId}
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              aria-describedby={`${nameId}-help`}
            />
            <p 
              id={`${nameId}-help`}
              className="mt-1 text-xs text-gray-500"
            >
              ID generado: {nameId}
            </p>
          </div>

          <div>
            <label 
              htmlFor={emailId}
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id={emailId}
              type="email"
              className="w-full px-3 py-2 border rounded-lg"
              aria-describedby={`${emailId}-help`}
            />
            <p 
              id={`${emailId}-help`}
              className="mt-1 text-xs text-gray-500"
            >
              ID generado: {emailId}
            </p>
          </div>

          <div>
            <label 
              htmlFor={descriptionId}
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Descripción
            </label>
            <textarea
              id={descriptionId}
              className="w-full px-3 py-2 border rounded-lg"
              aria-describedby={`${descriptionId}-help`}
            />
            <p 
              id={`${descriptionId}-help`}
              className="mt-1 text-xs text-gray-500"
            >
              ID generado: {descriptionId}
            </p>
          </div>
        </form>

        {/* Información adicional */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            Características importantes:
          </h3>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
            <li>IDs únicos garantizados</li>
            <li>Consistentes entre servidor y cliente</li>
            <li>Perfectos para accesibilidad</li>
            <li>No cambian entre re-renders</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UseIdCard;