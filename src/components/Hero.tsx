'use client';

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920')] bg-cover bg-center opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Reliable transport services{' '}
              <span className="text-indigo-600">across Germany</span>
            </h1>
            
            <div className="space-y-3">
              <p className="text-lg text-gray-600">
                Reliable transport, flexible and punctual throughout Germany.
              </p>
              <p className="text-lg text-gray-500 italic">
                Zuverlässige Transporte, flexibel und pünktlich deutschlandweit.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-200 hover:shadow-xl hover:shadow-indigo-600/25 hover:-translate-y-0.5"
            >
              Request a Quote
              <FaArrowRight className="text-sm" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600"
                  alt="Delivery van"
                  className="w-full h-48 md:h-64 object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1591768793355-74d04bb6608f?w=600"
                  alt="Logistics truck"
                  className="w-full h-40 md:h-52 object-cover"
                />
              </motion.div>
            </div>
            <div className="space-y-4 pt-8 md:pt-12">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=600"
                  alt="Cargo truck"
                  className="w-full h-40 md:h-52 object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=600"
                  alt="Warehouse logistics"
                  className="w-full h-48 md:h-64 object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
}