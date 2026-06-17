import { useState, useEffect } from 'react';
import siteBgImg from './assets/image_1944fb.jpg';
import tucandelaImg from './assets/tucandelaw.jpeg';
import cantaCorazonImg from './assets/canta_corazon.jpeg';
import luxuryFleetImg from './assets/dispatch1.jpg';
import electric23Img from './assets/electric23.png';
import hiyaImg from './assets/hiya.jpeg';
import newLocationImg from './assets/newlocation.png';
import logoNewImg from './assets/platinunlogo.png';
import {
  Menu,
  X,
  Crown,
  QrCode,
  Settings,
  ChevronRight,
  Phone,
  MapPin,
  MessageCircle,
  Instagram,
  Users,
  Award,
  Target,
  Heart,
  Sparkles,
} from 'lucide-react';

// Modal Component
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-dark-100">
          <h2 className="text-2xl font-bold text-dark-900">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-dark-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

// Job Application Form
function JobApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const get = (id: string) =>
      (form.querySelector(`#${id}`) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null)?.value || '';

    const firstName = get('appFirstName');
    const lastName = get('appLastName');
    const email = get('appEmail');
    const phone = get('appPhone');
    const position = get('position');
    const experience = get('experience');
    const about = get('about');

    const availability = Array.from(
      form.querySelectorAll<HTMLInputElement>('input[name="availability"]:checked')
    )
      .map((el) => el.value)
      .join(', ');

    const message =
      `New Job Application - Platinum Parking Service%0A%0A` +
      `Name: ${firstName} ${lastName}%0A` +
      `Email: ${email}%0A` +
      `Phone: ${phone}%0A` +
      `Position: ${position}%0A` +
      `Experience: ${experience}%0A` +
      `Availability: ${availability}%0A` +
      `About: ${about}`;

    window.open(`https://wa.me/15614927279?text=${message}`, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Users className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-dark-900 mb-2">Application Submitted</h3>
        <p className="text-dark-600">Your application has been sent to us via WhatsApp. We'll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="appFirstName" className="block text-sm font-medium text-dark-700 mb-1">
            First Name *
          </label>
          <input
            type="text"
            id="appFirstName"
            required
            className="input-field"
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="appLastName" className="block text-sm font-medium text-dark-700 mb-1">
            Last Name *
          </label>
          <input
            type="text"
            id="appLastName"
            required
            className="input-field"
            placeholder="Smith"
          />
        </div>
      </div>
      <div>
        <label htmlFor="appEmail" className="block text-sm font-medium text-dark-700 mb-1">
          Email Address *
        </label>
        <input
          type="email"
          id="appEmail"
          required
          className="input-field"
          placeholder="you@email.com"
        />
      </div>
      <div>
        <label htmlFor="appPhone" className="block text-sm font-medium text-dark-700 mb-1">
          Phone Number *
        </label>
        <input
          type="tel"
          id="appPhone"
          required
          className="input-field"
          placeholder="+1 (555) 000-0000"
        />
      </div>
      <div>
        <label htmlFor="position" className="block text-sm font-medium text-dark-700 mb-1">
          Position of Interest *
        </label>
        <select id="position" required className="input-field">
          <option value="">Select position...</option>
          <option value="operations">Operations Manager</option>
          <option value="attendant">Parking Attendant</option>
          <option value="supervisor">Shift Supervisor</option>
          <option value="valet">Valet Driver</option>
          <option value="admin">Administrative Support</option>
          <option value="tech">Technical Support</option>
        </select>
      </div>
      <div>
        <label htmlFor="experience" className="block text-sm font-medium text-dark-700 mb-1">
          Years of Experience
        </label>
        <select id="experience" className="input-field">
          <option value="">Select...</option>
          <option value="0-1">Less than 1 year</option>
          <option value="1-3">1-3 years</option>
          <option value="3-5">3-5 years</option>
          <option value="5+">5+ years</option>
        </select>
      </div>
      <div>
        <label htmlFor="availability" className="block text-sm font-medium text-dark-700 mb-1">
          Availability
        </label>
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center">
            <input type="checkbox" name="availability" value="Full-time" className="mr-2 rounded border-dark-200 text-primary-800 focus:ring-primary-500" />
            <span className="text-sm text-dark-700">Full-time</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="availability" value="Part-time" className="mr-2 rounded border-dark-200 text-primary-800 focus:ring-primary-500" />
            <span className="text-sm text-dark-700">Part-time</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="availability" value="Weekends" className="mr-2 rounded border-dark-200 text-primary-800 focus:ring-primary-500" />
            <span className="text-sm text-dark-700">Weekends</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="availability" value="Events" className="mr-2 rounded border-dark-200 text-primary-800 focus:ring-primary-500" />
            <span className="text-sm text-dark-700">Events</span>
          </label>
        </div>
      </div>
      <div>
        <label htmlFor="about" className="block text-sm font-medium text-dark-700 mb-1">
          Why do you want to join Platinum?
        </label>
        <textarea
          id="about"
          rows={3}
          className="input-field resize-none"
          placeholder="Tell us about yourself and your interest in parking operations..."
        />
      </div>
      <button type="submit" className="btn-primary w-full">
        Submit Application
        <ChevronRight className="w-4 h-4 ml-2" />
      </button>
    </form>
  );
}

// Navbar
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#promise', label: 'Our Promise' },
    { href: '#gallery', label: 'Gallery' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Premium Reemplazado */}
          <a href="#" className="flex items-center">
            <img 
                src={logoNewImg}
                alt="Platinum Parking Service Logo"
                className="h-14 sm:h-16 w-auto max-w-[260px] sm:max-w-[340px] object-contain rounded-lg"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  scrolled
                    ? 'text-dark-700 hover:text-primary-800'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${
              scrolled ? 'text-dark-900 hover:bg-dark-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-2xl shadow-xl mt-2 p-4 animate-slide-down">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-dark-700 hover:text-primary-800 hover:bg-dark-50 rounded-lg font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function Hero({ onJoinTeam }: { onJoinTeam: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-400/15 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8">
            <Crown className="w-4 h-4 mr-2 text-[#c9a14a]" />
            Trusted by Florida's Premier Venues
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Bank-Level Parking
            <br />
            <span className="text-primary-300">Logistics in Florida</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            Elite parking management solutions engineered for stadiums, hotels, hospitals, and
            high-traffic venues. Zero apps required. Total operational control.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#promise" className="btn-primary w-full sm:w-auto">
              <Crown className="w-5 h-5 mr-2" />
              Our Promise
            </a>
            <button onClick={onJoinTeam} className="btn-secondary w-full sm:w-auto">
              <Users className="w-5 h-5 mr-2" />
              Join Our Team
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

// About Section
function About() {
  const features = [
    {
      icon: Crown,
      title: 'Total Digital Control',
      description:
        'Real-time monitoring, sophisticated analytics, and complete operational oversight across all your parking assets.',
    },
    {
      icon: QrCode,
      title: 'Zero-App Ecosystem',
      description:
        'Seamless operations without requiring customers to download apps. QR codes, SMS, and license plate technology.',
    },
    {
      icon: Settings,
      title: 'Elite Operations',
      description:
        'Trained professionals delivering premium service. Staff excellence meets cutting-edge technology.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            Why <span className="text-primary-300">Elite Venues</span> Choose Us
          </h2>
          <p className="section-subtitle">
            Combining decades of operational expertise with next-generation technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card p-8 text-center group"
            >
              <div className="w-16 h-16 bg-primary-800/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-800 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-primary-800 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-3">{feature.title}</h3>
              <p className="text-dark-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Brand Promise Section
function BrandPromise() {
  const pillars = [
    {
      icon: Award,
      title: 'Uncompromising Standards',
      description: 'Every interaction reflects our commitment to elite service. Our professionals represent the gold standard in parking operations.',
    },
    {
      icon: Target,
      title: 'Precision Operations',
      description: 'Military-grade logistics meet hospitality excellence. We execute flawlessly, venue after venue, event after event.',
    },
    {
      icon: Heart,
      title: 'Guest-First Philosophy',
      description: 'Every guest experience matters. We transform routine parking into a premium touchpoint that elevates your brand.',
    },
    {
      icon: Sparkles,
      title: 'Continuous Innovation',
      description: 'Never settling. Always improving. We pioneer solutions that set industry benchmarks across Florida.',
    },
  ];

  return (
    <section id="promise" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary-800/10 rounded-bl-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm font-semibold mb-6">
            <Crown className="w-4 h-4 mr-2 text-[#c9a14a]" />
            Our Commitment
          </div>
          <h2 className="section-title mb-4">
            The <span className="text-primary-300">Platinum Promise</span>
          </h2>
          <p className="section-subtitle">
            Excellent is not an act, but a habit. This is our commitment to every venue, every guest, every day.
          </p>
        </div>

        <div className="relative mb-16 md:mb-20">
          <div className="aspect-[21/9] bg-gradient-to-br from-primary-800 via-primary-900 to-dark-950 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>
            <img
              src={logoNewImg}
              alt="Platinum Parking Service Logo"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-black/50" />
            <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary-400/30 rounded-full blur-2xl" />
            <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-primary-300/20 rounded-full blur-3xl" />

            <div className="absolute inset-x-0 top-0 flex items-start justify-center pt-4 md:pt-6">
              <div className="text-center px-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#e5e4e2] mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  Elite Service. Every Space. Every Time.
                </h3>
                <p className="text-[#c9a14a] text-sm md:text-base max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  Setting the platinum standard for parking operations across Florida's most prestigious venues since day one.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-primary-800/80 hover:border-primary-600 transition-all duration-500"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5 border border-white/30 group-hover:bg-white/30 transition-colors duration-500">
                <pillar.icon className="w-6 h-6 text-white transition-colors duration-500" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                {pillar.title}
              </h4>
              <p className="text-white/75 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-16 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '100%', label: 'Commitment' },
              { value: '24/7', label: 'Operations' },
              { value: 'Florida', label: 'Statewide' },
              { value: 'Elite', label: 'Standards' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 drop-shadow">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact CTA Section
function ContactCTA({
  onJoinTeam,
}: {
  onJoinTeam: () => void;
}) {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-title mb-4">
            Ready to <span className="text-primary-300">Experience Excellence</span>?
          </h2>
          <p className="section-subtitle mb-8">
            Connect with Florida's premier parking operations team.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button onClick={onJoinTeam} className="btn-primary w-full sm:w-auto">
              <Users className="w-5 h-5 mr-2" />
              Join Our Team
            </button>
            <a
              href="https://wa.me/15614927279"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get In Touch
            </a>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <div className="h-px w-12 bg-white/30" />
            <Crown className="w-5 h-5 text-[#c9a14a]" />
            <div className="h-px w-12 bg-white/30" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Gallery Section
function Gallery() {
  const galleryItems = [
    { img: tucandelaImg,    title: 'Tucandela Wynwood',       category: 'Nightlife' },
    { img: cantaCorazonImg, title: 'Canta Corazon',           category: 'Dining & Events' },
    { img: luxuryFleetImg,  title: 'Luxury Fleet Management', category: 'Valet' },
    { img: electric23Img,   title: 'Electric 23',              category: 'Entertainment' },
    { img: hiyaImg,         title: 'HIYAKAWA VALET',           category: 'Hospitality' },
    { img: newLocationImg,  title: 'PLATINUM VALET - COMING SOON',  category: 'Hospitality' },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            Operations <span className="text-primary-300">Showcase</span>
          </h2>
          <p className="section-subtitle">
            Deploying excellence at Florida's most demanding venues.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-dark-900"
            >
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-dark-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-primary-800 text-white text-xs font-medium rounded-full mb-2">
                  {item.category}
                </span>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// Footer
function Footer() {
  return (
    <footer className="bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img
                src={logoNewImg}
                alt="Platinum Parking Service Logo"
                className="h-12 w-auto max-w-[200px] object-contain"
              />
            </div>
            <p className="text-dark-400 mb-6 max-w-md leading-relaxed">
              Bank-level parking logistics and elite operations management for Florida's premier
              venues. Excellence in every space.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/platinumparkingservice"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center hover:bg-primary-800 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/15614927279"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center hover:bg-primary-800 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Services', 'Gallery', 'Careers'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-dark-400 hover:text-primary-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-dark-400">
                  Miami, FL
                  <br />
                  Serving statewide
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="tel:+15614927279" className="text-dark-400 hover:text-primary-400 transition-colors">
                  +1 (561) 492-7279
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href="https://wa.me/15614927279"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-400 hover:text-primary-400 transition-colors"
                >
                  WhatsApp: +1 (561) 492-7279
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar con tus créditos fijos comerciales - ACTUALIZADO MANUAL */}
        <div className="border-t border-dark-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-dark-500 text-sm space-y-1">
            <p>&copy; 2026 Platinum Parking Service LLC. All rights reserved.</p>
            <p className="text-xs text-dark-600">Managed by Kingdom Connect VIP / DHSKNG Studio</p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-dark-500 hover:text-primary-400 text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App
function App() {
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);

  return (
    <div className="min-h-screen relative">
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${siteBgImg})` }}
      />
      <div className="fixed inset-0 -z-10 bg-black/60" />
      <Navbar />
      <Hero onJoinTeam={() => setIsJobModalOpen(true)} />
      <About />
      <BrandPromise />
      <Gallery />
      <ContactCTA onJoinTeam={() => setIsJobModalOpen(true)} />
      <Footer />

      <Modal isOpen={isJobModalOpen} onClose={() => setIsJobModalOpen(false)} title="Join Our Team">
        <JobApplicationForm />
      </Modal>
    </div>
  );
}

export default App;
