import { Smartphone, Mail, Github, Twitter, LinkedinIcon } from 'lucide-react';
import Logo from '/assets/app_logo.svg';
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#1F2937] text-white overflow-hidden">


      <div className="max-w-7xl mx-auto px-6 py-16">


        {/* Bottom section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className="text-white/60 text-sm text-center md:text-left"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              © {currentYear} Punjab E-Buses Routes. All rights reserved.
            </p>
            {/* Connect */}
            <div>
              <div className="flex gap-3 mb-6">

                <a
                  href="https://www.linkedin.com/in/muhammad-umar-machrani55/"
                  className="bg-white/10 hover:bg-[#1F7A5A] rounded-xl p-3 transition-colors"
                  aria-label="Email"
                >
                  <LinkedinIcon className="w-5 h-5" strokeWidth={1.5} />
                </a>
                <a
                  href="https://github.com/muhammadumar55"
                  className="bg-white/10 hover:bg-[#1F7A5A] rounded-xl p-3 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
