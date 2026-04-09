import { motion } from 'framer-motion';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import React from 'react';
// 1. Import Formspree components
import { useForm, ValidationError } from '@formspree/react';

interface ContactProps {
  darkMode: boolean;
}

export function Contact({ darkMode }: ContactProps) {
  // 2. Initialize Formspree with your ID
  const [state, handleSubmit] = useForm("mlgoklqd");

  // Success State UI
  if (state.succeeded) {
    return (
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }}
            className={`p-12 rounded-xl inline-block ${darkMode ? 'bg-gray-800' : 'bg-white shadow-xl'}`}
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Message Sent!</h2>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Thank you, Trishu Enterprize will get back to you shortly.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-6 text-[#E53935] font-bold hover:underline"
            >
              Send another message
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Get In Touch
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Have questions? We're here to help. Contact us for a free consultation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information (Static Content) */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className={`p-6 rounded-xl mb-6 border-2 border-[#E53935] ${darkMode ? 'bg-gray-800/50' : 'bg-red-50'}`}>
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-6 h-6 text-[#E53935]" />
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Emergency Hotline</h3>
              </div>
              <p className="text-3xl font-bold text-[#E53935] mb-2">1-800-FIRE-911</p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Available 24/7 for emergency situations</p>
            </div>

            <div className="space-y-6">
              <ContactDetail icon={<Phone />} title="Phone" detail="7039517478" darkMode={darkMode} />
              <ContactDetail icon={<Mail />} title="Email" detail="trishufireeterprise@gmail.com" darkMode={darkMode} />
              <ContactDetail icon={<MapPin />} title="Address" detail="Malad West Mumbai 400 095" darkMode={darkMode} />
              <ContactDetail icon={<Clock />} title="Business Hours" detail="Mon - Sat: 10:00 AM - 6:00 PM" darkMode={darkMode} />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white shadow-xl'}`}
          >
            {/* 3. Use Formspree's handleSubmit */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="full-name" className={`block mb-2 font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Full Name</label>
                <input
                  type="text"
                  id="full-name"
                  name="name" // Important: Formspree uses the name attribute
                  required
                  className={inputClass(darkMode)}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className={`block mb-2 font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={inputClass(darkMode)}
                  placeholder="john@example.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>

              <div>
                <label htmlFor="phone" className={`block mb-2 font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className={inputClass(darkMode)}
                  placeholder="7039517478"
                />
              </div>

              <div>
                <label htmlFor="message" className={`block mb-2 font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className={`${inputClass(darkMode)} resize-none`}
                  placeholder="Tell us about your fire safety needs..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-gradient-to-r from-[#E53935] to-[#FF7043] text-white py-4 rounded-lg hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 font-medium disabled:opacity-50"
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Helper Components & Styles ---

function ContactDetail({ icon, title, detail, darkMode }: { icon: React.ReactNode, title: string, detail: string, darkMode: boolean }) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-gradient-to-br from-[#E53935] to-[#FF7043] p-3 rounded-lg text-white">
        {React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6' })}
      </div>
      <div>
        <h3 className={`font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
        <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{detail}</p>
      </div>
    </div>
  );
}

const inputClass = (darkMode: boolean) => `
  w-full px-4 py-3 rounded-lg border transition-all focus:ring-2 focus:ring-[#E53935] focus:border-transparent
  ${darkMode ? 'bg-gray-900 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'}
`;