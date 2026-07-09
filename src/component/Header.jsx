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


const navigate = useNavigate();

const { user } = useUser();

const [menuOpen,setMenuOpen] = useState(false);



const cartItem = useSelector(
(state)=>state.cart.cartItem || []
);



const cartCount = cartItem.reduce(
(sum,item)=>sum + item.quantity,
0
);



const navClass = ({isActive})=>

isActive

?
"text-yellow-300 border-b-2 border-yellow-300 pb-1"

:

"hover:text-yellow-300 transition";





const closeMenu=()=>setMenuOpen(false);





return (


<header className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-lg z-50">


<div className="container mx-auto px-6 py-4 flex justify-between items-center">



<NavLink
to="/"
className="flex items-center gap-2 text-2xl font-bold"
>

<FaStore/>

Online Shop

</NavLink>






<nav className="hidden md:block">

<ul className="flex items-center gap-8">


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
className="relative"
>

<FaShoppingCart size={24}/>

<span className="absolute -top-3 -right-3 bg-red-500 rounded-full w-5 h-5 text-xs flex items-center justify-center">

{cartCount}

</span>

</NavLink>

</li>





<li>

{
user ?


<button
onClick={()=>navigate("/profile")}
className="flex items-center gap-2 hover:text-yellow-300"
>

<FaUser/>

{user.name}

</button>


:

<NavLink to="/login">

<FaUser size={20}/>

</NavLink>

}


</li>


</ul>

</nav>






<button

onClick={()=>setMenuOpen(!menuOpen)}

className="md:hidden text-2xl"

>

{
menuOpen ? <FaTimes/>:<FaBars/>
}

</button>



</div>









{
menuOpen &&

<div className="md:hidden bg-blue-700 py-6">


<ul className="flex flex-col items-center gap-6 text-lg">


<li>
<NavLink onClick={closeMenu} to="/" className={navClass}>
Home
</NavLink>
</li>



<li>
<NavLink onClick={closeMenu} to="/about" className={navClass}>
About
</NavLink>
</li>




<li>
<NavLink onClick={closeMenu} to="/product" className={navClass}>
Product
</NavLink>
</li>



<li>
<NavLink onClick={closeMenu} to="/contact" className={navClass}>
Contact
</NavLink>
</li>





<li>

<NavLink
onClick={closeMenu}
to="/cart"
className="relative"
>

<FaShoppingCart size={24}/>

<span className="absolute -top-3 -right-3 bg-red-500 rounded-full w-5 h-5 text-xs flex justify-center items-center">

{cartCount}

</span>


</NavLink>

</li>





<li>

{
user ?

<button

onClick={()=>{

navigate("/profile");
closeMenu();

}}

className="flex items-center gap-2"

>

<FaUser/>

{user.name}

</button>


:

<NavLink
onClick={closeMenu}
to="/login"
>

<FaUser/>

</NavLink>

}


</li>



</ul>


</div>

}



</header>


);


}


export default Header;