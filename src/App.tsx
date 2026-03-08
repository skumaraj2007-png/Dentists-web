/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import AppointmentForm from './components/AppointmentForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <AppointmentForm />
      </main>
      <Footer />
    </div>
  );
}
