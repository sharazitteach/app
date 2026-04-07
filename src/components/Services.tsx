'use client';

import { motion } from 'framer-motion';
import { FaTruck, FaBolt, FaMoon, FaCogs, FaRoute, FaTools, FaTruckLoading } from 'react-icons/fa';

const services = [
  {
    icon: FaTruck,
    titleEN: 'Local & Long-Distance',
    titleDE: 'Lokal & Fernverkehr',
    descEN: 'Reliable transportation across all regions of Germany and Europe.',
    descDE: 'Zuverlässiger Transport in allen Regionen Deutschlands und Europas.',
  },
  {
    icon: FaBolt,
    titleEN: 'Express Delivery',
    titleDE: 'Expresslieferung',
    descEN: 'Fast and urgent deliveries with priority handling.',
    descDE: 'Schnelle und eilige Lieferungen mit priorisierter Abwicklung.',
  },
  {
    icon: FaMoon,
    titleEN: 'Day & Night Delivery',
    titleDE: 'Tag & Nacht Lieferung',
    descEN: '24/7 availability for time-sensitive deliveries.',
    descDE: '24/7 Verfügbarkeit für zeitkritische Lieferungen.',
  },
  {
    icon: FaCogs,
    titleEN: 'Machinery Transport',
    titleDE: 'Maschinentransport',
    descEN: 'Specialized transport for industrial machinery and equipment.',
    descDE: 'Spezialisierter Transport für Industriemaschinen und -geräte.',
  },
  {
    icon: FaRoute,
    titleEN: 'Fixed Routes',
    titleDE: 'Festpreise/Routen',
    descEN: 'Scheduled routes for regular deliveries with fixed pricing.',
    descDE: 'Geplante Routen für regelmäßige Lieferungen mit Festpreisen.',
  },
  {
    icon: FaTools,
    titleEN: 'Tail Lift & Forklift',
    titleDE: 'Hebebühne & Gabelstapler',
    descEN: 'Equipment for easy loading and unloading of heavy goods.',
    descDE: 'Ausrüstung für einfaches Be- und Entladen von schweren Gütern.',
  },
  {
    icon: FaTruckLoading,
    titleEN: 'Crane Transport',
    titleDE: 'Kran',
    descEN: 'Heavy lift capabilities for oversized cargo.',
    descDE: 'Schwerlastfähigkeiten für übergroße Ladung.',
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive transport solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-indigo-600 transition-colors duration-300">
                <service.icon className="text-indigo-600 text-2xl group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{service.titleEN}</h4>
              <p className="text-gray-600 text-sm mb-2">{service.descEN}</p>
              <p className="text-gray-500 text-sm italic">{service.descDE}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}