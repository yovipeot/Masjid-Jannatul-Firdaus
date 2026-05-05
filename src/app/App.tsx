import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PrayerTimes } from './components/PrayerTimes';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Donation } from './components/Donation';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="prayer-times">
          <PrayerTimes />
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
    </div>
  );
}