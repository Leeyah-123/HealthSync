import Header from './Header.jsx'
import Navbar from './Navbar.jsx'
import Experience from './Experience.jsx'
import Features from './Features.jsx'
import Services from './Services.jsx'
import Product from './Product.jsx'
const Body = () => {
  return (
    <div className='bg-bgray h-full px-6'>
      <Navbar />
      <Header />
      <Experience />
      <Features />
      <Services />
      <Product />
    </div>
  )
}

export default Body
