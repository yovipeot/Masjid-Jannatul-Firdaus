import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const prayers = [
    { name: 'Fajr', time: '5:30 AM' },
    { name: 'Dzuhr', time: '1:15 PM' },
    { name: 'Ashar', time: '4:45 PM' },
    { name: 'Maghrib', time: '7:20 PM' },
    { name: 'Isya', time: '8:45 PM' },
  ];

  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://lh3.googleusercontent.com/p/AF1QipO-gh-8Y4bndUSVjKySFn3Bs-g8XKzk7meODUJu=s1360-w1360-h1020-rw"
          alt="Masjid Jannatul Firdaus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* <div className="absolute inset-x-0 top-6 px-4">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/15 bg-black/50 p-4 text-white shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-5 sm:gap-3">
            {prayers.map((prayer) => (
              <div key={prayer.name} className="rounded-2xl bg-white/10 p-3 text-center">
                <div className="text-xs text-white/70 uppercase tracking-[0.2em] mb-1">{prayer.name}</div>
                <div className="text-base font-semibold">{prayer.time}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/60 mt-1">Adhan</div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 pt-24">
        <h1 className="text-5xl md:text-7xl mb-4 text-center">Infaq untuk Dakwah, Jalan Menuju Firdaus</h1>
        <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl opacity-90">
          Apa yang kamu beri hari ini, menunggumu di Firdaus.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#about"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition-colors"
          >
            Donasi Sekarang
          </a>
          {/* <button className="bg-white hover:bg-white/90 text-primary px-8 py-3 rounded-lg transition-colors">
            Visit Us
          </button> */}
        </div>
      </div>
    </div>
  );
}
