import { Download, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';
import Logo from '../../assets/app_logo.svg';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F5F7F6]">
      {/* Organic background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute -top-48 -right-48 w-96 h-96 bg-[#1F7A5A] rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-[#2E8B6C] rounded-full blur-3xl"
        />
      </div>

      {/* Grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#1F7A5A] rounded-3xl blur-xl opacity-30" />
            <div className="relative bg-white rounded-2xl p-4 shadow-xl flex items-center justify-center">
              <img
                src={Logo}
                alt="App Logo"
                className="w-20 h-20 object-contain"
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#1F2937] mb-6"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Punjab E-Buses Routes
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xl md:text-2xl text-[#1F7A5A] font-semibold mb-4"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          Navigate Your City with Confidence
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-lg md:text-xl text-[#1F2937]/70 max-w-2xl mx-auto mb-12"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          Your complete offline transit companion. Real-time routes, schedules, and navigation—all in your pocket, no internet required.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="/punjab_electric_bus_routes.apk"
            download
            className="group relative px-8 py-4 bg-[#1F7A5A] text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            <Download className="w-6 h-6 group-hover:animate-bounce" />
            Download APK
            <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <div className="flex flex-col items-center sm:items-start gap-1">
            <p className="text-sm text-[#1F2937]/60" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              ✓ No sign-up required
            </p>
            <p className="text-sm text-[#1F2937]/60" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              ✓ Works completely offline
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16"
        >
          <div className="inline-flex items-center gap-2 text-[#1F2937]/50 text-sm" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            <span>Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              ↓
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
