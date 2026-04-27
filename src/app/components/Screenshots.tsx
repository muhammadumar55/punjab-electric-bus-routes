import { motion } from 'motion/react';
const image1 = '/assets/screen1.jpeg';
const image2 = '/assets/screen2.jpeg';
const image3 = '/assets/screen3.jpeg';
const image4 = '/assets/screen4.jpeg';
const screenshots = [
  {
    title: 'City Search',
    image: image1,
  },
  {
    title: 'City Routes',
    image: image2,
  },
  {
    title: 'Stops & Timings',
    image: image3,
  },
  {
    title: 'Fair Information',
    image: image4,
  }
];

export function Screenshots() {
  return (
    <section id="screenshots" className="relative py-24 bg-[#F5F7F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl font-bold text-[#1F2937] mb-4"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            See It in Action
          </h2>

          <p
            className="text-lg md:text-xl text-[#1F2937]/70 max-w-2xl mx-auto"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            A glimpse of what makes your travel experience simple, fast, and reliable.
          </p>
        </motion.div>

        {/* Screenshots */}
        <div className="relative">

          {/* Horizontal scroll */}
          <div
            className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={screenshot.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 snap-center"
              >

                {/* Phone */}
                <div className="relative">

                  {/* Shadow */}
                  <div className="absolute inset-0 bg-[#1F7A5A]/20 rounded-[3rem] blur-2xl scale-95" />

                  {/* Phone body */}
                  <div className="relative bg-[#1F2937] rounded-[3rem] p-3 shadow-2xl w-[280px] h-[580px]">

                    {/* Screen */}
                    <div className="relative bg-[#0F5A3C] rounded-[2.5rem] w-full h-full overflow-hidden">

                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1F2937] rounded-b-3xl z-10" />

                      {/* Screenshot Image */}
                      <img
                        src={screenshot.image}
                        alt={screenshot.title}
                        className="w-full h-full object-cover pt-6"
                      />

                      {/* Subtle overlay */}
                      <div className="absolute inset-0 bg-black/5 pointer-events-none" />

                    </div>
                  </div>
                </div>

                {/* Label */}
                <p
                  className="text-center mt-6 text-[#1F2937] font-semibold"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {screenshot.title}
                </p>

              </motion.div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {screenshots.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-[#1F7A5A]/30"
              />
            ))}
          </div>

        </div>
      </div>

      {/* Hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}