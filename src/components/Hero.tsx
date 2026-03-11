"use client";
import { useState } from "react";

function getCurrentPassword() {
  const now = new Date();
  let hours = now.getHours() % 12;
  if (hours === 0) hours = 12;
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return String(hours).padStart(2, "0") + minutes; // Examples: 1:23 PM → "0123",  9:05 AM → "0905",  12:45 PM → "1245"
}

export default function Hero() {
  const requestBrochurePassword = () => {
    const entered = prompt(
      "Enter current 4-digit code to download brochure:\n\n(Changes every minute)"
    );
    if (!entered) return;

    const realPass = getCurrentPassword();

    if (entered === realPass) {
      // Telegram link to download the software without Google warnings
      const brochureUrl = "https://t.me/githubpiyushkadam96k/5";
      window.open(brochureUrl, "_blank");
    } else {
      alert(`Wrong code.\n\nThe code changes every minute.\nPlease try again.`);
      setTimeout(requestBrochurePassword, 400);
    }
  };

  return (
    <section className="hero-bg min-h-screen flex items-center pt-24 sm:pt-28 pb-16 px-5 sm:px-8">
      <div className="max-w-screen-xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

          {/* ─── Text Column ─── */}
          <div className="flex-1 w-full">
            <h1
              className="font-bold tracking-tight mb-5 sm:mb-7 leading-[1.08]"
              style={{ fontSize: "clamp(2.2rem, 7vw, 5rem)" }}
            >
              The smartest way<br />to run your school
            </h1>

            <p className="text-base sm:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed">
              Complete school management • Zero monthly fees<br className="hidden sm:block" />
              Works offline • One-time payment only
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a
                href="#screenshots"
                className="cta-button px-7 py-4 sm:py-5 bg-white text-black font-semibold text-base sm:text-lg rounded-2xl flex items-center justify-center gap-3 shadow-lg"
              >
                <i className="fa-solid fa-image" /> View Screenshots
              </a>

              <a
                href="https://wa.me/917829396954?text=Hi%20Team%2C%20I%20want%20a%20personal%20demo%20and%20pricing%20for%20my%20school"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button px-7 py-4 sm:py-5 border-2 border-[#00ff9d] font-semibold text-base sm:text-lg rounded-2xl flex items-center justify-center gap-3 hover:bg-[#00ff9d]/10 transition-colors"
              >
                <i className="fa-brands fa-whatsapp text-xl sm:text-2xl" /> Chat on WhatsApp
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 sm:gap-12 text-sm sm:text-base opacity-90">
              <div className="flex items-center gap-2.5">
                <i className="fa-solid fa-check text-[#00ff9d]" /> One-time payment
              </div>
              <div className="flex items-center gap-2.5">
                <i className="fa-solid fa-check text-[#00ff9d]" /> 100% offline
              </div>
            </div>
          </div>

          {/* ─── Dashboard Card Column ─── */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <div className="dashboard-card p-3 sm:p-4 w-full max-w-[380px] sm:max-w-[460px]">
              {/* Card Header */}
              <div className="bg-[#0a0f1c] px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between rounded-t-2xl text-sm">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#00d4ff] to-[#00ff9d] rounded-xl flex items-center justify-center text-black text-lg flex-shrink-0">
                    🏫
                  </div>
                  <div>
                    <div className="font-semibold">Demo School</div>
                    <div className="text-xs text-gray-400">312 students</div>
                  </div>
                </div>
                <div className="px-3 py-1 bg-[#00ff9d]/10 text-[#00ff9d] text-xs font-medium rounded-2xl whitespace-nowrap">
                  98% Attendance
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3 sm:p-5 bg-[#111827] rounded-b-2xl">
                {[
                  { value: "₹1.8L", label: "Fees", color: "text-[#00ff9d]" },
                  { value: "41", label: "Pending", color: "text-white" },
                  { value: "12", label: "New", color: "text-[#00d4ff]" },
                ].map(({ value, label, color }) => (
                  <div key={label} className="glass rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center">
                    <div className={`text-xl sm:text-3xl font-semibold ${color}`}>{value}</div>
                    <div className="text-xs mt-1 text-gray-400">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
