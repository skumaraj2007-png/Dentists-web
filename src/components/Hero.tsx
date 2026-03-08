import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-emerald-50/50 rounded-bl-[100px]" />
      <div className="absolute top-1/4 left-0 -z-10 w-64 h-64 bg-emerald-100/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Star className="w-3 h-3 fill-current" />
              Top Rated Dental Clinic in the City
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
              Your Smile, Our <span className="text-emerald-600">Masterpiece.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Experience world-class dental care with a gentle touch. We combine advanced technology with a patient-first approach to give you the smile you've always dreamed of.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Book Your Visit
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-50 transition-all shadow-sm"
              >
                View Services
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-slate-700">Safe & Sterile</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-slate-700">24/7 Support</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800&h=1000"
                alt="Modern Dental Clinic"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[240px]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?u=${i}`}
                      className="w-8 h-8 rounded-full border-2 border-white"
                      alt="Patient"
                    />
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-400">+500 Happy Patients</span>
              </div>
              <p className="text-sm font-semibold text-slate-900 italic">
                "The best dental experience I've ever had. Truly painless!"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
