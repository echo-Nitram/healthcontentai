'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Acerca de HealthContentAI
          </h1>
          <p className="text-xl text-gray-600">
            Inteligencia artificial al servicio de la información médica
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            ¿Qué es HealthContentAI?
          </h2>
          <div className="prose prose-lg text-gray-700">
            <p className="mb-4">
              HealthContentAI es una plataforma innovadora que utiliza inteligencia artificial 
              para generar respuestas médicas precisas y confiables a preguntas frecuentes. 
              Nuestro objetivo es hacer la información médica más accesible para todos.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">¿Cómo funciona?</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Selecciona una especialidad médica</li>
              <li>Escribe tu pregunta frecuente</li>
              <li>Recibe una respuesta generada por IA, adaptada para pacientes</li>
              <li>Todas las respuestas incluyen un disclaimer médico</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4">Especialidades disponibles</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Medicina General</li>
              <li>Cardiología</li>
              <li>Neurología</li>
              <li>Pediatría</li>
              <li>Ginecología</li>
              <li>Oncología</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4">Importante</h3>
            <p className="mb-4">
              Esta información está generada por inteligencia artificial y no debe 
              considerarse como consejo médico profesional. Siempre consulte con un 
              médico calificado para obtener diagnósticos y tratamientos específicos.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Volver al Generador
          </Link>
        </div>
      </div>
    </main>
  );
}