import Experience from '../components/simple/home/Experience';
import Features from '../components/simple/home/Features';
import Hero from '../components/simple/home/Hero';
import Product from '../components/simple/home/Product';
import Services from '../components/simple/home/Services';

const Home = () => {
  return (
    <div className="bg-bgray h-full px-[5%] pb-8">
      <Hero />
      <Experience />
      <Features />
      <Services />
      <Product />
    </div>
  );
};

export default Home;
