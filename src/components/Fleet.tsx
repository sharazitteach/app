'use client';

import { motion } from 'framer-motion';
import { FaWeightHanging, FaTruckLoading, FaTools } from 'react-icons/fa';

const vehicles = [
  {
    name: 'Small Van (Caddy)',
    capacity: 'Up to 500 kg',
    payload: '1.5 - 2.0 m³',
    usage: 'Small packages, urban delivery',
    image: 'https://images.unsplash.com/photo-1532408840957-031d8034aeef?w=400',
  },
  {
    name: 'Transporter 3.5t',
    capacity: 'Up to 1,200 kg',
    payload: '8 - 12 m³',
    usage: 'Medium loads, local delivery',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=400',
  },
  {
    name: 'Box Truck',
    capacity: 'Up to 3,000 kg',
    payload: '20 - 30 m³',
    usage: 'Large shipments, warehouse delivery',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400',
  },
  {
    name: '7.5 Ton Truck',
    capacity: 'Up to 5,000 kg',
    payload: '35 - 45 m³',
    usage: 'Heavy cargo, regional transport',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400',
  },
  {
    name: '12 Ton Truck',
    capacity: 'Up to 8,000 kg',
    payload: '50 - 60 m³',
    usage: 'Industrial goods, bulk transport',
    image: 'https://images.unsplash.com/photo-1591768793355-74d04bb6608f?w=400',
  },
  {
    name: '40 Ton Trailer',
    capacity: 'Up to 24,000 kg',
    payload: '80 - 100 m³',
    usage: 'Long-distance, full truckload',
    image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=400',
  },
];

const equipment = [
  {
    title: 'Tail lift',
    descEN: 'Hydraulic lift for easy loading and unloading of heavy goods',
    descDE: 'Hydraulische Hebebühne für einfaches Be- und Entladen schwerer Güter',
  },
  {
    title: 'Truck-mounted forklift',
    descEN: 'Onboard forklift for deliveries without loading dock access',
    descDE: 'Ladebordgerät für Lieferungen ohne Laderampen-Zugang',
  },
  {
    title: 'Custom solutions',
    descEN: 'Tailored equipment based on your specific requirements',
    descDE: 'Maßgeschneiderte Ausrüstung basierend auf Ihren spezifischen Anforderungen',
  },
];

export default function Fleet() {
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
            Our Fleet
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From small vans to 40-ton trucks - we have the right vehicle for every transport need
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold text-gray-900 mb-3">{vehicle.name}</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <FaWeightHanging className="text-indigo-600" />
                    <span className="text-gray-600">Capacity: <span className="font-medium">{vehicle.capacity}</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaTruckLoading className="text-indigo-600" />
                    <span className="text-gray-600">Payload: <span className="font-medium">{vehicle.payload}</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">Usage: <span className="text-gray-600">{vehicle.usage}</span></span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-indigo-900 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Additional Equipment</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {equipment.map((item, index) => (
              <div key={index} className="bg-indigo-800/50 rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FaTools className="text-white text-xl" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-indigo-200 text-sm mb-1">{item.descEN}</p>
                <p className="text-indigo-300 text-sm italic">{item.descDE}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}