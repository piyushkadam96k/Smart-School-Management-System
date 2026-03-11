"use client";

function getCurrentPassword() {
  const now = new Date();
  let hours = now.getHours() % 12;
  if (hours === 0) hours = 12;
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return String(hours).padStart(2, "0") + minutes;
}

export default function CTA() {
  const requestBrochurePassword = () => {
    const entered = prompt("Enter current 4-digit code to download brochure:\n\n(Changes every minute)");
    if (!entered) return;
    if (entered === getCurrentPassword()) {
      window.open("https://t.me/githubpiyushkadam96k/5", "_blank");
    } else {
      alert(`Wrong code.\n\nThe code changes every minute.\nPlease try again.`);
      setTimeout(requestBrochurePassword, 400);
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText("https://amitkadam.netlify.app/");
    alert("Link copied!");
  };

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#05070f] to-black">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-5 sm:mb-8 leading-tight">
          Ready to go digital?
        </h2>
        <p className="text-base sm:text-2xl text-gray-300 mb-8 sm:mb-12">
          Get demo + pricing → or download our brochure
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-10 sm:mb-16">
          <a
            href="https://wa.me/917829396954?text=Hello%20ShalaConnect%20Team%2C%20please%20send%20me%20the%20demo%20and%20pricing%20details%20for%20my%20school"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#00d4ff] to-[#00ff9d] text-black font-semibold text-base sm:text-xl px-8 sm:px-14 py-4 sm:py-7 rounded-2xl sm:rounded-3xl shadow-2xl shadow-[#00ff9d]/30"
          >
            <i className="fa-brands fa-whatsapp text-2xl sm:text-4xl" />
            Message on WhatsApp
          </a>

          <button
            onClick={requestBrochurePassword}
            className="cta-button inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 font-semibold text-base sm:text-xl px-8 sm:px-14 py-4 sm:py-7 rounded-2xl sm:rounded-3xl backdrop-blur-sm transition-all"
          >
            <i className="fa-solid fa-file-arrow-down text-2xl sm:text-4xl" />
            Download Brochure
          </button>
        </div>

        {/* Share Row */}
        <div className="flex flex-col items-center gap-4 mb-10">
          <p className="text-gray-400 text-sm sm:text-base">Share with other school owners</p>
          <div className="flex gap-6 text-2xl sm:text-3xl">
            <a
              href="https://wa.me/?text=Check%20out%20ShalaConnect%20–%20offline%20school%20management%20https://amitkadam.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00ff9d] transition-colors"
            >
              <i className="fa-brands fa-whatsapp" />
            </a>
            <a
              href="https://twitter.com/intent/tweet?text=ShalaConnect%20-%20Offline%20school%20management%20system&url=https://amitkadam.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00d4ff] transition-colors"
            >
              <i className="fa-brands fa-x-twitter" />
            </a>
            <button onClick={copyLink} className="hover:text-[#00ff9d] transition-colors">
              <i className="fa-solid fa-link" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-sm text-gray-500">
          Built by{" "}
          <a
            href="https://github.com/piyushkadam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00d4ff] transition-colors"
          >
            Piyush Kadam
          </a>{" "}
          •{" "}
          <a
            href="https://amitkadam.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00d4ff] transition-colors"
          >
            amitkadam.netlify.app
          </a>
        </div>
      </div>
    </section>
  );
}
