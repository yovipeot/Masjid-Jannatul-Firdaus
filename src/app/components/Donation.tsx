export function Donation() {
  return (
    <section className="py-20 px-4 bg-primary text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-6">Support Our Masjid</h2>
        <p className="text-lg mb-8 opacity-90">
          Your generous donations help us maintain our facilities, run educational programs,
          and serve our community. Every contribution makes a difference.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl mb-2">General Fund</h3>
            <p className="opacity-90">Support daily operations and programs</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl mb-2">Building Fund</h3>
            <p className="opacity-90">Help us expand and renovate</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl mb-2">Zakat</h3>
            <p className="opacity-90">Fulfill your obligatory charity</p>
          </div>
        </div>

        <button className="bg-white hover:bg-white/90 text-primary px-10 py-4 rounded-lg transition-colors text-lg">
          Donate Now
        </button>

        <p className="mt-6 text-sm opacity-80">
          Masjid Jannatul Firdaus is a registered 501(c)(3) nonprofit organization.
          All donations are tax-deductible.
        </p>
      </div>
    </section>
  );
}
