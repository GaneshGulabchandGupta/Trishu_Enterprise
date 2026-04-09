import { motion } from 'motion/react';
import { TrendingUp, Users, Award, MapPin } from 'lucide-react';

interface StatsProps {
  darkMode: boolean;
}

const stats = [
  {
    icon: MapPin,
    value: '1000+',
    label: 'Installations Completed',
    color: 'from-[#E53935] to-[#FF7043]',
  },
  {
    icon: Users,
    value: '500+',
    label: 'Satisfied Clients',
    color: 'from-[#FF7043] to-[#E53935]',
  },
  {
    icon: TrendingUp,
    value: '10+',
    label: 'Years of Experience',
    color: 'from-[#E53935] to-[#FF7043]',
  },
  {
    icon: Award,
    value: '24/7',
    label: 'Emergency Support',
    color: 'from-[#FF7043] to-[#E53935]',
  },
];

export function Stats({ darkMode }: StatsProps) {
  return (
    <section
      className={`py-20 relative overflow-hidden ${
        darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-[#E53935] via-[#D32F2F] to-[#C62828]'
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our Track Record
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence in fire safety
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full mb-4 shadow-lg`}
                >
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  className="text-4xl md:text-5xl font-bold text-white mb-2"
                >
                  {stat.value}
                </motion.div>
                <p className="text-lg text-white/90">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
