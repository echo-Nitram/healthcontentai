'use client';

import MedicalFAQGenerator from './components/MedicalFAQGenerator';
import AdBanner from './components/ads/AdBanner';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">
              HealthContentAI
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Generador de FAQs Médicas con IA
            </p>
          </div>
          
          {/* Anuncio superior */}
          <AdBanner 
            slot="5555555555" 
            format="auto" 
          />
          
          <MedicalFAQGenerator />
          
          {/* Anuncio inferior */}
          <AdBanner 
            slot="6666666666" 
            format="auto" 
            height={250} 
          />
          
          {/* Footer simple */}
          <footer className="mt-12 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} HealthContentAI. Todos los derechos reservados.</p>
            <p className="mt-2">Este sitio utiliza inteligencia artificial para generar contenido médico.</p>
          </footer>
        </div>
      </div>
    </main>
  );
}