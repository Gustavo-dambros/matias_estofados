import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

export default App;