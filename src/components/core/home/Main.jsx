import Experience from './Experience';
import Features from './Features';
import Hero from './Hero';
import Product from './Product';
import Services from './Services';

const Main = () => {
  return (
    <div className="bg-bgray h-full px-6">
      <Hero />
      <Experience />
      <Features />
      <Services />
      <Product />
    </div>
  );
};

export default Main;
