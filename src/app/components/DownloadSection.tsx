import { Download, FileDown, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function DownloadSection() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1F7A5A]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Main download card */}
          <div className="relative bg-gradient-to-br from-[#1F7A5A] to-[#2E8B6C] rounded-[3rem] p-12 md:p-16 shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

            {/* Grain texture */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
              }}
            />

            <div className="relative text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Ready to Navigate?
                </h2>
                <p
                  className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Download Punjab E-Buses Routes now and start exploring your city with confidence.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-10"
              >
                <a
                  href="/punjab_electric_bus_routes.apk"
                  download
                  className="
                    group
                    inline-flex items-center justify-center gap-4
                    w-full sm:w-auto
                    px-8 sm:px-12
                    py-5 sm:py-6
                    bg-white text-[#1F7A5A]
                    rounded-2xl font-bold text-lg sm:text-xl
                    shadow-xl
                    hover:shadow-2xl
                    active:scale-95 active:shadow-md
                    transition-all duration-200
                    mx-auto"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  <Download className="w-7 h-7 sm:w-8 sm:h-8 group-hover:animate-bounce" strokeWidth={2} />
                  Download APK Now
                  <FileDown className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
                </a>
                <p
                  className="mt-4 text-white/70 text-sm"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Version 1.0.0 • ~49 MB
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <p
                    className="text-white font-semibold"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    ✓ No account required
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <p
                    className="text-white font-semibold"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    ✓ 100% free forever
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <p
                    className="text-white font-semibold"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    ✓ Works offline
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-10 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-2xl mx-auto"
              >
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-white/80 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div className="text-left">
                    <p
                      className="text-white/90 text-sm leading-relaxed"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      <strong>Installation Note:</strong> You may need to enable "Install from Unknown Sources" in your Android settings. This is a normal security measure for apps downloaded outside the Google Play Store.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
