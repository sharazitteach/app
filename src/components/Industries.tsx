'use client';

import { motion } from 'framer-motion';
import { FaHardHat, FaCalendarAlt, FaIndustry, FaCar, FaSnowflake, FaShoppingCart, FaTree, FaCouch, FaTshirt, FaFileAlt } from 'react-icons/fa';

const industries = [
  {
    icon: FaHardHat,
    title: 'Construction',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400',
  },
  {
    icon: FaCalendarAlt,
    title: 'Events',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400',
  },
  {
    icon: FaIndustry,
    title: 'Machinery',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400',
  },
  {
    icon: FaCar,
    title: 'Automotive',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400',
  },
  {
    icon: FaSnowflake,
    title: 'Refrigerated Goods',
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=400',
  },
  {
    icon: FaShoppingCart,
    title: 'Retail',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
  },
  {
    icon: FaTree,
    title: 'Wood & Materials',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400',
  },
  {
    icon: FaCouch,
    title: 'Furniture',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400',
  },
  {
    icon: FaTshirt,
    title: 'Textile',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400',
  },
  {
    icon: FaFileAlt,
    title: 'Paper Industry',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd45eeed858?w=400',
  },
];

export default function Industries() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industries & Goods
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We serve a wide range of industries with specialized transport solutions
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <industry.icon className="text-white text-lg" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 text-center">{industry.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}