import { motion } from 'motion/react';
import { Users, Heart, Shield } from 'lucide-react';

export function About() {
  return (
    <section id='about' className="relative py-24 bg-[#F5F7F6] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1F7A5A]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl font-bold text-[#1F2937] mb-6"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            About Punjab E-Buses Routes
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p
              className="text-xl text-[#1F2937]/80 leading-relaxed"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Punjab E-Buses Routes is your comprehensive transit companion designed for daily commuters, tourists, and anyone who moves through the city. We believe public transportation should be accessible to everyone, regardless of internet connectivity or technical expertise.
            </p>
            <p
              className="text-xl text-[#1F2937]/80 leading-relaxed"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Built with privacy in mind, Punjab E-Buses Routes doesn't track your location, store your journey history, or require any personal information. Just download, install, and go.
            </p>
            <p
              className="text-xl text-[#1F2937]/80 leading-relaxed"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Whether you're a student commuting to university, a professional navigating to work, or a visitor exploring a new city, Punjab E-Buses Routes makes public transit simple, reliable, and stress-free.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-[#1F7A5A]/10 rounded-2xl p-4">
                  <Users className="w-8 h-8 text-[#1F7A5A]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold text-[#1F2937] mb-2"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Who It's For
                  </h3>
                  <p
                    className="text-[#1F2937]/70"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    Daily commuters, tourists, students, seniors—anyone who uses public transportation and values simplicity.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-[#2E8B6C]/10 rounded-2xl p-4">
                  <Heart className="w-8 h-8 text-[#2E8B6C]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold text-[#1F2937] mb-2"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Why It's Useful
                  </h3>
                  <p
                    className="text-[#1F2937]/70"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    Save data, save battery, save time. Navigate confidently even in areas with poor connectivity.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-[#1F7A5A]/10 rounded-2xl p-4">
                  <Shield className="w-8 h-8 text-[#1F7A5A]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold text-[#1F2937] mb-2"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Privacy First
                  </h3>
                  <p
                    className="text-[#1F2937]/70"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    Zero tracking, zero data collection, zero compromise. Your journeys are yours alone.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
