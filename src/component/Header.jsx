import { NavLink, useNavigate } from "react-router-dom";
import { FaUser, FaShoppingBag, FaBars, FaTimes, FaStore } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useUser } from "../Context/Usercontext";

function Header() {
  const navigate = useNavigate();
  const { user } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItem = useSelector((state) => state.cart.cartItem || []);
  const cartCount = cartItem.reduce((sum, item) => sum + item.quantity, 0);
  const navClass = ({ isActive }) => `text-sm font-semibold transition ${isActive ? "text-indigo-600" : "text-slate-600 hover:text-indigo-600"}`;
  const closeMenu = () => setMenuOpen(false);
  const links = [["/", "Home"], ["/about", "About"], ["/product", "Shop"], ["/contact", "Contact"]];

  return <header className="fixed inset-x-0 top-0 z-50 border-b border-blue-400/50 bg-blue-600 text-white shadow-lg shadow-blue-900/10">
    <div className="site-container flex h-[76px] items-center justify-between gap-5">
      <NavLink to="/" className="flex items-center gap-2.5 text-xl font-black tracking-tight text-white">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-blue-600 shadow-lg shadow-blue-800/20"><FaStore /></span>
        Online Shop
      </NavLink>
      <nav className="hidden items-center gap-8 md:flex">{links.map(([to, label]) => <NavLink key={to} to={to} className={({isActive}) => `text-sm font-semibold transition ${isActive ? "text-white" : "text-blue-100 hover:text-white"}`}>{label}</NavLink>)}</nav>
      <div className="hidden items-center gap-3 md:flex">
        <NavLink to="/cart" aria-label="Shopping cart" className="relative grid h-11 w-11 place-items-center rounded-xl bg-white/15 text-white transition hover:bg-white/25">
          <FaShoppingBag /><span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-amber-400 px-1 text-[10px] font-bold text-slate-950">{cartCount}</span>
        </NavLink>
        <button onClick={() => navigate(user ? "/profile" : "/login")} aria-label={user ? "Open profile" : "Login"} className="grid h-11 w-11 place-items-center rounded-xl bg-white text-blue-600 shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-50"><FaUser /></button>
      </div>
      <button onClick={() => setMenuOpen(!menuOpen)} className="grid h-11 w-11 place-items-center rounded-xl bg-white/15 text-white md:hidden" aria-label="Toggle menu">{menuOpen ? <FaTimes /> : <FaBars />}</button>
    </div>
    {menuOpen && <div className="border-t border-blue-500 bg-blue-700 px-5 py-5 shadow-xl md:hidden"><nav className="site-container flex flex-col gap-1">{links.map(([to, label]) => <NavLink onClick={closeMenu} key={to} to={to} className={({isActive}) => `rounded-xl px-4 py-3 font-semibold ${isActive ? "bg-white text-blue-700" : "text-blue-50"}`}>{label}</NavLink>)}<NavLink onClick={closeMenu} to="/cart" className="rounded-xl px-4 py-3 font-semibold text-blue-50">Cart ({cartCount})</NavLink><button onClick={() => { navigate(user ? "/profile" : "/login"); closeMenu(); }} className="mt-2 rounded-xl bg-white px-4 py-3 text-left font-bold text-blue-700">{user ? "Profile" : "Login"}</button></nav></div>}
  </header>;
}
export default Header;
