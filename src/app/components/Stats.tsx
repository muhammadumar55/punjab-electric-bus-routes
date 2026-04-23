import { motion } from 'motion/react';
import { MapPin, Route, Navigation } from 'lucide-react';

const stats = [
  {
    icon: MapPin,
    number: '6+',
    label: 'Cities Covered',
    color: '#1F7A5A',
  },
  {
    icon: Route,
    number: '44+',
    label: 'Routes available',
    color: '#2E8B6C',
  },
  {
    icon: Navigation,
    number: '942+',
    label: 'Stops',
    color: '#1F7A5A',
  },
];

export function Stats() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#1F7A5A] to-[#2E8B6C] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Coverage You Can Trust
          </h2>
          <p
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Comprehensive transit data for cities across the country.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-white/5 rounded-3xl backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-10 text-center border border-white/20 hover:border-white/40 transition-colors duration-300">
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white rounded-2xl blur-lg opacity-30" />
                    <div className="relative bg-white/20 backdrop-blur-sm rounded-2xl p-5 border border-white/30">
                      <stat.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
                <div
                  className="text-6xl md:text-7xl font-bold text-white mb-2"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {stat.number}
                </div>
                <div
                  className="text-xl text-white/90 font-medium"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
