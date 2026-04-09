import { motion } from 'motion/react';
import { BadgeCheck, Clock, Headphones, DollarSign } from 'lucide-react';

interface WhyChooseUsProps {
  darkMode: boolean;
}

const reasons = [
  {
    icon: BadgeCheck,
    title: 'Certified Technicians',
    description: 'All our technicians are certified and undergo regular training to stay updated with the latest fire safety standards.',
  },
  {
    icon: Clock,
    title: 'Fast Response Time',
    description: 'Emergency response within 2 hours. We understand that fire safety is time-critical and act accordingly.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock customer support and emergency monitoring to ensure your safety at all times.',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Competitive pricing without compromising on quality. Flexible payment plans available for all budgets.',
  },
];

export function WhyChooseUs({ darkMode }: WhyChooseUsProps) {
  return (
    <section
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
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
            Why Choose FireGuard Pro?
          </h2>
          <p
            className={`text-lg ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            } max-w-2xl mx-auto`}
          >
            We combine expertise, reliability, and customer-focused service to deliver
            exceptional fire safety solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-6 rounded-xl text-center ${
                  darkMode
                    ? 'bg-gray-800 border border-gray-700'
                    : 'bg-white shadow-lg'
                }`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#E53935] to-[#FF7043] rounded-full mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3
                  className={`text-xl font-bold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {reason.title}
                </h3>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
