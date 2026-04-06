import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Menu, ArrowRight, ShieldCheck, Sparkles, Baby, 
  BriefcaseMedical, Ruler, Smile, Microscope,
  Quote, Star, MessageCircle, Phone, Mail, Home, Flag
} from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 flex justify-between items-center ${
      isScrolled ? 'bg-surface/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="flex items-center gap-3">
        <Menu className="text-slate-900 cursor-pointer" size={24} />
        <span className="text-lg font-headline tracking-widest text-slate-900 uppercase">THE CLINICAL ATELIER</span>
      </div>
      <button className="bg-primary text-white px-6 py-2.5 text-xs font-bold tracking-widest rounded-sm hover:opacity-80 transition-all active:scale-95 duration-200 shadow-lg shadow-primary/10">
        BOOK NOW
      </button>
    </header>
  );
};

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <motion.img 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 0.9 }}
        transition={{ duration: 1.5 }}
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80"
        alt="Modern dental clinic"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent"></div>
    </div>
    
    <div className="relative z-10 max-w-2xl">
      <motion.span 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-secondary font-label text-xs tracking-[0.3em] uppercase mb-4 block"
      >
        Sharma Dental Clinic
      </motion.span>
      <motion.h1 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-5xl md:text-7xl font-headline text-primary leading-tight mb-6"
      >
        Your smile deserves <span className="italic font-normal">expert care.</span>
      </motion.h1>
      <motion.p 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="text-on-surface-variant text-lg leading-relaxed mb-8 max-w-md"
      >
        Modern dentistry in a calm, comfortable environment. From routine checkups to advanced cosmetic procedures.
      </motion.p>
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <a href="#booking" className="bg-primary text-on-primary px-8 py-4 text-sm font-bold tracking-widest text-center rounded-sm transition-all hover:shadow-2xl hover:-translate-y-1">
          BOOK APPOINTMENT
        </a>
        <a href="#services" className="flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-widest text-primary hover:bg-surface-container-low transition-colors group">
          OUR SERVICES <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
        </a>
      </motion.div>
    </div>
  </section>
);

const TrustBar = () => (
  <section className="bg-surface-container-low py-12 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
      {[
        { icon: <ShieldCheck size={24} />, title: "BDS + MDS Certified", subtitle: "Expertise you can trust" },
        { icon: <ShieldCheck size={24} />, title: "Sterilized & Safe", subtitle: "ISO Standard hygiene" },
        { icon: <Baby size={24} />, title: "Family & Kids Friendly", subtitle: "Gentle care for all ages" }
      ].map((item, index) => (
        <motion.div 
          key={index}
          whileInView={{ y: [20, 0], opacity: [0, 1] }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-white">
            {item.icon}
          </div>
          <div>
            <h4 className="font-bold text-sm text-primary">{item.title}</h4>
            <p className="text-xs text-on-surface-variant">{item.subtitle}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const Services = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto" id="services">
    <div className="flex flex-col items-center mb-16 text-center">
      <span className="text-tertiary-container font-label text-xs tracking-[0.3em] uppercase mb-4 px-4 py-1.5 bg-tertiary-fixed rounded-full">Excellence in Care</span>
      <h2 className="text-4xl md:text-5xl font-headline text-primary">Bespoke Oral Solutions</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <motion.div 
        whileHover={{ y: -10 }}
        className="md:col-span-2 bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-between group cursor-pointer hover:shadow-2xl transition-all duration-500 border border-outline-variant/5"
      >
        <div>
          <Sparkles className="text-4xl text-secondary mb-6" size={40} />
          <h3 className="text-2xl font-headline text-primary mb-4">Advanced Cosmetic Dentistry</h3>
          <p className="text-on-surface-variant max-w-md">Transform your appearance with our signature veneers and smile redesign protocols, executed with artistic precision.</p>
        </div>
        <div className="mt-12 flex justify-between items-end">
          <span className="text-xs font-bold tracking-widest text-primary group-hover:translate-x-2 transition-transform uppercase">Learn More —</span>
          <img className="w-32 h-32 object-cover rounded-lg opacity-80" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80" alt="Cosmetic result" />
        </div>
      </motion.div>

      <motion.div whileHover={{ scale: 1.02 }} className="bg-primary text-white p-8 rounded-xl flex flex-col justify-between hover:bg-primary-container transition-colors shadow-xl">
        <BriefcaseMedical className="text-secondary-container" size={40} />
        <div>
          <h3 className="text-xl font-headline mb-2">Root Canal Therapy</h3>
          <p className="text-on-primary-container text-sm">Painless, precision endodontics using the latest technology.</p>
        </div>
      </motion.div>

      <motion.div whileHover={{ scale: 1.02 }} className="bg-surface-container p-8 rounded-xl flex flex-col justify-between border border-outline-variant/10">
        <Ruler className="text-secondary" size={40} />
        <div>
          <h3 className="text-xl font-headline text-primary mb-2">Braces & Aligners</h3>
          <p className="text-on-surface-variant text-sm">Invisible solutions for a perfect alignment.</p>
        </div>
      </motion.div>

      <motion.div whileHover={{ scale: 1.02 }} className="bg-tertiary-fixed text-primary p-8 rounded-xl flex flex-col justify-between">
        <Smile size={40} />
        <div>
          <h3 className="text-xl font-headline mb-2">Kids Dentistry</h3>
          <p className="text-on-tertiary-fixed-variant text-sm">A warm, friendly environment for children.</p>
        </div>
      </motion.div>

      <motion.div whileHover={{ scale: 1.02 }} className="bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-between shadow-sm border border-outline-variant/10">
        <Microscope className="text-secondary" size={40} />
        <div>
          <h3 className="text-xl font-headline text-primary mb-2">Dental Implants</h3>
          <p className="text-on-surface-variant text-sm">Permanent, natural-looking tooth replacement.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section className="py-24 bg-surface-container-low relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
      <div className="w-full md:w-1/2 relative">
        <motion.div 
          whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
          viewport={{ once: true }}
          className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10"
        >
          <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80" alt="Dr. Priya Sharma" />
        </motion.div>
        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-tertiary-fixed rounded-2xl -z-10 hidden md:block"></div>
      </div>
      <div className="w-full md:w-1/2">
        <span className="text-secondary font-label text-xs tracking-[0.3em] uppercase mb-4 block">Meet Your Specialist</span>
        <h2 className="text-4xl font-headline text-primary mb-6 leading-tight">Dr. Priya Sharma</h2>
        <p className="text-on-surface-variant font-medium mb-6">BDS, MDS Prosthodontics | 15+ Years Experience</p>
        <div className="space-y-6 text-on-surface-variant text-lg italic leading-relaxed font-headline border-l-4 border-secondary pl-6 mb-8">
          "Dentistry is the delicate balance of scientific precision and the artistic vision of a beautiful smile."
        </div>
        <p className="text-on-surface-variant mb-8 leading-relaxed">
          Dr. Sharma specializes in advanced restorative and cosmetic procedures. She brings a wealth of clinical expertise combined with a gentle, patient-first philosophy.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 bg-surface-container-lowest rounded-lg border border-outline-variant/10 shadow-sm transition-all hover:shadow-md">
            <span className="block text-3xl font-bold text-primary">15+</span>
            <span className="text-xs uppercase tracking-widest text-on-surface-variant">Years Experience</span>
          </div>
          <div className="p-6 bg-surface-container-lowest rounded-lg border border-outline-variant/10 shadow-sm transition-all hover:shadow-md">
            <span className="block text-3xl font-bold text-primary">10k+</span>
            <span className="text-xs uppercase tracking-widest text-on-surface-variant">Happy Smiles</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Gallery = () => (
  <section className="py-24 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="text-secondary font-label text-xs tracking-[0.3em] uppercase mb-2 block">Our Work</span>
          <h2 className="text-4xl font-headline text-primary italic">Transformations</h2>
        </div>
        <p className="hidden md:block text-on-surface-variant max-w-xs text-right text-sm">Real patients, real results. A glimpse into artistic excellence.</p>
      </div>
      <div className="flex gap-6 overflow-x-auto no-scrollbar pb-8 snap-x">
        {[
          { img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80", label: "Smile Makeover" },
          { img: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80", label: "Teeth Whitening" },
          { img: "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80", label: "Veneers" }
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.02 }}
            className="min-w-[300px] md:min-w-[400px] snap-center cursor-pointer"
          >
            <div className="aspect-square bg-surface-container-low rounded-xl overflow-hidden mb-4 relative shadow-lg">
              <img className="w-full h-full object-cover" src={item.img} alt={item.label} />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <span className="text-[10px] font-bold tracking-widest uppercase">{item.label}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-primary text-white" id="reviews">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-headline mb-16">Kind Words from Patients</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
        {[
          { name: "Rahul Kapoor", role: "Entrepreneur", text: "The most painless root canal I've ever had. Dr. Sharma explains everything so calmly. The clinic feels more like a spa." },
          { name: "Sunita Agarwal", role: "Creative Director", text: "I finally have the confidence to smile. The veneer work done here is world-class. Thank you team!" }
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileInView={{ opacity: [0, 1], x: [i === 0 ? -20 : 20, 0] }}
            viewport={{ once: true }}
            className="bg-primary-container p-10 rounded-2xl relative shadow-2xl"
          >
            <Quote className="text-tertiary-fixed absolute -top-4 -left-4" size={48} />
            <div className="flex gap-1 mb-6 text-tertiary-fixed">
              {[...Array(5)].map((_, j) => <Star key={j} fill="currentColor" size={20} />)}
            </div>
            <p className="text-xl font-headline mb-8 leading-relaxed italic">"{item.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center text-primary font-bold text-lg">
                {item.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h4 className="font-bold text-sm">{item.name}</h4>
                <p className="text-xs text-on-primary-container">{item.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const BookingSection = () => (
  <section className="py-24 px-6 bg-surface-container-lowest" id="booking">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
      <div className="w-full md:w-1/2">
        <span className="text-secondary font-label text-xs tracking-[0.3em] uppercase mb-4 block">Reservation</span>
        <h2 className="text-4xl font-headline text-primary mb-8">Secure Your Visit</h2>
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <input className="w-full border-b border-outline-variant/40 bg-transparent py-4 focus:outline-none focus:border-secondary transition-all font-label placeholder:text-on-surface-variant/50" placeholder="Full Name" type="text"/>
          <input className="w-full border-b border-outline-variant/40 bg-transparent py-4 focus:outline-none focus:border-secondary transition-all font-label placeholder:text-on-surface-variant/50" placeholder="Phone Number" type="tel"/>
          <div className="grid grid-cols-2 gap-4">
            <select className="w-full border-b border-outline-variant/40 bg-transparent py-4 focus:outline-none focus:border-secondary transition-all font-label text-on-surface-variant appearance-none">
              <option>Select Service</option>
              <option>General Checkup</option>
              <option>Cosmetic Dentistry</option>
            </select>
            <input className="w-full border-b border-outline-variant/40 bg-transparent py-4 focus:outline-none focus:border-secondary transition-all font-label text-on-surface-variant" type="date"/>
          </div>
          <button className="w-full bg-primary text-white py-5 font-bold tracking-[0.2em] rounded-sm hover:opacity-90 hover:scale-[0.99] transition-all uppercase text-xs shadow-xl shadow-primary/20">
            Confirm Appointment
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center bg-surface-container-low p-10 rounded-2xl border border-outline-variant/10">
        <h3 className="text-2xl font-headline text-primary mb-6 italic">Quick Contact</h3>
        <p className="text-on-surface-variant mb-8 text-sm leading-relaxed">Have a dental emergency? Reach out via WhatsApp for instant support.</p>
        <motion.a 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-green-500/20" 
          href="#"
        >
          <MessageCircle size={20} /> MESSAGE ON WHATSAPP
        </motion.a>
        <div className="mt-10 space-y-6">
          <div className="flex items-center gap-4 text-on-surface-variant hover:text-secondary transition-colors cursor-pointer">
            <Phone size={20} /> <span className="font-medium">+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-4 text-on-surface-variant hover:text-secondary transition-colors cursor-pointer">
            <Mail size={20} /> <span className="font-medium">care@sharmadental.clinic</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full pt-20 pb-32 bg-slate-950 flex flex-col items-center text-center px-8">
    <span className="text-2xl font-headline text-white tracking-[0.3em] mb-12">THE CLINICAL ATELIER</span>
    <div className="flex gap-12 mb-16">
      {['Privacy', 'Terms', 'Accessibility'].map(item => (
        <a key={item} className="text-slate-500 hover:text-white transition-all text-xs tracking-widest uppercase" href="#">{item}</a>
      ))}
    </div>
    <p className="text-slate-600 text-[10px] tracking-[0.4em] uppercase">© 2024 THE CLINICAL ATELIER. CRAFTING EXCELLENCE.</p>
  </footer>
);

export default function App() {
  return (
    <div className="selection:bg-primary-container selection:text-white">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <BookingSection />
      </main>
      <Footer />
      
      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full h-20 bg-surface/90 backdrop-blur-xl flex justify-around items-center px-4 pb-2 z-50 border-t border-outline-variant/10">
        <motion.a whileTap={{ scale: 0.9 }} className="flex flex-col items-center justify-center bg-primary text-white rounded-full w-12 h-12 shadow-lg" href="#">
          <Home size={20} />
        </motion.a>
        <a className="flex flex-col items-center justify-center text-slate-400" href="#services">
          <BriefcaseMedical size={20} />
          <span className="text-[10px] uppercase font-bold mt-1">Services</span>
        </a>
        <a className="flex flex-col items-center justify-center text-slate-400" href="#reviews">
          <Star size={20} />
          <span className="text-[10px] uppercase font-bold mt-1">Reviews</span>
        </a>
        <a className="flex flex-col items-center justify-center text-slate-400" href="#booking">
          <Flag size={20} />
          <span className="text-[10px] uppercase font-bold mt-1">Booking</span>
        </a>
      </nav>
    </div>
  );
}
