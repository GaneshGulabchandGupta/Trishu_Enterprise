import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface TestimonialsProps {
  darkMode: boolean;
}

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Property Manager',
    image: 'https://images.unsplash.com/photo-1655249481446-25d575f1c054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NTU1MjM4MHww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5,
    text: 'FireGuard Pro installed fire alarm systems across all our properties. Their professionalism and attention to detail exceeded our expectations. Highly recommended!',
  },
  {
    name: 'Michael Chen',
    role: 'Business Owner',
    image: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NTU1MjM4MHww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5,
    text: 'The 24/7 monitoring service gives me peace of mind. When our alarm triggered, they responded within minutes. Excellent service all around.',
  },
  {
    name: 'Emma Williams',
    role: 'Facility Director',
    image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NTU1MjM4MHww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5,
    text: 'We have been working with FireGuard Pro for 3 years now. Their maintenance service is top-notch, and their team is always professional and knowledgeable.',
  },
];

export function Testimonials({ darkMode }: TestimonialsProps) {
  return (
    <section
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
            What Our Clients Say
          </h2>
          <p
            className={`text-lg ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            } max-w-2xl mx-auto`}
          >
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-6 rounded-xl relative ${
                darkMode
                  ? 'bg-gray-900 border border-gray-700'
                  : 'bg-gray-50 shadow-lg'
              }`}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[#E53935]/20" />

              <div className="flex items-center gap-4 mb-4">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3
                    className={`font-bold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {testimonial.name}
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#FF7043] text-[#FF7043]"
                  />
                ))}
              </div>

              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
