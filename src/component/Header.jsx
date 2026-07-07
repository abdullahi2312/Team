import { NavLink, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaStore,
} from "react-icons/fa";

import { useSelector } from "react-redux";
import { useState } from "react";
import { useUser } from "../Context/Usercontext";


function Header() {


  const cartItem = useSelector(
    (state) => state.cart.cartItem || []
  );


  const { user } = useUser();


  const navigate = useNavigate();


  const [menuOpen, setMenuOpen] = useState(false);



  const navClass = ({ isActive }) =>
    isActive
      ? "text-yellow-300 border-b-2 border-yellow-300 pb-1 transition-all duration-300"
      : "hover:text-yellow-300 hover:scale-105 transition-all duration-300";



  return (

    <header className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-lg z-50">


      <div className="container mx-auto px-6 py-4 flex items-center justify-between">



        <NavLink
          to="/"
          className="flex items-center gap-2 text-2xl font-bold"
        >

          <FaStore className="text-white text-3xl" />

          <span>
            Online Shop
          </span>

        </NavLink>





        <nav className="hidden md:block">


          <ul className="flex items-center gap-8 font-medium">



            <li>
              <NavLink to="/" className={navClass}>
                Home
              </NavLink>
            </li>



            <li>
              <NavLink to="/about" className={navClass}>
                About
              </NavLink>
            </li>



            <li>
              <NavLink to="/product" className={navClass}>
                Product
              </NavLink>
            </li>



            <li>
              <NavLink to="/contact" className={navClass}>
                Contact
              </NavLink>
            </li>





            <li>

              <NavLink
                to="/cart"
                className="relative hover:text-yellow-300 transition"
              >

                <FaShoppingCart size={24}/>


                <span className="absolute -top-2 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold">

                  {cartItem.length}

                </span>


              </NavLink>

            </li>





            <li>


              {
                user ? (


                  <button

                    onClick={()=>navigate("/profile")}

                    className="flex items-center gap-2 hover:text-yellow-300 transition"

                  >

                    <FaUser/>

                    <span>
                      {user.name}
                    </span>


                  </button>


                )

                :


                (

                  <NavLink

                    to="/login"

                    className="text-xl hover:text-yellow-300 transition"

                  >

                    <FaUser/>

                  </NavLink>


                )


              }


            </li>




          </ul>


        </nav>






        <button

          className="md:hidden text-2xl"

          onClick={()=>setMenuOpen(!menuOpen)}

        >

          {
            menuOpen 
            ? <FaTimes/>
            : <FaBars/>
          }


        </button>



      </div>







      <div

        className={`md:hidden bg-blue-700 overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-[500px] py-5" : "max-h-0"
        }`}

      >



        <ul className="flex flex-col items-center gap-6 text-lg font-medium">



          <li>
            <NavLink
              to="/"
              className={navClass}
              onClick={()=>setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>



          <li>
            <NavLink
              to="/about"
              className={navClass}
              onClick={()=>setMenuOpen(false)}
            >
              About
            </NavLink>
          </li>



          <li>
            <NavLink
              to="/product"
              className={navClass}
              onClick={()=>setMenuOpen(false)}
            >
              Product
            </NavLink>
          </li>



          <li>
            <NavLink
              to="/contact"
              className={navClass}
              onClick={()=>setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>





          <li>

            <NavLink
              to="/cart"
              className="relative hover:text-yellow-300"
              onClick={()=>setMenuOpen(false)}
            >

              <FaShoppingCart size={24}/>

              <span className="absolute -top-2 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold">

                {cartItem.length}

              </span>


            </NavLink>


          </li>





          <li>


          {

            user ?


            (

              <button

                onClick={()=>{

                  navigate("/profile");

                  setMenuOpen(false);

                }}

                className="flex items-center gap-2 hover:text-yellow-300"

              >

                <FaUser/>

                {user.name}


              </button>

            )


            :


            (

              <NavLink

                to="/login"

                onClick={()=>setMenuOpen(false)}

                className="text-xl hover:text-yellow-300"

              >

                <FaUser/>

              </NavLink>

            )


          }


          </li>



        </ul>


      </div>




    </header>

  );


}


export default Header;