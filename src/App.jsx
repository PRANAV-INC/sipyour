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

const dashboardHighlights = [
  { title: 'Water Quality', value: '99.95%', detail: 'Consistently monitored' },
  { title: 'Delivery Status', value: 'On Time', detail: 'Next drop in 2 hrs' },
  { title: 'Refill Plan', value: 'Weekly', detail: 'Auto-optimized' },
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
  const [theme, setTheme] = React.useState('ocean');
  const [notifications, setNotifications] = React.useState(true);
  const [autoRefill, setAutoRefill] = React.useState(false);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.35),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.25),_transparent_35%),linear-gradient(135deg,_#f0fdfd,_#e0f2fe_50%,_#dbeafe)] text-slate-800">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <div>
          <p className="text-2xl font-black tracking-[0.3em] text-cyan-700">SIPYOUR</p>
          <p className="text-sm text-slate-600">Pure water, redefined</p>
        </div>
        <div className="flex items-center gap-4 lg:gap-6">
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="rounded-full border border-cyan-400/30 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
          >
            {cities.map((city) => (
              <option key={city} value={city} className="bg-white text-slate-700">
                {city}
              </option>
            ))}
          </select>
          <nav className="hidden gap-5 text-sm font-medium text-slate-700 md:flex">
            <a href="#dashboard" className="transition hover:text-cyan-700">Dashboard</a>
            <a href="#home" className="transition hover:text-cyan-700">Home</a>
            <a href="#about" className="transition hover:text-cyan-700">About</a>
            <a href="#contact" className="transition hover:text-cyan-700">Contact</a>
            <a href="#settings" className="transition hover:text-cyan-700">Settings</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-6 pb-16 lg:px-8">
        <section id="home" className="grid items-center gap-10 rounded-[2rem] border border-cyan-400/20 bg-white/70 p-8 shadow-[0_20px_80px_rgba(14,116,144,0.12)] backdrop-blur-xl lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
          <div>
            <p className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-100 px-3 py-1 text-sm font-semibold text-cyan-700">
              Refreshing purity in every sip
            </p>
            <h1 className="max-w-2xl text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              The trusted taste of pure water for every home and every journey.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">
              SipYour brings you crystal-clear, mineral-balanced hydration with a premium feel that fits your everyday life.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#dashboard" className="rounded-full bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-700">
                Open Dashboard
              </a>
              <a href="#about" className="rounded-full border border-cyan-400/30 px-6 py-3 font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700">
                Learn More
              </a>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-100 via-white to-blue-100 p-6 shadow-inner">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Signature Bottle</p>
                <p className="mt-2 text-3xl font-bold text-slate-900">1.5L Purified Water</p>
              </div>
              <div className="rounded-full bg-cyan-600/10 px-4 py-2 text-sm font-semibold text-cyan-700">Fresh</div>
            </div>
            <div className="mt-8 flex items-center justify-center">
              <img src="/bottle.png" alt="SipYour Water Bottle" className="h-48 object-contain" />
            </div>
          </div>
        </section>

        <section id="dashboard" className="grid gap-6 rounded-[2rem] border border-cyan-400/20 bg-white/75 p-8 shadow-[0_20px_80px_rgba(14,116,144,0.1)] backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Dashboard</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Stay in control of every fresh delivery.</h2>
            <p className="mt-4 max-w-xl text-slate-600">
              Your home hydration plan is now clearer, faster, and easier to manage in one place.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {dashboardHighlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-cyan-100 bg-cyan-50/80 p-4">
                  <p className="text-sm text-slate-500">{item.title}</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-cyan-100 bg-gradient-to-br from-sky-50 to-cyan-50 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Current plan</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">Premium Family</p>
              </div>
              <div className="rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-cyan-700">Active</div>
            </div>
            <div className="mt-6 space-y-3 text-sm text-slate-600">
              <div className="flex items-center justify-between rounded-xl bg-white/80 px-4 py-3">
                <span>Next refill</span>
                <span className="font-semibold text-slate-900">Tomorrow</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-white/80 px-4 py-3">
                <span>Service area</span>
                <span className="font-semibold text-slate-900">{selectedCity}</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-white/80 px-4 py-3">
                <span>Support</span>
                <span className="font-semibold text-slate-900">24/7</span>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-cyan-100 bg-white/70 p-6 text-center shadow-sm">
              <p className="text-3xl font-black text-cyan-700">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </section>

        <section id="about" className="grid gap-8 rounded-[2rem] border border-cyan-100 bg-white/75 p-8 shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Why SipYour</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Pure water, crafted for daily life.</h2>
          </div>
          <div className="space-y-4 text-slate-600">
            {features.map((feature) => (
              <div key={feature} className="rounded-xl border border-cyan-100 bg-cyan-50/70 p-4">
                {feature}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-[2rem] border border-cyan-100 bg-white/75 p-8 shadow-sm lg:grid-cols-2 lg:p-10">
          <div className="flex items-center justify-center rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-sky-50 p-8">
            <img src="/bottle.png" alt="SipYour Water Bottle Premium" className="h-96 object-contain drop-shadow-2xl" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Our Signature</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">The SipYour Bottle</h2>
            <p className="mt-4 text-slate-600">Engineered for purity, designed for your lifestyle. Our signature bottle features a premium finish and is sealed for maximum freshness. Whether you're at home, work, or on the go, SipYour delivers consistent quality and taste.</p>
            <ul className="mt-6 space-y-3 text-slate-600">
              <li className="flex gap-2"><span className="text-cyan-700">✓</span> 100% BPA-Free Materials</li>
              <li className="flex gap-2"><span className="text-cyan-700">✓</span> Advanced Purification System</li>
              <li className="flex gap-2"><span className="text-cyan-700">✓</span> Eco-Friendly Packaging</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="rounded-[2rem] border border-cyan-100 bg-gradient-to-br from-cyan-100/70 to-sky-100/70 p-8 shadow-sm lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Contact</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">Let’s keep your supply flowing smoothly.</h2>
            </div>
            <p className="max-w-xl text-slate-600">Reach out to our team for delivery updates, bulk plans, or premium service support.</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white/80 p-5">
              <p className="font-semibold text-slate-900">Email</p>
              <p className="mt-2 text-slate-600">hello@sipyour.com</p>
            </div>
            <div className="rounded-2xl bg-white/80 p-5">
              <p className="font-semibold text-slate-900">Phone</p>
              <p className="mt-2 text-slate-600">+91 98765 43210</p>
            </div>
          </div>
        </section>

        <section id="settings" className="rounded-[2rem] border border-cyan-100 bg-white/75 p-8 shadow-sm lg:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Settings</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">Personalize your experience.</h2>
            </div>
            <p className="max-w-xl text-slate-600">Choose your preferred view and notification style for a calmer, more refined experience.</p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-2xl border border-cyan-100 bg-cyan-50/70 p-5">
              <p className="font-semibold text-slate-900">Visual theme</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setTheme('ocean')}
                  className={`rounded-full border px-4 py-2 text-sm font-medium ${theme === 'ocean' ? 'border-cyan-600 bg-cyan-600 text-white' : 'border-cyan-200 bg-white text-slate-700'}`}
                >
                  Ocean Glow
                </button>
                <button
                  type="button"
                  onClick={() => setTheme('mist')}
                  className={`rounded-full border px-4 py-2 text-sm font-medium ${theme === 'mist' ? 'border-cyan-600 bg-cyan-600 text-white' : 'border-cyan-200 bg-white text-slate-700'}`}
                >
                  Mist Calm
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-cyan-100 bg-white p-5">
              <div className="flex items-center justify-between rounded-xl bg-cyan-50/80 px-4 py-3">
                <div>
                  <p className="font-semibold text-slate-900">Delivery alerts</p>
                  <p className="text-sm text-slate-600">Stay updated about each refill</p>
                </div>
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={() => setNotifications((value) => !value)}
                  className="h-5 w-5 rounded border-cyan-300 text-cyan-600 focus:ring-cyan-500"
                />
              </div>
              <div className="mt-3 flex items-center justify-between rounded-xl bg-cyan-50/80 px-4 py-3">
                <div>
                  <p className="font-semibold text-slate-900">Auto-refill</p>
                  <p className="text-sm text-slate-600">Schedule recurring deliveries</p>
                </div>
                <input
                  type="checkbox"
                  checked={autoRefill}
                  onChange={() => setAutoRefill((value) => !value)}
                  className="h-5 w-5 rounded border-cyan-300 text-cyan-600 focus:ring-cyan-500"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-cyan-100 bg-white/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-slate-700">© 2026 SipYour. Pure water for modern living.</p>
              <p className="text-sm text-slate-500">Serving {selectedCity} and beyond</p>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  aria-label={social.name}
                  className="rounded-full border border-cyan-200 bg-white/80 p-3 text-xl transition hover:border-cyan-500 hover:bg-cyan-50"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-cyan-100 pt-4 text-sm text-slate-500">
            <p>hello@sipyour.com • +91 98765 43210</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
