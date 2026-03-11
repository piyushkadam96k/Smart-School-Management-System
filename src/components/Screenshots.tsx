"use client";
import { useState } from "react";
import { FaArrowRight, FaTimes, FaSearchPlus } from "react-icons/fa";

export default function Screenshots() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Generate an array of 22 images
  const screenshots = Array.from({ length: 22 }, (_, i) => ({
    url: `/gallery/${i + 1}.png`,
    title: `Screenshot ${i + 1}`,
  }));

  return (
    <section id="screenshots" className="py-20 sm:py-28 bg-[#0a0f1f]">
      <div className="max-w-screen-xl mx-auto px-5 sm:px-8">
        <h2 className="section-title text-center mb-4">See ShalaConnect in Action</h2>
        <p className="text-gray-400 text-center text-lg sm:text-xl mb-12 sm:mb-16 max-w-2xl mx-auto">
          Take a look at how our clean and intuitive interface helps you manage 
          your school more efficiently.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          {screenshots.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(img.url)}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden glass cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(0,212,255,0.4)]"
            >
              {/* Image Container */}
              <div className="relative aspect-square w-full overflow-hidden bg-gray-900">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />

                {/* Zoom Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/10 transition-colors duration-300">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 group-hover:bg-[#00d4ff] group-hover:text-black group-hover:border-[#00d4ff] transition-all duration-300 group-hover:scale-110">
                    <FaSearchPlus className="text-sm" />
                  </div>
                </div>
              </div>

              {/* Text Container (Hover Only) */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                <h3 className="font-semibold text-xs sm:text-sm text-center text-white">
                  {img.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action WhatsApp */}
        <div className="mt-12 sm:mt-16 text-center">
          <a
            href="https://wa.me/917829396954?text=Hi%20ShalaConnect%20Team%2C%20I%20saw%20the%20screenshots%20and%20want%20to%20see%20a%20full%20demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#00d4ff] hover:text-[#00ff9d] font-semibold text-sm sm:text-base transition-colors"
          >
            Get a personal guided demo <FaArrowRight />
          </a>
        </div>
      </div>

      {/* Image Modal Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 z-10 w-10 h-10 bg-white/10 hover:bg-red-500 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Close preview"
            >
              <FaTimes className="text-xl" />
            </button>
            <img
              src={selectedImage}
              alt="Screenshot Preview"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl ring-1 ring-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}
