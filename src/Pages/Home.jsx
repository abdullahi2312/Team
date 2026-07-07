import Hero from "../component/Hero";
import Categories from "../component/Categories ";
import FeaturedProducts from "../component/FeaturedProducts";
import WhyChooseUs from "../component/WhyChooseUs";
import SpecialOffer from "../component/SpecialOffer";
import Testimonials from "../component/Testimonials ";
import Newsletter from "../component/Newsletter";

function Home(){
    return(
    <>

    <Hero/>
    <Categories/>
    <FeaturedProducts/>
    <WhyChooseUs/>
    <SpecialOffer/>
    <Testimonials/>
    <Newsletter/>

    </>
        
     
    ); 
  }
  
  export default Home;