import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Shield, 
  Activity, 
  HeartPulse, 
  Stethoscope, 
  Smile 
} from 'lucide-react';

const services = [
  {
    title: 'General Dentistry',
    description: 'Routine checkups, cleanings, and preventative care for all ages.',
    icon: Stethoscope,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Teeth whitening, veneers, and smile makeovers to boost your confidence.',
    icon: Sparkles,
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Dental Implants',
    description: 'Permanent, natural-looking solutions for missing teeth.',
    icon: Activity,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'Orthodontics',
    description: 'Braces and clear aligners to perfectly align your smile.',
    icon: Smile,
    color: 'bg-orange-50 text-orange-600',
  },
  {
    title: 'Emergency Care',
    description: 'Immediate assistance for dental pain, broken teeth, and more.',
    icon: HeartPulse,
    color: 'bg-red-50 text-red-600',
  },
  {
    title: 'Oral Surgery',
    description: 'Expert surgical procedures including wisdom teeth extraction.',
    icon: Shield,
    color: 'bg-indigo-50 text-indigo-600',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3"
          >
            Our Expertise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Comprehensive Dental Services
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto"
          >
            We offer a wide range of dental treatments tailored to your unique needs, using the latest technology and techniques.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:gap-3 transition-all">
                Learn More
                <Activity className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
