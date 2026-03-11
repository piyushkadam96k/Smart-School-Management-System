const features = [
  { icon: "💰", title: "Smart Fees", desc: "Track payments • Reminders • Defaulter list" },
  { icon: "📄", title: "Auto Report Cards", desc: "PDF in seconds • Any board" },
  { icon: "📱", title: "WhatsApp Alerts", desc: "Fees • Results • Attendance" },
  { icon: "🏫", title: "Class & Exam Mgmt", desc: "Students, subjects, marks, timetable" },
  { icon: "🔒", title: "Fully Offline", desc: "Data stays in your school computer" },
  { icon: "⚡", title: "Very Easy to Use", desc: "30-min training • Anyone can use" },
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-gradient-to-b from-[#05070f] to-[#0a0f1f]">
      <div className="max-w-screen-xl mx-auto px-5 sm:px-8">
        <h2 className="section-title text-center mb-12 sm:mb-16">Everything your school needs</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="feature-card glass rounded-2xl sm:rounded-3xl p-6 sm:p-10"
              style={{ animationDelay: `${(i % 3) * 80}ms` }}
            >
              <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">{f.icon}</div>
              <h3 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-3">{f.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
