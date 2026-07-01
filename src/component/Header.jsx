import { Link } from "react-router-dom"

function Header(){
    return<>
    <header className="bg-blue-500 text-white flex justify-between h-[50px] px-10">
        <h1>online shop</h1>
        <ul className="flex gap-10">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/product">Product</Link>
            <Link to="/contact">Contact</Link>
        </ul>
    </header>
    </>
}

export default Header