import Experience from '../simple/home/Experience';
import Features from '../simple/home/Features';
import Hero from '../simple/home/Hero';
import Product from '../simple/home/Product';
import Services from '../simple/home/Services';

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
