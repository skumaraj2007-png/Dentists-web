import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800&h=1000"
                alt="Our Dentist"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-600 rounded-full -z-10 opacity-10" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 border-2 border-emerald-200 rounded-full -z-10" />
            
            <div className="absolute bottom-8 right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]">
              <p className="text-3xl font-bold text-emerald-600 mb-1">15+</p>
              <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Years of Excellence</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">About Our Clinic</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Providing Personalized Dental Care Since 2008
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At Lumina Dental, we believe that every patient deserves a healthy, beautiful smile. Our team of experts is dedicated to providing high-quality dental services in a comfortable and friendly environment.
            </p>

            <div className="space-y-4 mb-10">
              {[
                'State-of-the-art dental technology',
                'Highly experienced and friendly staff',
                'Personalized treatment plans',
                'Comfortable and relaxing environment',
                'Flexible scheduling and financing options',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-800 transition-all shadow-lg">
              Meet Our Team
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
