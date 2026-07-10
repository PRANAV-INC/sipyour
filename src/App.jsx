import React from 'react';

const stats = [
  { value: '99.99%', label: 'Pure & Safe' },
  { value: '24/7', label: 'Fresh Supply' },
  { value: '100+', label: 'Cities Served' },
];

const features = [
  'Advanced purification process',
  'Eco-friendly packaging',
  'Trusted by homes and businesses',
];

const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow'];

const socialLinks = [
  { name: 'Facebook', icon: '📘', url: '#' },
  { name: 'Instagram', icon: '📷', url: '#' },
  { name: 'Twitter', icon: '𝕏', url: '#' },
  { name: 'YouTube', icon: '▶️', url: '#' },
];

function App() {
  const [selectedCity, setSelectedCity] = React.useState('Mumbai');

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.2),_transparent_35%),linear-gradient(135deg,_#020617,_#111827)] text-slate-100">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <div>
          <p className="text-2xl font-black tracking-[0.3em] text-cyan-300">SIPYOUR</p>
          <p className="text-sm text-slate-400">Pure water, redefined</p>
        </div>
        <div className="flex items-center gap-6">
          <select 
            value={selectedCity} 
            onChange={(e) => setSelectedCity(e.target.value)}
            className="rounded-lg border border-cyan-400/30 bg-slate-900/80 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
          >
            {cities.map((city) => (
              <option key={city} value={city} className="bg-slate-950 text-white">
                {city}
              </option>
            ))}
          </select>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-cyan-300">About</a>
            <a href="#products" className="transition hover:text-cyan-300">Products</a>
            <a href="#contact" className="transition hover:text-cyan-300">Contact</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-10 px-6 pb-16 lg:px-8">
        <section className="grid items-center gap-10 rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-glow backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
          <div>
            <p className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200">
              Refreshing purity in every sip
            </p>
            <h1 className="max-w-2xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              The trusted taste of pure water for every home and every journey.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-300">
              SipYour brings you crystal-clear, mineral-balanced hydration with a premium feel that fits your everyday life.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#products" className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
                Explore Products
              </a>
              <a href="#about" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200">
                Learn More
              </a>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-cyan-400/20 bg-slate-950/70 p-6">
            <div className="rounded-[1.25rem] border border-white/10 bg-gradient-to-br from-cyan-300/20 to-blue-600/20 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Signature Bottle</p>
                  <p className="mt-2 text-3xl font-bold text-white">1.5L Purified Water</p>
                </div>
                <div className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-200">Fresh</div>
              </div>
              <div className="mt-8 flex items-center justify-center">
                <img src="/bottle.png" alt="SipYour Water Bottle" className="h-48 object-contain" />
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 text-center">
              <p className="text-3xl font-black text-cyan-300">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </section>

        <section id="about" className="grid gap-8 rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Why SipYour</p>
            <h2 className="mt-3 text-3xl font-bold text-white">Pure water, crafted for daily life.</h2>
          </div>
          <div className="space-y-4 text-slate-300">
            {features.map((feature) => (
              <div key={feature} className="rounded-xl border border-white/10 bg-white/5 p-4">
                {feature}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 lg:grid-cols-2 lg:p-10">
          <div className="flex items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-300/10 to-blue-600/10 p-8">
            <img src="/bottle.png" alt="SipYour Water Bottle Premium" className="h-96 object-contain drop-shadow-2xl" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Our Signature</p>
            <h2 className="mt-3 text-3xl font-bold text-white">The SipYour Bottle</h2>
            <p className="mt-4 text-slate-300">Engineered for purity, designed for your lifestyle. Our signature bottle features a premium finish and is sealed for maximum freshness. Whether you're at home, work, or on the go, SipYour delivers consistent quality and taste.</p>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li className="flex gap-2"><span className="text-cyan-300">✓</span> 100% BPA-Free Materials</li>
              <li className="flex gap-2"><span className="text-cyan-300">✓</span> Advanced Purification System</li>
              <li className="flex gap-2"><span className="text-cyan-300">✓</span> Eco-Friendly Packaging</li>
            </ul>
          </div>
        </section>

        <section id="products" className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 p-8 lg:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Our range</p>
              <h2 className="mt-2 text-3xl font-bold text-white">Choose the bottle that fits your day.</h2>
            </div>
            <p className="max-w-xl text-slate-300">From everyday hydration to premium serving, SipYour helps you stay refreshed wherever life takes you.</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {['500ml Spark', '1.5L Classic', '20L Family Pack'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                <div className="mb-4 h-32 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-200/30 to-blue-500/30">
                  <img src="/bottle.png" alt={item} className="h-28 object-contain" />
                </div>
                <h3 className="text-xl font-semibold text-white">{item}</h3>
                <p className="mt-2 text-sm text-slate-400">Clean, reliable, and ready to sip.</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p>© 2026 SipYour. Pure water for modern living.</p>
              <p className="text-sm text-slate-400">Serving {selectedCity} and beyond</p>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  aria-label={social.name}
                  className="rounded-full border border-cyan-400/30 bg-slate-900/50 p-3 text-xl transition hover:border-cyan-300 hover:bg-cyan-400/20"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-white/10 pt-4 text-sm text-slate-400">
            <p>hello@sipyour.com • +91 98765 43210</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
