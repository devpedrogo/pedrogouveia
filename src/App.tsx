import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#050811] text-slate-200 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <TechStack />
        <Footer />
      </main>
    </div>
  );
}

export default App;
