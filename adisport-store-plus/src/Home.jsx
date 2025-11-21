import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PRODUCTS } from "./data";
import ProductCard from "./parts/ProductCard";

export default function Home(){
  const featured = PRODUCTS.slice(0,6);
  return (
    <>
      <section className="relative overflow-hidden bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 items-center gap-8 py-12 md:py-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Move with purpose.</h1>
            <p className="mt-4 text-neutral-600 text-lg">Lightweight knits, responsive cushioning, and heritage tracks that never go out of style.</p>
            <div className="mt-6 flex gap-3">
              <Link to="/c/shoes" className="px-5 py-2 rounded-full bg-black text-white">Shop Shoes</Link>
              <Link to="/c/apparel" className="px-5 py-2 rounded-full border">Shop Apparel</Link>
            </div>
          </div>
          <motion.img
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            src="https://picsum.photos/seed/hero-shoe/1200/900"
            alt="Hero shoe"
            className="rounded-3xl shadow-xl"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-extrabold">Featured</h2>
          <Link to="/c/all" className="text-sm underline underline-offset-4">Shop all</Link>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>
    </>
  );
}
