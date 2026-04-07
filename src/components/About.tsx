'use client';

import { motion } from 'framer-motion';
import { FaShieldAlt, FaFileContract, FaClock, FaPhone, FaHandshake, FaSmile } from 'react-icons/fa';

const features = [
  {
    icon: FaShieldAlt,
    titleDE: 'Sicherer Transport',
    titleEN: 'Safe Transport',
    descDE: 'Ihre Güter sind in sicheren Händen mit unserem erfahrenen Team.',
    descEN: 'Your goods are in safe hands with our experienced team.',
  },
  {
    icon: FaFileContract,
    titleDE: 'Vollversichert',
    titleEN: 'Fully Insured Transport',
    descDE: 'Vollständiger Versicherungsschutz für alle Ihre Sendungen.',
    descEN: 'Complete insurance coverage for all your shipments.',
  },
  {
    icon: FaClock,
    titleDE: 'Pünktliche Lieferung',
    titleEN: 'On-Time Delivery',
    descDE: 'Wir liefern pünktlich, wie vereinbart - garantiert.',
    descEN: 'We deliver on time, as agreed - guaranteed.',
  },
  {
    icon: FaPhone,
    titleDE: 'Kommunikation',
    titleEN: 'Communication',
    descDE: 'Ständige Erreichbarkeit und transparente Kommunikation.',
    descEN: 'Constant availability and transparent communication.',
  },
  {
    icon: FaHandshake,
    titleDE: 'Langfristige Zusammenarbeit',
    titleEN: 'Long-Term Cooperation',
    descDE: 'Wir bauen dauerhafte Geschäftsbeziehungen auf.',
    descEN: 'We build lasting business relationships.',
  },
  {
    icon: FaSmile,
    titleDE: 'Kundenzufriedenheit',
    titleEN: 'Customer Satisfaction',
    descDE: 'Ihre Zufriedenheit ist unser oberstes Ziel.',
    descEN: 'Your satisfaction is our top priority.',
  },
];

export default function About() {
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
            Modern and customer-oriented transport solutions since 2023
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Deutsch</h3>
            <p className="text-gray-600 leading-relaxed">
              Die Spedition Ahmed wurde im Jahr 2023 gegründet und hat sich seitdem als zuverlässiger Partner für Transport- und Logistikdienstleistungen in Deutschland etabliert. 
              Unser Unternehmen zeichnet sich durch moderne Ausstattung, flexible Lösungen und einen kundenorientierten Service aus. 
              Mit einem wachsenden Fuhrpark und einem engagierten Team bieten wir Ihnen maßgeschneiderte Transportlösungen für Ihre individuellen Anforderungen.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">English</h3>
            <p className="text-gray-600 leading-relaxed">
              Ahmed Spedition was founded in 2023 and has since established itself as a reliable partner for transport and logistics services in Germany. 
              Our company is characterized by modern equipment, flexible solutions and customer-oriented service. 
              With a growing fleet and a dedicated team, we offer you customized transport solutions for your individual requirements.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="text-indigo-600 text-2xl" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.titleEN}</h4>
              <p className="text-gray-600 text-sm mb-2">{feature.descEN}</p>
              <p className="text-gray-500 text-sm italic">{feature.descDE}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}