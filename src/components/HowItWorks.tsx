const steps = [
  { num: "1", title: "We Install", desc: "2 hours on your computer" },
  { num: "2", title: "We Train", desc: "30-minute session for your team" },
  { num: "3", title: "You Run", desc: "Fully digital from day one" },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 sm:py-28 bg-[#05070f]">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-8">
        <h2 className="section-title text-center mb-12 sm:mb-16">Ready in just one day</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.num} className="text-center">
              <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#00d4ff] to-[#00ff9d] text-black rounded-2xl sm:rounded-3xl flex items-center justify-center text-3xl sm:text-5xl font-bold mb-5 sm:mb-6">
                {step.num}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">{step.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
