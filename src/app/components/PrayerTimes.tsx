export function PrayerTimes() {
  const prayers = [
    { name: 'Fajr', time: '5:30 AM', iqamah: '5:45 AM' },
    { name: 'Dhuhr', time: '1:15 PM', iqamah: '1:30 PM' },
    { name: 'Asr', time: '4:45 PM', iqamah: '5:00 PM' },
    { name: 'Maghrib', time: '7:20 PM', iqamah: '7:25 PM' },
    { name: 'Isha', time: '8:45 PM', iqamah: '9:00 PM' },
  ];

  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-4 text-primary">Prayer Times</h2>
        <p className="text-center text-muted-foreground mb-12">Daily prayer schedule</p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {prayers.map((prayer) => (
            <div key={prayer.name} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl mb-3 text-primary">{prayer.name}</h3>
              <div className="space-y-2">
                <p className="text-lg">
                  <span className="text-muted-foreground text-sm block">Adhan</span>
                  {prayer.time}
                </p>
                <p className="text-lg">
                  <span className="text-muted-foreground text-sm block">Iqamah</span>
                  {prayer.iqamah}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Jumu'ah Prayer: 1:30 PM | Updated for May 2026
        </p>
      </div>
    </section>
  );
}
