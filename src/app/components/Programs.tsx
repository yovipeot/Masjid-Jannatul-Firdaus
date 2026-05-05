export function Programs() {
  const programs = [
    {
      title: 'Quran Classes',
      description: 'Learn Tajweed and memorization for all ages, from children to adults.',
      schedule: 'Mon-Fri, 6:00 PM - 8:00 PM',
    },
    {
      title: 'Islamic Studies',
      description: 'Weekly lessons on Aqeedah, Fiqh, and Seerah for the entire family.',
      schedule: 'Saturdays, 10:00 AM - 12:00 PM',
    },
    {
      title: 'Youth Programs',
      description: 'Engaging activities and mentorship for young Muslims ages 13-18.',
      schedule: 'Sundays, 2:00 PM - 4:00 PM',
    },
    {
      title: 'Community Iftar',
      description: 'Daily community meals during Ramadan, bringing families together.',
      schedule: 'During Ramadan',
    },
    {
      title: "Women's Circle",
      description: 'Sisters gathering for Quran study, discussion, and mutual support.',
      schedule: 'Thursdays, 7:00 PM - 9:00 PM',
    },
    {
      title: 'Arabic Language',
      description: 'Beginner to advanced Arabic courses to understand the Quran better.',
      schedule: 'Wednesdays, 7:00 PM - 8:30 PM',
    },
  ];

  return (
    <section className="py-20 px-4 bg-accent/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-4 text-primary">Our Programs</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Educational and community programs for all ages
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div key={program.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl mb-3 text-primary">{program.title}</h3>
              <p className="text-foreground/70 mb-4">{program.description}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {program.schedule}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
