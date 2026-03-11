const comparisons = [
  { feature: "Internet Required", others: "Yes", us: "NO" },
  { feature: "Monthly Fees", others: "Yes", us: "NO" },
  { feature: "WhatsApp Alerts", others: "Extra", us: "Free" },
  { feature: "Data Location", others: "Cloud", us: "Your PC" },
];

const reasons = [
  { num: "01", title: "One-time payment", sub: "No monthly fees" },
  { num: "02", title: "Works offline", sub: "No internet needed" },
  { num: "03", title: "Your data stays yours", sub: "Local storage only" },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-[#0a0f1f]">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-12 gap-10 sm:gap-16 items-center">

          {/* Left: Reasons */}
          <div className="md:col-span-5">
            <h2 className="section-title">Why schools choose ShalaConnect</h2>
            <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-8">
              {reasons.map((r) => (
                <div key={r.num} className="flex gap-4 sm:gap-5 items-start">
                  <div className="text-2xl sm:text-4xl text-[#00ff9d] font-bold flex-shrink-0">{r.num}</div>
                  <div>
                    <div className="font-semibold text-base sm:text-lg">{r.title}</div>
                    <div className="text-gray-400 text-sm">{r.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Comparison Table */}
          <div className="md:col-span-7 w-full overflow-hidden">
            <div className="glass rounded-2xl sm:rounded-3xl p-1 sm:p-2 w-full">
              <div className="w-full overflow-x-auto overflow-y-hidden rounded-xl sm:rounded-2xl custom-scrollbar">
                <table className="w-full min-w-[500px] text-left text-sm sm:text-base border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="py-4 sm:py-6 px-4 sm:px-6 text-gray-400 font-medium whitespace-nowrap">Feature</th>
                      <th className="py-4 sm:py-6 px-4 sm:px-6 text-center text-red-400 font-medium">Others</th>
                      <th className="py-4 sm:py-6 px-4 sm:px-6 text-center text-[#00ff9d] font-medium">ShalaConnect</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {comparisons.map((row) => (
                      <tr key={row.feature}>
                        <td className="py-4 sm:py-5 px-4 sm:px-6 whitespace-nowrap">{row.feature}</td>
                        <td className="text-center text-red-400 px-4 sm:px-6">{row.others}</td>
                        <td className="text-center font-bold text-emerald-400 px-4 sm:px-6">{row.us}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
