import Experience from './Experience';
import Features from './Features';
import Hero from './Hero';
import Product from './Product';
import Services from './Services';

const Main = () => {
  return (
    <div className="bg-bgray pb-4 h-full px-[5%]">
      <Hero />
      <Experience />
      <Features />
      <Services />
      <Product />
    </div>
  );
};

export default Main;
