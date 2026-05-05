import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6 text-primary">About Our Masjid</h2>
            <div className="space-y-4 text-lg text-foreground/80">
              <p>
                Masjid Jannatul Firdaus serves as a spiritual sanctuary and community center,
                welcoming Muslims and neighbors from all backgrounds to worship, learn, and grow together.
              </p>
              <p>
                Our mission is to provide a welcoming space for daily prayers, educational programs,
                and community events that strengthen faith and foster unity among Muslims.
              </p>
              <p>
                We strive to embody the values of compassion, knowledge, and service,
                working together to build a better community for all.
              </p>
            </div>
          </div>

          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1535117423468-de0ff056882e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb3NxdWUlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc3ODgxNTkwfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Mosque architecture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
