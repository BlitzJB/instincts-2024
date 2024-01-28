import GallerySection from '@/sections/landing/gallery-section';
import HeroSection from '@/sections/landing/hero-section';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <GallerySection/>
    </main>
  );
}
