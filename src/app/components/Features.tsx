import { WifiOff, Zap, UserX, Smartphone, MapPin, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { useRef } from 'react';

const features = [
  {
    icon: WifiOff,
    title: 'Works Offline',
    description: 'Download maps and schedules once, use them anywhere without internet connection.',
  },
  {
    icon: Zap,
    title: 'Fast & Lightweight',
    description: 'Optimized for performance. Lightning-fast searches and minimal battery drain.',
  },
  {
    icon: UserX,
    title: 'No Login Required',
    description: 'Start using immediately. No accounts, no tracking, no personal data collection.',
  },
  {
    icon: Smartphone,
    title: 'Simple Interface',
    description: 'Clean, intuitive design that gets you where you need to go without confusion.',
  },
  {
    icon: MapPin,
    title: 'Accurate Information',
    description: 'Up-to-date routes, stops, and schedules regularly synced with official sources.',
  },
  {
    icon: Clock,
    title: 'Real-Time Updates',
    description: 'Get live departure times and route changes when connected to the internet.',
  },
];

export function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id='features' ref={sectionRef} className="relative py-24 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#1F7A5A]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2E8B6C]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
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
            Built for Real People
          </h2>
          <p
            className="text-lg md:text-xl text-[#1F2937]/70 max-w-2xl mx-auto"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Everything you need to navigate your city, nothing you don't.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1F7A5A]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-[#F5F7F6] rounded-3xl p-8 h-full hover:shadow-lg transition-shadow duration-300">
                <div className="mb-6">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-[#1F7A5A] rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
                    <div className="relative bg-white rounded-2xl p-4 shadow-sm">
                      <feature.icon className="w-8 h-8 text-[#1F7A5A]" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
                <h3
                  className="text-2xl font-bold text-[#1F2937] mb-3"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-[#1F2937]/70 leading-relaxed"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
