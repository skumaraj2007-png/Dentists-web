import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Patient',
    content: 'I used to be terrified of the dentist, but the team at Lumina Dental made me feel so at ease. The procedure was completely painless!',
    image: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    name: 'Michael Chen',
    role: 'Patient',
    content: 'The results of my teeth whitening were incredible. I can\'t stop smiling! Professional staff and a beautiful clinic.',
    image: 'https://i.pravatar.cc/150?u=michael',
  },
  {
    name: 'Emily Davis',
    role: 'Patient',
    content: 'Best dental clinic in the city. They explained everything clearly and the technology they use is top-notch.',
    image: 'https://i.pravatar.cc/150?u=emily',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-emerald-900 text-white overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 border-4 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-white rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-3"
          >
            Patient Stories
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold mb-4"
          >
            What Our Patients Say
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-[32px] border border-white/10 flex flex-col h-full"
            >
              <div className="mb-6">
                <Quote className="w-10 h-10 text-emerald-400 mb-4 opacity-50" />
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                  ))}
                </div>
                <p className="text-lg leading-relaxed text-emerald-50 italic">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="mt-auto flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-emerald-400"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-emerald-300">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
