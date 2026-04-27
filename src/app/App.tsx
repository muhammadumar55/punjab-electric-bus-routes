import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Screenshots } from './components/Screenshots';
import { HowItWorks } from './components/HowItWorks';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { DownloadSection } from './components/DownloadSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Screenshots />
      <HowItWorks />
      <About />
      <Stats />
      <DownloadSection />
      <Footer />
    </div>
  );
}