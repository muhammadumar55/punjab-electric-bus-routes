import { Download, Smartphone, Rocket } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    icon: Download,
    title: 'Download APK',
    description: 'Click the download button and get the installation file to your device.',
  },
  {
    number: '02',
    icon: Smartphone,
    title: 'Install on Your Phone',
    description: 'Open the APK file and follow simple installation prompts on your Android device.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Start Using Instantly',
    description: 'Launch Punjab E-Buses Routes and begin navigating your city with confidence.',
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#2E8B6C]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            className="text-5xl md:text-6xl font-bold text-[#1F2937] mb-4"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Get Started in Seconds
          </h2>
          <p
            className="text-lg md:text-xl text-[#1F2937]/70 max-w-2xl mx-auto"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Three simple steps separate you from effortless city navigation.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#1F7A5A]/20 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative text-center"
              >
                {/* Step number background */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className="text-[120px] font-bold text-[#1F7A5A]/5 leading-none"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {step.number}
                  </motion.div>
                </div>

                <div className="relative bg-[#F5F7F6] rounded-3xl p-10 hover:shadow-xl transition-shadow duration-300">
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#1F7A5A] rounded-2xl blur-xl opacity-30" />
                      <div className="relative bg-white rounded-2xl p-6 shadow-lg">
                        <step.icon className="w-12 h-12 text-[#1F7A5A]" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>

                  <h3
                    className="text-2xl font-bold text-[#1F2937] mb-4"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[#1F2937]/70 leading-relaxed"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 text-[#1F7A5A]/30 text-4xl">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
