import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3NxdWUlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc3ODgxNTkwfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Masjid Jannatul Firdaus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-5xl md:text-7xl mb-4 text-center">Masjid Jannatul Firdaus</h1>
        <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl opacity-90">
          A place of worship, community, and spiritual growth
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition-colors">
            Prayer Times
          </button>
          <button className="bg-white hover:bg-white/90 text-primary px-8 py-3 rounded-lg transition-colors">
            Visit Us
          </button>
        </div>
      </div>
    </div>
  );
}
