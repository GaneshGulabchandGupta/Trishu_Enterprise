import { motion } from 'motion/react';
import { Flame, Shield, Wrench, Radio } from 'lucide-react';

interface ServicesProps {
  darkMode: boolean;
}

const services = [
  {
    icon: Flame,
    title: 'Fire Alarm Installation',
    description:
      'Professional installation of state-of-the-art fire alarm systems tailored to your property needs.',
  },
  {
    icon: Shield,
    title: 'Fire Safety Inspection',
    description:
      'Comprehensive safety inspections to ensure compliance with fire codes and regulations.',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    description:
      'Regular maintenance and technical support to keep your fire safety systems operating optimally.',
  },
  {
    icon: Radio,
    title: 'Emergency Monitoring',
    description:
      '24/7 emergency monitoring services with instant alerts and rapid response capabilities.',
  },
];

export function Services({ darkMode }: ServicesProps) {
  return (
    <section
      id="services"
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Our Services
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Comprehensive fire safety solutions designed to protect what matters most
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group p-6 rounded-xl transition-all hover:scale-105 cursor-pointer ${
                  darkMode
                    ? 'bg-gray-900 hover:bg-gray-900/80 border border-gray-700'
                    : 'bg-gray-50 hover:bg-white hover:shadow-xl'
                }`}
              >
                <div className="bg-gradient-to-br from-[#E53935] to-[#FF7043] w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3
                  className={`text-xl font-bold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {service.title}
                </h3>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
