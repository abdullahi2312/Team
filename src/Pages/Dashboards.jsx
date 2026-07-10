import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaTachometerAlt, FaBoxOpen, FaShoppingCart, FaBars, FaTimes, FaStore, FaUserShield, FaSignOutAlt, FaEnvelope, FaUserCircle } from "react-icons/fa";

const navItems = [
  { to: "/dashboard", label: "Overview", icon: FaTachometerAlt, roles: ["Super Admin"], end: true },
  { to: "/dashboard/products", label: "Products", icon: FaBoxOpen, roles: ["Super Admin", "Product Manager"] },
  { to: "/dashboard/orders", label: "Orders", icon: FaShoppingCart, roles: ["Super Admin", "Order Manager"] },
  { to: "/dashboard/customers", label: "Customers", icon: FaUserShield, roles: ["Super Admin", "Customer Manager"] },
  { to: "/dashboard/messages", label: "Messages", icon: FaEnvelope, roles: ["Super Admin", "Message Manager"] },
  { to: "/dashboard/adminregister", label: "Admin register", icon: FaUserShield, roles: ["Super Admin"] },
  { to: "/dashboard/profile", label: "My profile", icon: FaUserCircle, roles: ["Super Admin", "Product Manager", "Order Manager", "Customer Manager", "Message Manager"] },
];

function Dashboards() {
  const [menuOpen, setMenuOpen] = useState(false); const navigate = useNavigate();
  const admin = JSON.parse(localStorage.getItem("admin")); const role = admin?.role || "";
  const handleLogout = () => { localStorage.removeItem("admin"); localStorage.removeItem("role"); navigate("/login"); };
  return <div className="min-h-screen bg-slate-100 lg:flex">
    {menuOpen && <button aria-label="Close menu" className="fixed inset-0 z-40 bg-slate-950/45 lg:hidden" onClick={() => setMenuOpen(false)} />}
    <aside className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-blue-700 text-white shadow-2xl transition-transform duration-300 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <div className="flex h-20 items-center justify-between border-b border-blue-500 px-6"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-blue-700"><FaStore /></span><div><p className="font-black">Online Shop</p><p className="text-xs text-blue-200">Admin workspace</p></div></div><button className="text-xl lg:hidden" onClick={() => setMenuOpen(false)}><FaTimes /></button></div>
      <div className="px-4 py-6"><p className="px-3 text-xs font-bold uppercase tracking-widest text-blue-300">Main menu</p><nav className="mt-3 space-y-1">{navItems.filter((item) => item.roles.includes(role)).map(({to,label,icon:Icon,end}) => <NavLink key={to} to={to} end={end} onClick={() => setMenuOpen(false)} className={({isActive}) => `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition ${isActive ? "bg-white text-blue-700 shadow-lg shadow-blue-900/10" : "text-blue-100 hover:bg-blue-600 hover:text-white"}`}><Icon className="text-base" />{label}</NavLink>)}</nav></div>
      <div className="mt-auto border-t border-blue-500 p-4"><button onClick={handleLogout} className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 py-3 text-sm font-bold transition hover:bg-rose-500"><FaSignOutAlt /> Logout</button></div>
    </aside>
    <button onClick={() => setMenuOpen(true)} className="fixed right-4 top-4 z-30 grid h-11 w-11 place-items-center rounded-xl bg-blue-700 text-white shadow-lg lg:hidden"><FaBars /></button>
    <main className="min-w-0 flex-1 p-4 pt-20 sm:p-6 sm:pt-20 lg:p-8"><Outlet /></main>
  </div>;
}
export default Dashboards;
