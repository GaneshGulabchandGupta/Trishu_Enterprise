import { motion } from 'motion/react';
import { ArrowRight, Phone, Shield, Clock, Award, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface HeroProps {
  darkMode: boolean;
}

export function Hero({ darkMode }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1771432998363-0b78f8ee339a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZyUyMHNreWxpbmUlMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzU1NzQxNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Modern Building Protection"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div
          className={`absolute inset-0 ${
            darkMode
              ? 'bg-gradient-to-br from-gray-900/98 via-[#E53935]/20 to-gray-900/95'
              : 'bg-gradient-to-br from-gray-900/95 via-[#E53935]/25 to-gray-900/90'
          }`}
        />

        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#E53935]/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#FF7043]/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E53935]/20 to-[#FF7043]/20 backdrop-blur-sm border border-[#E53935]/30 px-5 py-2.5 rounded-full mb-6"
            >
              <Shield className="w-4 h-4 text-[#FF7043]" />
              <span className="text-white font-medium">
                Trusted by 500+ Businesses Nationwide
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Protect Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E53935] to-[#FF7043]">
                Home & Business
              </span>{' '}
              from Fire Hazards
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Advanced Fire Alarm Systems with 24/7 Emergency Monitoring. We deliver cutting-edge fire
              safety solutions backed by certified technicians and lightning-fast response times.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="group bg-gradient-to-r from-[#E53935] to-[#FF7043] text-white px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-[#E53935]/50 hover:scale-105 transition-all flex items-center justify-center gap-2 font-semibold"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all flex items-center justify-center gap-2 font-semibold"
              >
                <Phone className="w-5 h-5" />
                Emergency: (555) 123-4567
              </button>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: CheckCircle, text: 'Certified & Licensed' },
                { icon: Clock, text: '24/7 Support' },
                { icon: Award, text: '10+ Years Experience' },
                { icon: Shield, text: 'Full Warranty' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-gradient-to-br from-[#E53935]/20 to-[#FF7043]/20 p-2 rounded-lg">
                    <item.icon className="w-5 h-5 text-[#FF7043]" />
                  </div>
                  <span className="text-white font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:grid grid-cols-2 gap-6"
          >
            {[
              { number: '1000+', label: 'Successful Installations', color: 'from-[#E53935] to-[#FF7043]' },
              { number: '500+', label: 'Happy Clients', color: 'from-[#FF7043] to-[#E53935]' },
              { number: '24/7', label: 'Emergency Response', color: 'from-[#E53935] to-[#FF7043]' },
              { number: '99.9%', label: 'Uptime Guarantee', color: 'from-[#FF7043] to-[#E53935]' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-gradient-to-br ${stat.color} p-[2px] rounded-2xl`}
              >
                <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-900/90'} backdrop-blur-xl p-6 rounded-2xl h-full`}>
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} text-transparent bg-clip-text mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2 cursor-pointer"
          onClick={() => scrollToSection('services')}
        >
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
