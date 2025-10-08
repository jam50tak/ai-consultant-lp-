import Hero from '@/components/1.Hero';
import Purpose from '@/components/2.Purpose';
import Overview from '@/components/3.Overview';
import Curriculum from '@/components/4.Curriculum';
import Results from '@/components/5.Results';
import Pricing from '@/components/6.Pricing';
import Calendar from '@/components/7.Calendar';
import Advanced from '@/components/8.Advanced';
import FinalCTA from '@/components/9.FinalCTA';
import Footer from '@/components/10.Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Purpose />
      <Overview />
      <Curriculum />
      <Results />
      <Pricing />
      <Calendar />
      <Advanced />
      <FinalCTA />
      <Footer />
    </main>
  );
}
