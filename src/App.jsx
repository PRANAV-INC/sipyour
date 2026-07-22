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

const products = [
  { name: '500ml Spark', desc: 'Compact and sleek for daily travel.' },
  { name: '1.5L Classic', desc: 'Perfect for office desks and family use.' },
  { name: '20L Family Pack', desc: 'Reliable bulk hydration for larger homes.' },
];

const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow'];

const socialLinks = [
  { name: 'Facebook', icon: '📘', url: '#' },
  { name: 'Instagram', icon: '📷', url: '#' },
  { name: 'Twitter', icon: '𝕏', url: '#' },
  { name: 'YouTube', icon: '▶️', url: '#' },
];

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'products', label: 'Products' },
  { id: 'about', label: 'About' },
  { id: 'settings', label: 'Settings' },
];

const appearanceOptions = [
  { id: 'ocean', title: 'Ocean Blue', desc: 'Fresh and airy', accent: 'from-cyan-500 to-blue-600' },
  { id: 'mountain', title: 'Mountain Fresh', desc: 'Cool and crisp', accent: 'from-sky-400 to-emerald-500' },
  { id: 'dark', title: 'Dark Premium', desc: 'Luxury and deep', accent: 'from-slate-800 to-slate-950' },
  { id: 'light', title: 'Light Premium', desc: 'Soft and serene', accent: 'from-white to-cyan-100' },
];

const deliveryItems = [
  'Delivery Alerts',
  'Auto Refill',
  'Morning Delivery',
  'Evening Delivery',
  'Holiday Pause',
  'Live Delivery Tracking',
];

const waterOptions = ['500ml', '1.5L', '5L', '20L'];
const temperatures = ['Cold', 'Room Temp', 'Warm'];
const schedules = ['Every Morning', 'Every Evening', 'Weekend Only'];
const notificationOptions = ['Push Notifications', 'SMS', 'WhatsApp', 'Email'];
const privacyOptions = ['Face Unlock', 'Fingerprint Login', 'Two-Factor Authentication', 'Login History', 'Active Devices'];
const languages = ['English', 'Hindi', 'Marathi'];

function ToggleSwitch({ checked, onChange }) {
  return (
    <button
      type="button"
      aria-pressed={checked}
      onClick={onChange}
      className={`relative inline-flex h-7 w-12 items-center rounded-full transition-all duration-300 ${checked ? 'bg-cyan-600 shadow-[0_0_16px_rgba(6,182,212,0.25)]' : 'bg-slate-300'}`}
    >
      <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform duration-300 ${checked ? 'translate-x-6' : 'translate-x-1'}`} />
    </button>
  );
}

function App() {
  const [selectedCity, setSelectedCity] = React.useState('Mumbai');
  const [theme, setTheme] = React.useState('ocean');
  const [notifications, setNotifications] = React.useState(true);
  const [autoRefill, setAutoRefill] = React.useState(false);
  const [deliveryAlerts, setDeliveryAlerts] = React.useState(true);
  const [morningDelivery, setMorningDelivery] = React.useState(true);
  const [eveningDelivery, setEveningDelivery] = React.useState(false);
  const [holidayPause, setHolidayPause] = React.useState(false);
  const [tracking, setTracking] = React.useState(true);
  const [pushNotifications, setPushNotifications] = React.useState(true);
  const [smsNotifications, setSmsNotifications] = React.useState(false);
  const [whatsappNotifications, setWhatsappNotifications] = React.useState(true);
  const [emailNotifications, setEmailNotifications] = React.useState(true);
  const [selectedBottleSize, setSelectedBottleSize] = React.useState('1.5L');
  const [selectedTemperature, setSelectedTemperature] = React.useState('Cold');
  const [selectedSchedule, setSelectedSchedule] = React.useState('Every Morning');
  const [selectedLanguage, setSelectedLanguage] = React.useState('English');
  const [activePage, setActivePage] = React.useState('home');

  const pageBackground = theme === 'mountain'
    ? 'bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.32),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.24),_transparent_36%),linear-gradient(135deg,_#f8fbff,_#e6f7ff_50%,_#ebfdf7)]'
    : theme === 'dark'
      ? 'bg-[radial-gradient(circle_at_top_left,_rgba(14,116,144,0.22),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(30,41,59,0.28),_transparent_35%),linear-gradient(135deg,_#020617,_#0f172a_60%,_#111827)]'
      : theme === 'light'
        ? 'bg-[radial-gradient(circle_at_top_left,_rgba(224,242,254,0.8),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(191,219,254,0.5),_transparent_35%),linear-gradient(135deg,_#ffffff,_#f8fdff_50%,_#eef8ff)]'
        : 'bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.35),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.25),_transparent_35%),linear-gradient(135deg,_#f0fdfd,_#e0f2fe_50%,_#dbeafe)]';

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return (
          <section className="grid gap-6 rounded-[2rem] border border-cyan-400/20 bg-white/75 p-8 shadow-[0_20px_80px_rgba(14,116,144,0.1)] backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
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
        );

      case 'products':
        return (
          <section className="rounded-[2rem] border border-cyan-100 bg-white/75 p-8 shadow-sm lg:p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Products</p>
                <h2 className="mt-2 text-3xl font-bold text-slate-900">Choose the bottle that fits your day.</h2>
              </div>
              <p className="max-w-xl text-slate-600">From everyday hydration to premium serving, SipYour helps you stay refreshed wherever life takes you.</p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {products.map((item) => (
                <div key={item.name} className="rounded-2xl border border-cyan-100 bg-cyan-50/70 p-5">
                  <div className="mb-4 flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-100 to-sky-100">
                    <img src="/bottle.png" alt={item.name} className="h-24 object-contain" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{item.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        );

      case 'about':
        return (
          <div className="space-y-8">
            <section className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/70 p-8 shadow-[0_30px_90px_rgba(14,116,144,0.12)] backdrop-blur-2xl lg:p-12">
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.9),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(125,211,252,0.25),_transparent_50%)]" />
                <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-cyan-200/25 blur-3xl" />
                <div className="absolute right-12 top-12 h-36 w-36 rounded-full bg-sky-200/30 blur-3xl" />
                <div className="absolute bottom-0 left-1/4 h-24 w-24 rounded-full border border-cyan-200/40" />
                <div className="absolute bottom-8 right-20 h-16 w-16 rounded-full border border-cyan-200/40" />
                <div className="absolute left-[20%] top-[35%] h-2 w-2 rounded-full bg-white/80" />
                <div className="absolute right-[18%] top-[40%] h-2 w-2 rounded-full bg-cyan-100/90" />
                <div className="absolute bottom-[22%] left-[36%] h-2 w-2 rounded-full bg-white/70" />
              </div>
              <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-700">About</p>
                  <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">Every Drop Begins in Nature.</h2>
                  <p className="mt-4 text-2xl font-semibold text-cyan-700">Pure Water. Pure Life.</p>
                  <p className="mt-5 text-lg leading-8 text-slate-600">
                    SipYour brings naturally pure drinking water to life through advanced purification, intelligent delivery, and a commitment to freshness that feels as elegant as it tastes.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <button type="button" onClick={() => setActivePage('products')} className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 px-6 py-3 font-semibold text-white shadow-[0_12px_32px_rgba(14,116,144,0.25)] transition duration-300 hover:scale-[1.03]">
                      <span className="relative z-10 flex items-center gap-2">Explore Products <span className="transition-transform duration-300 group-hover:translate-x-1">→</span></span>
                      <span className="absolute inset-0 translate-x-[-120%] bg-white/20 transition-transform duration-700 group-hover:translate-x-[120%]" />
                    </button>
                    <button type="button" onClick={() => setActivePage('settings')} className="rounded-full border border-cyan-200/70 bg-white/80 px-6 py-3 font-semibold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400">Order Now</button>
                  </div>
                </div>
                <div className="relative flex items-center justify-center">
                  <div className="relative h-[340px] w-full max-w-[380px] overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-cyan-100/90 via-white to-sky-100/90 p-6 shadow-[0_25px_70px_rgba(14,116,144,0.16)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.8),_transparent_50%)]" />
                    <div className="absolute inset-x-8 bottom-8 h-20 rounded-full bg-cyan-200/20 blur-2xl" />
                    <div className="absolute left-8 top-8 h-4 w-4 rounded-full bg-white/80" />
                    <div className="absolute right-10 top-12 h-3 w-3 rounded-full bg-cyan-100/90" />
                    <div className="absolute bottom-8 left-12 h-3 w-3 rounded-full bg-white/70" />
                    <div className="relative flex h-full items-center justify-center">
                      <div className="animate-[float_5s_ease-in-out_infinite] relative">
                        <img src="/bottle.png" alt="Premium SipYour bottle" className="relative h-60 w-auto object-contain drop-shadow-[0_25px_60px_rgba(8,145,178,0.28)]" />
                        <div className="absolute -left-4 top-10 h-5 w-5 rounded-full border border-cyan-100/60" />
                        <div className="absolute -right-3 bottom-8 h-3 w-3 rounded-full bg-white/70" />
                        <div className="absolute right-3 top-2 h-8 w-8 rounded-full bg-cyan-100/40 blur-xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-sm backdrop-blur-xl lg:p-10">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Our Journey</p>
                  <h3 className="mt-2 text-3xl font-semibold text-slate-900">Milestones shaped by purity</h3>
                </div>
                <p className="max-w-xl text-slate-600">A story of trust, innovation, and a relentless pursuit of fresh drinking water.</p>
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-5">
                {[
                  ['Founded', '2018'],
                  ['First Plant', '2020'],
                  ['1 Million Bottles', '2022'],
                  ['Expansion Across Cities', '2024'],
                  ['Future Vision', '2026+'],
                ].map(([title, value], index) => (
                  <div key={title} className="relative rounded-[1.5rem] border border-cyan-100/80 bg-gradient-to-br from-cyan-50 to-white p-5 text-center shadow-sm">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cyan-600 text-lg text-white">{index + 1}</div>
                    <p className="mt-4 font-semibold text-slate-900">{title}</p>
                    <p className="mt-1 text-sm text-slate-600">{value}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-sm backdrop-blur-xl lg:p-10">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Why Choose SIPYOUR</p>
                <h3 className="mt-2 text-3xl font-semibold text-slate-900">Premium care, in every drop</h3>
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {[
                  ['💧', 'Advanced Multi-Stage Purification', 'Every stage is tuned for absolute clarity and freshness.'],
                  ['🫧', 'Naturally Balanced Minerals', 'Minerals are restored to support a smooth, refined taste.'],
                  ['♻️', 'Eco-Friendly Packaging', 'Designed to reduce waste and respect the environment.'],
                  ['⏱️', '24×7 Reliable Delivery', 'Fresh hydration is always close at hand.'],
                ].map(([icon, title, descr]) => (
                  <div key={title} className="group rounded-[1.6rem] border border-cyan-100/80 bg-gradient-to-br from-cyan-50 to-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(14,116,144,0.12)]">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl shadow-sm">{icon}</div>
                    <h4 className="mt-4 text-lg font-semibold text-slate-900">{title}</h4>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{descr}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-sm backdrop-blur-xl lg:p-10">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Purification Process</p>
                  <h3 className="mt-2 text-3xl font-semibold text-slate-900">From source to sip</h3>
                </div>
                <p className="max-w-xl text-slate-600">Every bottle goes through a precise multi-stage process crafted for utmost purity and peace of mind.</p>
              </div>
              <div className="mt-8 space-y-4">
                {[
                  'Source Water',
                  'Sediment Filtration',
                  'Activated Carbon',
                  'Reverse Osmosis',
                  'UV Sterilization',
                  'Ozonation',
                  'Mineral Balancing',
                  'Quality Testing',
                  'Final Packaging',
                ].map((step, index) => (
                  <div key={step} className="flex flex-col gap-3 rounded-[1.3rem] border border-cyan-100/80 bg-cyan-50/70 p-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-600 text-sm font-semibold text-white">{index + 1}</div>
                      <div>
                        <p className="font-semibold text-slate-900">{step}</p>
                        <p className="text-sm text-slate-600">Carefully refined for clarity and taste.</p>
                      </div>
                    </div>
                    {index < 8 && <div className="h-1 w-24 rounded-full bg-gradient-to-r from-cyan-300 to-sky-400" />}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-sm backdrop-blur-xl lg:p-10">
              <div className="grid gap-4 md:grid-cols-5">
                {[
                  ['99.99%', 'Purity'],
                  ['100+', 'Cities Served'],
                  ['1 Million+', 'Bottles Delivered'],
                  ['24×7', 'Fresh Supply'],
                  ['100%', 'Quality Tested'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-[1.4rem] border border-cyan-100/80 bg-gradient-to-br from-cyan-50 to-white p-5 text-center">
                    <p className="text-3xl font-semibold text-slate-900">{value}</p>
                    <p className="mt-2 text-sm text-slate-600">{label}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-sm backdrop-blur-xl lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Sustainability</p>
                  <h3 className="mt-2 text-3xl font-semibold text-slate-900">A lighter footprint, a brighter future</h3>
                  <p className="mt-4 text-slate-600">From clean rivers to recyclable packaging, SIPYOUR is designed to protect the world that inspires every bottle.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    ['Environmental Responsibility', 'We source and operate with care for every surrounding ecosystem.'],
                    ['Reduced Plastic Waste', 'Smart packaging choices help cut unnecessary single-use materials.'],
                    ['Water Conservation', 'Our systems are built to preserve resources while delivering consistently.'],
                    ['Eco-Friendly Packaging', 'Reusable, recyclable, and thoughtfully designed to remain elegant.'],
                  ].map(([title, desc]) => (
                    <div key={title} className="rounded-[1.4rem] border border-cyan-100/80 bg-cyan-50/70 p-5">
                      <h4 className="font-semibold text-slate-900">{title}</h4>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-sm backdrop-blur-xl lg:p-10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Customer Trust</p>
                  <h3 className="mt-2 text-3xl font-semibold text-slate-900">Loved by homes, offices, and families</h3>
                </div>
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {[
                  ['Asha', '5.0', '“Elegant, refreshing, and always on time.”'],
                  ['Rohan', '5.0', '“The quality feels premium from the first sip.”'],
                  ['Meera', '5.0', '“A service that feels as polished as the bottle itself.”'],
                ].map(([name, rating, quote]) => (
                  <div key={name} className="rounded-[1.5rem] border border-cyan-100/80 bg-gradient-to-br from-cyan-50 to-white p-5 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-600 text-sm font-semibold text-white">{name[0]}</div>
                      <div>
                        <p className="font-semibold text-slate-900">{name}</p>
                        <p className="text-sm text-cyan-700">{'★'.repeat(5)} • {rating}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{quote}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2.5rem] border border-cyan-100/80 bg-gradient-to-r from-cyan-700 via-sky-600 to-blue-700 p-8 text-white shadow-[0_30px_80px_rgba(14,116,144,0.2)] lg:p-12">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-100">Our Promise</p>
                <h3 className="mt-4 text-3xl font-semibold sm:text-4xl">We don't just deliver water. We deliver trust in every drop.</h3>
              </div>
            </section>

            <section className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/70 p-8 shadow-sm backdrop-blur-xl lg:p-12">
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-cyan-200/20 blur-3xl" />
                <div className="absolute right-8 top-8 h-40 w-40 rounded-full bg-sky-200/25 blur-3xl" />
                <div className="absolute bottom-10 left-1/4 h-12 w-12 rounded-full border border-cyan-200/50" />
                <div className="absolute bottom-8 right-16 h-14 w-14 rounded-full border border-cyan-200/50" />
              </div>
              <div className="relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Experience</p>
                  <h3 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Experience Pure Hydration Today</h3>
                  <p className="mt-4 text-lg text-slate-600">Discover a more refined way to keep your home, office, and daily rituals refreshed.</p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <button type="button" onClick={() => setActivePage('products')} className="rounded-full bg-cyan-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:-translate-y-0.5">Explore Products</button>
                    <button type="button" onClick={() => setActivePage('settings')} className="rounded-full border border-cyan-200 bg-white px-6 py-3 font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5">Order Now</button>
                  </div>
                </div>
                <div className="relative flex items-center justify-center">
                  <div className="relative h-[320px] w-full max-w-[340px] overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-cyan-100/90 via-white to-sky-100/90 p-6 shadow-[0_20px_60px_rgba(14,116,144,0.18)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.85),_transparent_55%)]" />
                    <div className="absolute inset-x-8 bottom-8 h-20 rounded-full bg-cyan-200/20 blur-2xl" />
                    <div className="relative flex h-full items-center justify-center">
                      <div className="animate-[float_4s_ease-in-out_infinite] relative">
                        <img src="/bottle.png" alt="SipYour bottle" className="relative h-56 w-auto object-contain drop-shadow-[0_25px_60px_rgba(8,145,178,0.28)]" />
                        <div className="absolute -left-6 top-10 h-5 w-5 rounded-full border border-cyan-100/60" />
                        <div className="absolute -right-4 bottom-8 h-4 w-4 rounded-full bg-white/70" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );

      case 'settings':
        return (
          <section className="relative overflow-hidden rounded-[2.5rem] border border-white/50 bg-white/65 p-6 shadow-[0_30px_90px_rgba(14,116,144,0.16)] backdrop-blur-2xl lg:p-10">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute left-6 top-6 h-28 w-28 rounded-full bg-cyan-300/20 blur-3xl" />
              <div className="absolute right-8 top-8 h-36 w-36 rounded-full bg-sky-200/30 blur-3xl" />
              <div className="absolute bottom-12 left-1/3 h-20 w-20 rounded-full border border-cyan-200/50" />
              <div className="absolute bottom-14 right-12 h-12 w-12 rounded-full border border-cyan-200/40" />
              <div className="absolute left-[20%] top-[25%] h-2 w-2 rounded-full bg-white/80" />
              <div className="absolute right-[30%] top-[45%] h-2 w-2 rounded-full bg-cyan-100/90" />
              <div className="absolute right-[22%] bottom-[24%] h-2 w-2 rounded-full bg-white/80" />
            </div>

            <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-6">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-700">Settings</p>
                  <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Personalize Your Water Experience</h2>
                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    Adjust your delivery rhythm, appearance, preferences, and privacy in one beautifully curated space.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { label: 'Delivery', value: '24/7' },
                    { label: 'Refills', value: 'Weekly' },
                    { label: 'Rewards', value: '1,240' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-[1.5rem] border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur-xl">
                      <p className="text-sm text-slate-500">{item.label}</p>
                      <p className="mt-2 text-2xl font-semibold text-slate-900">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="relative h-[320px] w-full max-w-[360px] overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-cyan-100/90 via-white to-sky-100/90 p-6 shadow-[0_20px_60px_rgba(14,116,144,0.18)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.8),_transparent_55%)]" />
                  <div className="absolute left-6 top-6 h-4 w-4 rounded-full bg-white/80" />
                  <div className="absolute right-8 top-12 h-3 w-3 rounded-full bg-cyan-100" />
                  <div className="absolute bottom-8 left-10 h-3 w-3 rounded-full bg-white/80" />
                  <div className="absolute bottom-6 right-6 h-6 w-16 rounded-full bg-white/50 blur-2xl" />
                  <div className="absolute inset-x-8 bottom-8 h-20 rounded-full bg-cyan-200/20 blur-2xl" />
                  <div className="relative flex h-full items-center justify-center">
                    <div className="animate-[float_5s_ease-in-out_infinite] relative">
                      <img src="/bottle.png" alt="Premium SipYour bottle" className="relative h-56 w-auto object-contain drop-shadow-[0_25px_50px_rgba(8,145,178,0.28)]" />
                      <div className="absolute -left-4 top-10 h-5 w-5 rounded-full border border-cyan-100/60" />
                      <div className="absolute -right-2 bottom-8 h-3 w-3 rounded-full bg-white/70" />
                      <div className="absolute right-4 top-2 h-8 w-8 rounded-full bg-cyan-100/40 blur-xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-8 space-y-6">
              <section className="rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-sm backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Appearance</p>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-900">Choose your visual aura</h3>
                  </div>
                  <div className="rounded-full bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-700">Premium themes</div>
                </div>
                <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {appearanceOptions.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setTheme(option.id)}
                      className={`group relative overflow-hidden rounded-[1.4rem] border p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(14,116,144,0.12)] ${theme === option.id ? 'border-cyan-400 bg-white shadow-[0_10px_30px_rgba(14,116,144,0.12)]' : 'border-white/70 bg-white/60'}`}
                    >
                      <div className={`h-14 rounded-[1rem] bg-gradient-to-r ${option.accent}`} />
                      <p className="mt-3 font-semibold text-slate-900">{option.title}</p>
                      <p className="mt-1 text-sm text-slate-600">{option.desc}</p>
                      <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </button>
                  ))}
                </div>
              </section>

              <div className="grid gap-6 xl:grid-cols-2">
                <section className="rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-sm backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Delivery Preferences</p>
                      <h3 className="mt-2 text-2xl font-semibold text-slate-900">Your delivery rhythm</h3>
                    </div>
                  </div>
                  <div className="mt-5 space-y-3">
                    {[
                      ['Delivery Alerts', deliveryAlerts, setDeliveryAlerts],
                      ['Auto Refill', autoRefill, setAutoRefill],
                      ['Morning Delivery', morningDelivery, setMorningDelivery],
                      ['Evening Delivery', eveningDelivery, setEveningDelivery],
                      ['Holiday Pause', holidayPause, setHolidayPause],
                      ['Live Delivery Tracking', tracking, setTracking],
                    ].map(([label, checked, setter]) => (
                      <div key={label} className="flex items-center justify-between rounded-[1.1rem] border border-cyan-100/80 bg-cyan-50/70 px-4 py-3">
                        <div>
                          <p className="font-medium text-slate-800">{label}</p>
                        </div>
                        <ToggleSwitch checked={checked} onChange={() => setter((value) => !value)} />
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-sm backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Water Preferences</p>
                      <h3 className="mt-2 text-2xl font-semibold text-slate-900">Tailor your hydration</h3>
                    </div>
                  </div>
                  <div className="mt-5 space-y-4">
                    <div>
                      <p className="mb-2 text-sm font-medium text-slate-600">Bottle size</p>
                      <div className="flex flex-wrap gap-2">
                        {waterOptions.map((option) => (
                          <button key={option} type="button" onClick={() => setSelectedBottleSize(option)} className={`rounded-full px-3 py-2 text-sm transition ${selectedBottleSize === option ? 'bg-cyan-600 text-white shadow-sm' : 'bg-cyan-50 text-slate-700'}`}>
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-medium text-slate-600">Preferred temperature</p>
                      <div className="flex flex-wrap gap-2">
                        {temperatures.map((option) => (
                          <button key={option} type="button" onClick={() => setSelectedTemperature(option)} className={`rounded-full px-3 py-2 text-sm transition ${selectedTemperature === option ? 'bg-cyan-600 text-white shadow-sm' : 'bg-cyan-50 text-slate-700'}`}>
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-medium text-slate-600">Delivery schedule</p>
                      <div className="flex flex-wrap gap-2">
                        {schedules.map((option) => (
                          <button key={option} type="button" onClick={() => setSelectedSchedule(option)} className={`rounded-full px-3 py-2 text-sm transition ${selectedSchedule === option ? 'bg-cyan-600 text-white shadow-sm' : 'bg-cyan-50 text-slate-700'}`}>
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="grid gap-6 xl:grid-cols-2">
                <section className="rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-sm backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Notifications</p>
                      <h3 className="mt-2 text-2xl font-semibold text-slate-900">Stay effortlessly updated</h3>
                    </div>
                  </div>
                  <div className="mt-5 space-y-3">
                    {[
                      ['Push Notifications', pushNotifications, setPushNotifications],
                      ['SMS', smsNotifications, setSmsNotifications],
                      ['WhatsApp', whatsappNotifications, setWhatsappNotifications],
                      ['Email', emailNotifications, setEmailNotifications],
                    ].map(([label, checked, setter]) => (
                      <div key={label} className="flex items-center justify-between rounded-[1.1rem] border border-cyan-100/80 bg-cyan-50/70 px-4 py-3">
                        <div>
                          <p className="font-medium text-slate-800">{label}</p>
                        </div>
                        <ToggleSwitch checked={checked} onChange={() => setter((value) => !value)} />
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-sm backdrop-blur-xl">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Account</p>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-900">Profile & security</h3>
                  </div>
                  <div className="mt-5 space-y-3 text-sm text-slate-600">
                    <div className="rounded-[1.1rem] border border-cyan-100/80 bg-cyan-50/70 p-4">
                      <p className="font-semibold text-slate-900">Profile</p>
                      <p className="mt-1">Aarav Rao • Premium Member</p>
                    </div>
                    <div className="rounded-[1.1rem] border border-cyan-100/80 bg-cyan-50/70 p-4">
                      <p className="font-semibold text-slate-900">Phone</p>
                      <p className="mt-1">+91 98765 43210</p>
                    </div>
                    <div className="rounded-[1.1rem] border border-cyan-100/80 bg-cyan-50/70 p-4">
                      <p className="font-semibold text-slate-900">Email</p>
                      <p className="mt-1">aarav@sipyour.com</p>
                    </div>
                    <div className="rounded-[1.1rem] border border-cyan-100/80 bg-cyan-50/70 p-4">
                      <p className="font-semibold text-slate-900">Address</p>
                      <p className="mt-1">Bandra, Mumbai • India</p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
                <section className="rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-sm backdrop-blur-xl">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Subscription</p>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-900">Premium overview</h3>
                  </div>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {[
                      ['Current Plan', 'Aqua Premium'],
                      ['Next Delivery', 'Tomorrow'],
                      ['Reward Points', '1,240'],
                      ['Total Bottles', '312'],
                      ['Water Consumed', '1,860L'],
                      ['Impact', '98% Recycled'],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-[1.2rem] border border-cyan-100/80 bg-gradient-to-br from-cyan-50 to-white p-4">
                        <p className="text-sm text-slate-500">{label}</p>
                        <p className="mt-2 text-xl font-semibold text-slate-900">{value}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-sm backdrop-blur-xl">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Privacy</p>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-900">Secure your account</h3>
                  </div>
                  <div className="mt-5 space-y-3">
                    {[
                      ['Face Unlock', true],
                      ['Fingerprint Login', true],
                      ['Two-Factor Authentication', false],
                      ['Login History', true],
                      ['Active Devices', true],
                    ].map(([label, checked]) => (
                      <div key={label} className="flex items-center justify-between rounded-[1.1rem] border border-cyan-100/80 bg-cyan-50/70 px-4 py-3">
                        <p className="font-medium text-slate-800">{label}</p>
                        <ToggleSwitch checked={checked} onChange={() => null} />
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <section className="rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-sm backdrop-blur-xl">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Language</p>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-900">Speak in your preferred language</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {languages.map((option) => (
                      <button key={option} type="button" onClick={() => setSelectedLanguage(option)} className={`rounded-full px-4 py-2 text-sm transition ${selectedLanguage === option ? 'bg-cyan-600 text-white shadow-sm' : 'bg-cyan-50 text-slate-700'}`}>
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </section>

              <section className="rounded-[2rem] border border-rose-200/70 bg-gradient-to-br from-rose-50/90 via-white to-rose-100/90 p-6 shadow-sm backdrop-blur-xl">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-600">Danger Zone</p>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-900">Delete account or sign out</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button type="button" className="rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-sm font-semibold text-rose-600 transition hover:-translate-y-0.5">Logout</button>
                    <button type="button" className="rounded-full bg-rose-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5">Delete Account</button>
                  </div>
                </div>
              </section>
            </div>
          </section>
        );

      case 'home':
      default:
        return (
          <>
            <section className="grid items-center gap-10 rounded-[2rem] border border-cyan-400/20 bg-white/70 p-8 shadow-[0_20px_80px_rgba(14,116,144,0.12)] backdrop-blur-xl lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
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
                  <button
                    type="button"
                    onClick={() => setActivePage('dashboard')}
                    className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 px-6 py-3 font-semibold text-white shadow-[0_10px_30px_rgba(14,116,144,0.25)] transition duration-300 hover:scale-[1.03] hover:shadow-[0_15px_35px_rgba(14,116,144,0.3)]"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Explore
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                    <span className="absolute inset-0 translate-x-[-120%] bg-white/20 transition-transform duration-700 group-hover:translate-x-[120%]" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivePage('about')}
                    className="group relative overflow-hidden rounded-full border border-cyan-400/40 bg-white/70 px-6 py-3 font-semibold text-slate-700 shadow-sm transition duration-300 hover:scale-[1.03] hover:border-cyan-500 hover:text-cyan-700 hover:shadow-[0_10px_25px_rgba(14,116,144,0.15)]"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Order Now
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                    <span className="absolute inset-0 translate-y-[120%] bg-cyan-50 transition-transform duration-500 group-hover:translate-y-0" />
                  </button>
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
                  <div className="relative flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72">
                    <div className="absolute inset-6 rounded-full bg-cyan-300/20 blur-3xl" />
                    <div className="absolute inset-8 rounded-full border border-cyan-200/60" />
                    <img
                      src="/bottle.png"
                      alt="SipYour Water Bottle"
                      className="relative h-56 w-auto object-contain drop-shadow-[0_25px_50px_rgba(14,116,144,0.35)] sm:h-64 animate-[float_4s_ease-in-out_infinite]"
                    />
                    <div className="absolute bottom-4 left-8 h-12 w-24 rounded-full bg-white/40 blur-2xl" />
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

            <section className="rounded-[2rem] border border-cyan-100 bg-gradient-to-br from-cyan-100/70 to-sky-100/70 p-8 shadow-sm lg:p-10">
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
          </>
        );
    }
  };

  return (
    <div className={`min-h-screen ${pageBackground} text-slate-800`}>
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
          <nav className="hidden gap-2 text-sm font-medium text-slate-700 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActivePage(item.id)}
                className={`rounded-full px-3 py-2 transition ${activePage === item.id ? 'bg-cyan-600 text-white shadow-sm' : 'hover:text-cyan-700'}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-6 pb-16 lg:px-8">
        {renderPage()}
      </main>

      <footer className="border-t border-cyan-100/70 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
            <div>
              <p className="text-2xl font-black tracking-[0.3em] text-cyan-700">SIPYOUR</p>
              <p className="mt-3 text-lg font-semibold text-slate-800">Pure Water. Pure Life.</p>
              <p className="mt-2 max-w-md text-sm leading-7 text-slate-600">Premium hydration designed for modern homes, offices, and unforgettable everyday rituals.</p>
              <p className="mt-4 text-sm text-slate-500">hello@sipyour.com • +91 98765 43210</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Quick links</p>
              <div className="mt-4 flex flex-col gap-2 text-sm text-slate-600">
                <button type="button" onClick={() => setActivePage('home')} className="w-fit transition hover:text-cyan-700">Home</button>
                <button type="button" onClick={() => setActivePage('dashboard')} className="w-fit transition hover:text-cyan-700">Dashboard</button>
                <button type="button" onClick={() => setActivePage('products')} className="w-fit transition hover:text-cyan-700">Products</button>
                <button type="button" onClick={() => setActivePage('settings')} className="w-fit transition hover:text-cyan-700">Settings</button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Follow</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    aria-label={social.name}
                    className="rounded-full border border-cyan-200 bg-white/80 p-3 text-xl transition hover:-translate-y-1 hover:border-cyan-500 hover:bg-cyan-50"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <div className="rounded-[1.25rem] border border-cyan-100 bg-cyan-50/80 p-4">
                <p className="text-sm font-semibold text-slate-800">Download the app</p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="grid h-16 w-16 place-items-center rounded-[1rem] border border-cyan-200 bg-white text-center text-[10px] font-semibold text-slate-700">
                    QR
                  </div>
                  <div className="text-sm text-slate-600">Scan to get the latest sip updates and app access.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-cyan-100/70 pt-4 text-sm text-slate-500">
            <p>© 2026 SipYour. Serving {selectedCity} and beyond.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
