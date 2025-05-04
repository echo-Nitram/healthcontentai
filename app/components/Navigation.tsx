'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  
  return (
    <nav className="bg-white shadow-sm mb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-blue-600">
                HealthContentAI
              </Link>
            </div>
            <div className="ml-6 flex space-x-8">
              <Link
                href="/"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  pathname === '/' 
                    ? 'text-gray-900 border-b-2 border-blue-500' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Generador
              </Link>
              <Link
                href="/about"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  pathname === '/about' 
                    ? 'text-gray-900 border-b-2 border-blue-500' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Acerca de
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}