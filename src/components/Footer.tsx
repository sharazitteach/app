'use client';

import Link from 'next/link';
import { FaTruck, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <FaTruck className="text-indigo-400 text-2xl" />
              <span className="text-2xl font-bold">
                Spedition<span className="text-indigo-400">Ahmed</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Reliable transport services across Germany. Flexible and punctual delivery solutions for all your logistics needs.
            </p>
            <p className="text-gray-400 max-w-md">
              Zuverlässige Transportdienstleistungen in ganz Deutschland. Flexible und pünktliche Lieferlösungen für alle Ihre Logistikbedürfnisse.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-indigo-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-indigo-400 transition-colors">About</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-indigo-400 transition-colors">Services</Link></li>
              <li><Link href="/industries" className="text-gray-400 hover:text-indigo-400 transition-colors">Industries</Link></li>
              <li><Link href="/fleet" className="text-gray-400 hover:text-indigo-400 transition-colors">Fleet</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-indigo-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Industriestraße 123</li>
              <li>12345 Berlin, Germany</li>
              <li className="pt-2">
                <a href="tel:+49123456789" className="hover:text-indigo-400 transition-colors">
                  +49 123 456 789
                </a>
              </li>
              <li>
                <a href="mailto:info@spedition-ahmed.de" className="hover:text-indigo-400 transition-colors">
                  info@spedition-ahmed.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Spedition Ahmed. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors">
              <FaFacebook />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}