'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '10k+', label: 'Customers' },
  { value: '5M+', label: 'Kilometers' },
  { value: '150+', label: 'Vehicles' },
  { value: '99%', label: 'On-Time Delivery' },
];

export default function Stats() {
  return (
    <section className="py-16 bg-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-indigo-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}