import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Donation } from './components/Donation';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const prayerTimes = [
    { name: 'Fajr', time: '5:30 AM' },
    { name: 'Dzuhr', time: '1:15 PM' },
    { name: 'Ashar', time: '4:45 PM' },
    { name: 'Maghrib', time: '7:20 PM' },
    { name: 'Isya', time: '8:45 PM' },
  ];

  return (
    <div className="min-h-screen pb-28">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="programs">
          <Programs />
        </section>
        <section id="donate">
          <Donation />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />

      <div className="fixed top-18 left-75 right-75 z-50 border-t border-white/90 bg-foreground/30 text-white shadow-xl rounded-2xl">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="grid grid-cols-2 gap-2 md:grid-cols-5">
            {prayerTimes.map((prayer) => (
              <div key={prayer.name} className="rounded-2xl bg-white/20 p-3 text-center">
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/90">{prayer.name}</div>
                <div className="mt-1 text-sm font-semibold">{prayer.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}