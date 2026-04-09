import { motion } from 'motion/react';
import { Award, Users, Target, CheckCircle } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

export function About({ darkMode }: AboutProps) {
  const features = [
    'Certified and licensed technicians',
    'Compliant with national fire safety codes',
    'ISO 9001:2015 Quality Certified',
    'Member of National Fire Protection Association',
  ];

  return (
    <section
      id="about"
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className={`text-3xl md:text-4xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              About FireGuard Pro
            </h2>
            <p
              className={`text-lg mb-6 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              With over a decade of experience in fire safety solutions, FireGuard Pro has
              become the trusted choice for residential and commercial fire protection
              systems.
            </p>
            <p
              className={`text-lg mb-8 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Our mission is to provide cutting-edge fire safety technology combined with
              exceptional customer service, ensuring peace of mind for all our clients.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-[#E53935] flex-shrink-0" />
                  <span
                    className={darkMode ? 'text-gray-300' : 'text-gray-700'}
                  >
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Trust Badges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            <div
              className={`p-6 rounded-xl text-center ${
                darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-lg'
              }`}
            >
              <Award className="w-12 h-12 text-[#E53935] mx-auto mb-4" />
              <h3
                className={`text-2xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                10+ Years
              </h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                Industry Experience
              </p>
            </div>

            <div
              className={`p-6 rounded-xl text-center ${
                darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-lg'
              }`}
            >
              <Users className="w-12 h-12 text-[#FF7043] mx-auto mb-4" />
              <h3
                className={`text-2xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                500+
              </h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                Happy Clients
              </p>
            </div>

            <div
              className={`p-6 rounded-xl text-center ${
                darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-lg'
              }`}
            >
              <Target className="w-12 h-12 text-[#E53935] mx-auto mb-4" />
              <h3
                className={`text-2xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                1000+
              </h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                Installations
              </p>
            </div>

            <div
              className={`p-6 rounded-xl text-center ${
                darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-lg'
              }`}
            >
              <CheckCircle className="w-12 h-12 text-[#FF7043] mx-auto mb-4" />
              <h3
                className={`text-2xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                100%
              </h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                Satisfaction Rate
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
