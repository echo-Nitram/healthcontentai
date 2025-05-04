'use client';

import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';

const SPECIALTIES = [
  'Medicina General',
  'Cardiología',
  'Neurología',
  'Pediatría',
  'Ginecología',
  'Oncología',
];

export default function MedicalFAQGenerator() {
  const [specialty, setSpecialty] = useState(SPECIALTIES[0]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const saveFAQ = async (question: string, answer: string, specialty: string) => {
    try {
      await addDoc(collection(db, 'faqs'), {
        question,
        answer,
        specialty,
        createdAt: new Date(),
      });
      console.log('FAQ guardada exitosamente');
    } catch (error) {
      console.error('Error al guardar FAQ:', error);
    }
  };

  const generateFAQ = async () => {
    if (!question.trim()) return;
    
    setIsLoading(true);
    try {
      const response = await fetch('/api/generate-faq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          specialty,
          question: question.trim(),
        }),
      });

      const data = await response.json();
      setAnswer(data.answer);
      
      // Guardar en Firestore
      await saveFAQ(question.trim(), data.answer, specialty);
    } catch (error) {
      console.error('Error:', error);
      setAnswer('Error al generar la respuesta. Por favor, intente nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 max-w-2xl mx-auto">
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Especialidad Médica
        </label>
        <select
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {SPECIALTIES.map((spec) => (
            <option key={spec} value={spec}>{spec}</option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Escriba una pregunta frecuente
        </label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Ej: ¿Cuáles son los síntomas más comunes del infarto?"
        />
      </div>

      <button
        onClick={generateFAQ}
        disabled={isLoading || !question.trim()}
        className={`w-full py-2 px-4 rounded-md text-white font-medium ${
          isLoading || !question.trim() 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {isLoading ? 'Generando...' : 'Generar Respuesta'}
      </button>

      {answer && (
        <div className="mt-6 p-4 bg-gray-50 rounded-md">
          <h3 className="font-medium text-gray-900 mb-2">Respuesta:</h3>
          <p className="text-gray-700 whitespace-pre-wrap">{answer}</p>
        </div>
      )}
    </div>
  );
}