import { Link } from "react-router-dom"
import { FaUser } from "react-icons/fa"
import { useSelector } from "react-redux"

function Header(){
const cartItem = useSelector((state) => state.cart.cartItem || []);
    return<>
    <header className="bg-blue-500 text-white flex justify-between h-[50px] px-10">
        <h1>online shop</h1>
        <ul className="flex gap-10 mt-2">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/product">Product</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/cart" className="relative"><a href="/cart" className="text-white">Cart</a><span className="absolute -top-2 -right-4 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">{cartItem.length}</span> </Link>
            <Link className="mt-1 textxl" to="/Login">
            <FaUser />
            </Link>
        </ul>
    </header>
    </>
}

export default Header