import { Link } from "react-router-dom";
import banner from "../assets/about/about-banner.jpg";
import Data from "../Xoogta/Data";

function AboutHero ()  {
  return (
    <section
      className="relative h-[650px] bg-cover bg-center pt-24 flex items-center"
      style={{
       backgroundImage: `url(${Data[11].image})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container mx-auto px-6 relative z-10 text-white">

        <h1 className="text-5xl md:text-6xl font-bold mb-5">
          About Our Shop
        </h1>

        <p className="text-lg max-w-2xl leading-8">
          Welcome to Our Shop. We provide high-quality products,
          affordable prices, and excellent customer service to
          make your online shopping experience simple and enjoyable.
        </p>

        <div className="mt-8 flex items-center gap-3 text-lg">

          <Link
            to="/"
            className="hover:text-yellow-300 duration-300"
          >
            Home
          </Link>

          <span>/</span>

          <span className="text-yellow-300">
            About
          </span>

        </div>

      </div>
    </section>
  );
};

export default AboutHero;