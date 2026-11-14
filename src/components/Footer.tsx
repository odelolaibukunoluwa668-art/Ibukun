import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-[#233038] text-white py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <Link
              to="/"
              className="font-headline font-black text-3xl tracking-tighter mb-6 block"
            >
              PROSPIRA
            </Link>
            <p className="text-white/60 mb-8 max-w-xs leading-relaxed text-sm">
              A premium digital agency specializing in high-performance websites, applications,
              and future-forward digital products.
            </p>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/services" className="text-white/60 hover:text-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/60 hover:text-primary transition-colors">
                  Mobile Applications
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/60 hover:text-primary transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/60 hover:text-primary transition-colors">
                  SaaS Platforms
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/60 hover:text-primary transition-colors">
                  Game Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/60 hover:text-primary transition-colors">
                  AI Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-6">Agency</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/portfolio" className="text-white/60 hover:text-primary transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/60 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-white/60 hover:text-primary transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/60 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/60 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-white/60 mb-4 text-sm leading-relaxed">
              Stay updated with our latest insights and projects.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-primary bg-primary/10 border border-primary/20 rounded-lg p-3 text-sm font-medium">
                <CheckCircle2 size={18} />
                <span>Subscribed! Thank you for joining.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="Email Address"
                    required
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 flex-grow focus:outline-none focus:border-primary transition-colors text-white text-sm"
                  />
                  <button
                    type="submit"
                    className="bg-primary text-white p-2.5 rounded-lg hover:bg-primary/90 transition-colors shrink-0 interactive"
                    aria-label="Subscribe"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
                {error && <p className="text-destructive text-xs">{error}</p>}
              </form>
            )}
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© 2026 Team Prospira. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/about" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/about" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
