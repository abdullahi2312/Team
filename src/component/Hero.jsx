import { motion } from "framer-motion";
import { FaArrowRight, FaTruck, FaUndo, FaShieldAlt, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../Pages/Productcontext";

function Hero() {
  const navigate = useNavigate(); const { products } = useProducts(); const image = products[1]?.image || products[0]?.image;
  return <section className="relative isolate overflow-hidden bg-[#f7f8ff] pb-16 pt-32 sm:pb-20 sm:pt-40">
    <div className="absolute -left-36 top-0 -z-10 h-96 w-96 rounded-full bg-indigo-200/45 blur-3xl" /><div className="absolute right-0 top-20 -z-10 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl" />
    <div className="site-container grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
        <span className="eyebrow"><FaStar className="text-amber-400" /> Curated for everyday life</span>
        <h1 className="mt-6 max-w-2xl text-5xl font-black leading-[1.04] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">Things you’ll love, <span className="text-indigo-600">delivered simply.</span></h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Discover quality essentials, standout finds and trusted brands in one delightful shopping experience.</p>
        <div className="mt-9 flex flex-wrap gap-3"><button onClick={() => navigate("/product")} className="inline-flex items-center gap-3 rounded-xl bg-indigo-600 px-6 py-4 font-bold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700">Explore collection <FaArrowRight /></button><button onClick={() => navigate("/about")} className="rounded-xl border border-slate-200 bg-white px-6 py-4 font-bold text-slate-800 transition hover:border-indigo-200 hover:text-indigo-600">Our story</button></div>
        <div className="mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">{[[FaTruck,"Fast delivery","On every order"],[FaUndo,"Easy returns","30-day guarantee"],[FaShieldAlt,"Safe checkout","Payments protected"]].map(([Icon,title,sub]) => <div key={title} className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-indigo-600 shadow-sm"><Icon /></span><div><p className="text-sm font-bold text-slate-900">{title}</p><p className="text-xs text-slate-500">{sub}</p></div></div>)}</div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .1 }} className="relative mx-auto w-full max-w-lg">
        <div className="absolute inset-8 rounded-[3rem] bg-indigo-600/10 rotate-6" />
        <div className="relative overflow-hidden rounded-[2rem] border-8 border-white bg-slate-200 shadow-2xl shadow-indigo-200/60">{image ? <img src={image} alt="Featured product" className="aspect-[4/5] w-full object-cover" /> : <div className="aspect-[4/5]" />}</div>
        <div className="absolute -bottom-5 -left-4 rounded-2xl bg-white p-4 shadow-xl"><p className="text-xs font-semibold text-slate-500">Trusted by shoppers</p><p className="mt-1 text-lg font-black text-slate-950">4.9 <span className="text-amber-400">★★★★★</span></p></div>
      </motion.div>
    </div>
  </section>;
}
export default Hero;
