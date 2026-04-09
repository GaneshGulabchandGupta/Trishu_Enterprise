import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface ProductsProps {
  darkMode: boolean;
}

const products = [
  {
    name: 'Fire Alarm Control Panel',
    image:
      'https://images.unsplash.com/photo-1754494977436-a5c202306fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxmaXJlJTIwYWxhcm0lMjBzeXN0ZW0lMjBtb2Rlcm4lMjBidWlsZGluZ3xlbnwxfHx8fDE3NzU1NzMyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    specs: 'Advanced monitoring • Multi-zone control • Network-ready',
    price: 'From $1,299',
  },
  {
    name: 'Smart Smoke Detector',
    image:
      'https://images.unsplash.com/photo-1585367437379-e0b71bb18156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzbW9rZSUyMGRldGVjdG9yJTIwc2FmZXR5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc3NTU3MzI5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    specs: 'Wireless connectivity • Mobile alerts • Battery backup',
    price: 'From $149',
  },
  {
    name: 'Heat Sensor System',
    image:
      'https://images.unsplash.com/photo-1665655034446-1536f6de3fe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzbW9rZSUyMGRldGVjdG9yJTIwc2FmZXR5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc3NTU3MzI5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    specs: 'Temperature monitoring • Fast response • Industrial-grade',
    price: 'From $299',
  },
  {
    name: 'Emergency Alert System',
    image:
      'https://images.unsplash.com/photo-1574064565163-af7a987a1490?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxzbW9rZSUyMGRldGVjdG9yJTIwc2FmZXR5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc3NTU3MzI5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    specs: 'Loud alarm • Strobe light • ADA compliant',
    price: 'From $199',
  },
];

export function Products({ darkMode }: ProductsProps) {
  return (
    <section
      id="products"
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
            Our Products
          </h2>
          <p
            className={`text-lg ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            } max-w-2xl mx-auto`}
          >
            Industry-leading fire safety equipment for complete protection
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group rounded-xl overflow-hidden transition-all hover:scale-105 cursor-pointer ${
                darkMode
                  ? 'bg-gray-900 border border-gray-700'
                  : 'bg-gray-50 hover:shadow-xl'
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-6">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {product.name}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {product.specs}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[#E53935] font-bold text-lg">
                    {product.price}
                  </span>
                  <button className="flex items-center gap-2 text-[#E53935] hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
